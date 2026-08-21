import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Globe } from 'lucide-react';
import type { LocationRecord, LocationRelatedLink } from '../../data/locations/locationTypes';
import { allLocations } from '../../data/locations/locations';
import { useLanguage } from '../../i18n/LanguageContext';

interface RelatedLocationsSectionProps {
  location: LocationRecord;
}

export const RelatedLocationsSection: React.FC<RelatedLocationsSectionProps> = ({ location }) => {
  const { getLocalizedPath } = useLanguage();

  // Build context-aware related locations
  const getContextualLocations = (): LocationRelatedLink[] => {
    const results: LocationRelatedLink[] = [];
    const addedSlugs = new Set<string>();

    // Helper to add a location if valid and not self
    const addLocation = (loc: LocationRecord | undefined, relationship: string) => {
      if (!loc || loc.slug === location.slug || addedSlugs.has(loc.slug)) return;
      addedSlugs.add(loc.slug);
      results.push({
        label: loc.cityName || loc.country || loc.region || loc.h1,
        href: loc.canonicalPath || `/locations/${loc.slug}`,
        relationship,
      });
    };

    // 1. Manually specified related locations in data (if any)
    if (location.relatedLocations && location.relatedLocations.length > 0) {
      location.relatedLocations.forEach((rel) => {
        // Find matching record to get slug if possible
        const matched = allLocations.find((l) => l.canonicalPath === rel.href || `/locations/${l.slug}` === rel.href);
        if (matched) {
          addLocation(matched, rel.relationship || 'Related');
        } else {
          // Add raw link if not matching a record
          if (!addedSlugs.has(rel.href)) {
            addedSlugs.add(rel.href);
            results.push(rel);
          }
        }
      });
    }

    // Context-Aware Algorithm based on Location Level:
    if (location.pageType === 'city') {
      // Prioritize:
      // a) Sibling cities in same country
      const siblingCities = allLocations.filter(
        (l) => l.pageType === 'city' && l.countrySlug === location.countrySlug && l.slug !== location.slug
      );
      siblingCities.slice(0, 4).forEach((city) => addLocation(city, 'City'));

      // b) Parent Country
      const countryObj = allLocations.find(
        (l) => l.pageType === 'country' && (l.slug === location.countrySlug || l.country.toLowerCase() === location.country.toLowerCase())
      );
      addLocation(countryObj, 'Country');

      // c) Parent Region
      const regionObj = allLocations.find(
        (l) => l.pageType === 'region' && (l.slug === location.regionSlug || l.region.toLowerCase() === location.region.toLowerCase())
      );
      addLocation(regionObj, 'Region');
    } else if (location.pageType === 'country') {
      // Prioritize:
      // a) Key cities within this country
      const citiesInCountry = allLocations.filter(
        (l) => l.pageType === 'city' && (l.countrySlug === location.slug || l.country.toLowerCase() === location.country.toLowerCase())
      );
      citiesInCountry.slice(0, 4).forEach((city) => addLocation(city, 'City'));

      // b) Sibling countries within same region
      const siblingCountries = allLocations.filter(
        (l) => l.pageType === 'country' && l.regionSlug === location.regionSlug && l.slug !== location.slug
      );
      siblingCountries.slice(0, 3).forEach((cntry) => addLocation(cntry, 'Neighbor'));

      // c) Parent Region
      const regionObj = allLocations.find(
        (l) => l.pageType === 'region' && (l.slug === location.regionSlug || l.region.toLowerCase() === location.region.toLowerCase())
      );
      addLocation(regionObj, 'Region');
    } else if (location.pageType === 'region') {
      // Prioritize:
      // a) Countries within this region
      const countriesInRegion = allLocations.filter(
        (l) => l.pageType === 'country' && (l.regionSlug === location.slug || l.region.toLowerCase() === location.region.toLowerCase())
      );
      countriesInRegion.forEach((cntry) => addLocation(cntry, 'Country'));

      // b) Other Regions
      const otherRegions = allLocations.filter((l) => l.pageType === 'region' && l.slug !== location.slug);
      otherRegions.slice(0, 3).forEach((reg) => addLocation(reg, 'Region'));
    }

    // General fallback: Global Service Areas index
    if (!addedSlugs.has('/locations')) {
      results.push({
        label: 'Global Service Areas',
        href: '/locations',
        relationship: 'Hub',
      });
    }

    // Limit to 8 items max to avoid excessive links
    return results.slice(0, 8);
  };

  const relatedList = getContextualLocations();

  if (relatedList.length === 0) return null;

  const getItemIcon = (rel?: string) => {
    switch (rel) {
      case 'City':
        return <MapPin size={14} className="text-sidqly-green-emerald flex-shrink-0" />;
      case 'Country':
      case 'Neighbor':
        return <Building2 size={14} className="text-sidqly-green-emerald flex-shrink-0" />;
      case 'Region':
      case 'Hub':
      default:
        return <Globe size={14} className="text-sidqly-green-emerald flex-shrink-0" />;
    }
  };

  return (
    <div className="bg-sidqly-ivory p-6 sm:p-8 rounded-3xl border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-sidqly-navy flex items-center gap-2">
          <MapPin size={20} className="text-sidqly-green-emerald" /> Related Service Areas & Locations
        </h3>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        Explore related parent, neighboring, and city service areas supported by Sidqly.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {relatedList.map((item, idx) => (
          <Link
            key={idx + item.href}
            to={getLocalizedPath(item.href)}
            className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-sidqly-navy hover:border-sidqly-green-emerald hover:text-sidqly-green-emerald transition-all shadow-sm group"
          >
            <div className="flex items-center gap-2 min-w-0 pr-2">
              {getItemIcon(item.relationship)}
              <span className="truncate">{item.label}</span>
            </div>
            {item.relationship && (
              <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md uppercase tracking-wider font-bold group-hover:bg-sidqly-green-soft/20 group-hover:text-sidqly-green-deep transition-colors flex-shrink-0">
                {item.relationship}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLocationsSection;
