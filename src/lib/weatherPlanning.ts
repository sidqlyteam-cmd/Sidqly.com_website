export interface WeatherEstimate {
  temperatureC: number;
  condition: string;
  isRaining: boolean;
  isHot: boolean;
  isCold: boolean;
  windSpeed: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  advice: string[];
}

export async function fetchWeatherEstimate(city: string): Promise<WeatherEstimate> {
  // First, get coords from city name using Open-Meteo Geocoding API
  const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&format=json`);
  if (!geoRes.ok) throw new Error('Geocoding failed');
  const geoData = await geoRes.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error('City not found');
  }

  const { latitude, longitude } = geoData.results[0];

  return fetchWeatherByCoords(latitude, longitude);
}

export async function fetchWeatherByCoords(lat: number, lng: number): Promise<WeatherEstimate> {
  // Get current weather using Open-Meteo Forecast API
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m,weather_code&timezone=auto`);
  if (!res.ok) throw new Error('Weather forecast failed');
  const data = await res.json();

  const current = data.current;
  const temp = current.temperature_2m;
  const wind = current.wind_speed_10m;
  const code = current.weather_code;

  // Rough WMO Weather interpretation
  // https://open-meteo.com/en/docs
  let isRaining = false;
  let condition = "Clear/Cloudy";
  if ([51,53,55,56,57,61,63,65,66,67,80,81,82,95,96,99].includes(code)) {
    isRaining = true;
    condition = "Rain/Precipitation";
  } else if ([71,73,75,77,85,86].includes(code)) {
    isRaining = true; // Treating snow similarly for distribution risk
    condition = "Snow";
  } else if ([45, 48].includes(code)) {
      condition = "Fog";
  }

  const isHot = temp >= 35;
  const isCold = temp <= 10;
  const isWindy = wind >= 30; // km/h

  let riskLevel: 'Low' | 'Medium' | 'High' = 'Low';
  const advice: string[] = [];

  if (isHot) {
    riskLevel = 'Medium';
    advice.push("Hot weather: Ensure hydration for volunteers, monitor food safety (especially cooked meals), and provide shaded waiting areas for beneficiaries.");
  }
  if (isRaining) {
    riskLevel = riskLevel === 'Medium' || isWindy ? 'High' : 'Medium';
    advice.push("Rain/Precipitation: Use covered packaging for rations, anticipate route delays, and ensure safe dry areas for proof capture (photos/signatures).");
  }
  if (isCold) {
    advice.push("Cold weather: Prioritize warm meals/rations, minimize waiting times, and consider providing heating at distribution points.");
  }
  if (isWindy) {
     riskLevel = 'Medium';
     advice.push("Wind/Dust: Secure loose packaging, stabilize tents/tables, and take precautions during photo/video proof capture.");
  }

  if (advice.length === 0) {
      advice.push("Conditions appear optimal. Maintain standard dignity-safe distribution practices and clear proof collection workflows.");
  }

  return {
    temperatureC: temp,
    condition,
    isRaining,
    isHot,
    isCold,
    windSpeed: wind,
    riskLevel,
    advice
  };
}
