import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Building2, Globe, ChevronRight } from 'lucide-react';
import type { LocationRecord } from '../../data/locations/locationTypes';
import { allLocations } from '../../data/locations/locations';

interface LocationHierarchyNavProps {
  location: LocationRecord;
}

export const LocationHierarchyNav: React.FC<LocationHierarchyNavProps> = ({ location }) => {
  // Find parent region
  const regionObj = allLocations.find(
    (l) => l.pageType === 'region' && (l.slug === location.regionSlug || l.region.toLowerCase() === location.region.toLowerCase())
  );

  // Find parent country
  const countryObj = allLocations.find(
    (l) => l.pageType === 'country' && (l.slug === location.countrySlug || l.country.toLowerCase() === location.country.toLowerCase())
  );

  // Find child countries if region
  const childCountries = location.pageType === 'region'
    ? allLocations.filter((l) => l.pageType === 'country' && (l.regionSlug === location.slug || l.region.toLowerCase() === location.region.toLowerCase()))
    : [];

  // Find child cities if country
  const childCities = location.pageType === 'country'
    ? allLocations.filter((l) => l.pageType === 'city' && (l.countrySlug === location.slug || l.country.toLowerCase() === location.country.toLowerCase()))
    : [];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-left my-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* City Hierarchy Context */}
        {location.pageType === 'city' && (
          <>
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-sidqly-green-soft font-bold flex items-center gap-1.5">
                <MapPin size={14} /> Location Hierarchy Context
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-bold text-white">{location.cityName || location.slug}</span>
                {countryObj && (
                  <> is a city in <span className="text-white font-medium">{countryObj.country}</span></>
                )}
                {regionObj && (
                  <> (<span className="text-white font-medium">{regionObj.region}</span> region)</>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
              {countryObj && (
                <Link
                  to={countryObj.canonicalPath || `/locations/${countryObj.slug}`}
                  className="inline-flex items-center gap-1.5 bg-sidqly-green-emerald/20 text-sidqly-green-soft hover:bg-sidqly-green-emerald hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-sidqly-green-soft/30"
                >
                  <Building2 size={14} /> View {countryObj.country} <ChevronRight size={14} />
                </Link>
              )}
              {regionObj && (
                <Link
                  to={regionObj.canonicalPath || `/locations/${regionObj.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white/10 text-white hover:bg-white/20 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-white/10"
                >
                  <Globe size={14} /> Explore {regionObj.region} <ChevronRight size={14} />
                </Link>
              )}
            </div>
          </>
        )}

        {/* Country Hierarchy Context */}
        {location.pageType === 'country' && (
          <>
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-sidqly-green-soft font-bold flex items-center gap-1.5">
                <Building2 size={14} /> Country Service Area
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-bold text-white">{location.country}</span>
                {regionObj && (
                  <> is located in the <span className="text-white font-medium">{regionObj.region}</span> region.</>
                )}
                {childCities.length > 0 && (
                  <> Features {childCities.length} key city service areas.</>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
              {regionObj && (
                <Link
                  to={regionObj.canonicalPath || `/locations/${regionObj.slug}`}
                  className="inline-flex items-center gap-1.5 bg-sidqly-green-emerald/20 text-sidqly-green-soft hover:bg-sidqly-green-emerald hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-sidqly-green-soft/30"
                >
                  <Globe size={14} /> Explore {regionObj.region} Region <ChevronRight size={14} />
                </Link>
              )}
              <Link
                to="/locations"
                className="inline-flex items-center gap-1.5 bg-white/10 text-white hover:bg-white/20 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-white/10"
              >
                All Global Service Areas <ArrowUpRight size={14} />
              </Link>
            </div>
          </>
        )}

        {/* Region Hierarchy Context */}
        {location.pageType === 'region' && (
          <>
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-sidqly-green-soft font-bold flex items-center gap-1.5">
                <Globe size={14} /> Regional Service Hub
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-bold text-white">{location.region}</span> covers key country operations and city service hubs.
                {childCountries.length > 0 && (
                  <> ({childCountries.length} countries indexed)</>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
              <Link
                to="/locations"
                className="inline-flex items-center gap-1.5 bg-sidqly-green-emerald/20 text-sidqly-green-soft hover:bg-sidqly-green-emerald hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all border border-sidqly-green-soft/30"
              >
                View All Global Locations <ChevronRight size={14} />
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Child Locations Grid on Country / Region Pages */}
      {location.pageType === 'country' && childCities.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
            City Service Areas in {location.country}:
          </div>
          <div className="flex flex-wrap gap-2">
            {childCities.map((city) => (
              <Link
                key={city.slug}
                to={city.canonicalPath || `/locations/${city.slug}`}
                className="bg-white/10 hover:bg-sidqly-green-emerald text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
              >
                {city.cityName || city.slug}
              </Link>
            ))}
          </div>
        </div>
      )}

      {location.pageType === 'region' && childCountries.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
            Indexed Countries in {location.region}:
          </div>
          <div className="flex flex-wrap gap-2">
            {childCountries.map((country) => (
              <Link
                key={country.slug}
                to={country.canonicalPath || `/locations/${country.slug}`}
                className="bg-white/10 hover:bg-sidqly-green-emerald text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
              >
                {country.country}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationHierarchyNav;
