import { regionsData } from './regions';
import { countriesData } from './countries';
import { citiesData } from './cities';
import { cityContentTier1 } from './cityContentTier1';
import type { LocationRecord } from './locationTypes';

export const allLocations: LocationRecord[] = [
  ...regionsData,
  ...countriesData,
  ...citiesData,
  ...cityContentTier1
];
