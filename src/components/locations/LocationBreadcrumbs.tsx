import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Home } from 'lucide-react';
import type { LocationRecord } from '../../data/locations/locationTypes';
import { allLocations } from '../../data/locations/locations';
import { generateBreadcrumbSchema } from '../../lib/schema';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../i18n/LanguageContext';

interface LocationBreadcrumbsProps {
  location: LocationRecord;
}

export const LocationBreadcrumbs: React.FC<LocationBreadcrumbsProps> = ({ location }) => {
  const { getLocalizedPath, dir, t } = useLanguage();

  const items: { name: string; path: string }[] = [
    { name: t('nav.home', 'Home'), path: '/' },
    { name: t('nav.locations', 'Locations'), path: '/locations' },
  ];

  // Helper to find parent region object
  const regionObj = allLocations.find(
    (l) => l.pageType === 'region' && (l.slug === location.regionSlug || l.region.toLowerCase() === location.region.toLowerCase())
  );

  // Helper to find parent country object
  const countryObj = allLocations.find(
    (l) => l.pageType === 'country' && (l.slug === location.countrySlug || l.country.toLowerCase() === location.country.toLowerCase())
  );

  if (location.pageType === 'region') {
    items.push({
      name: location.region || location.h1,
      path: location.canonicalPath || `/locations/${location.slug}`,
    });
  } else if (location.pageType === 'country') {
    if (regionObj) {
      items.push({
        name: regionObj.region,
        path: regionObj.canonicalPath || `/locations/${regionObj.slug}`,
      });
    } else if (location.region) {
      items.push({
        name: location.region,
        path: `/locations/${location.regionSlug || location.region.toLowerCase().replace(/\s+/g, '-')}`,
      });
    }
    items.push({
      name: location.country,
      path: location.canonicalPath || `/locations/${location.slug}`,
    });
  } else if (location.pageType === 'city') {
    if (regionObj) {
      items.push({
        name: regionObj.region,
        path: regionObj.canonicalPath || `/locations/${regionObj.slug}`,
      });
    } else if (location.region) {
      items.push({
        name: location.region,
        path: `/locations/${location.regionSlug || location.region.toLowerCase().replace(/\s+/g, '-')}`,
      });
    }

    if (countryObj) {
      items.push({
        name: countryObj.country,
        path: countryObj.canonicalPath || `/locations/${countryObj.slug}`,
      });
    } else if (location.country) {
      items.push({
        name: location.country,
        path: `/locations/${location.countrySlug || location.country.toLowerCase().replace(/\s+/g, '-')}`,
      });
    }

    items.push({
      name: location.cityName || location.slug,
      path: location.canonicalPath || `/locations/${location.slug}`,
    });
  }

  // Generate schema format with localized links
  const schemaBreadcrumbs = items.map((item) => ({
    name: item.name,
    item: getLocalizedPath(item.path),
  }));
  const breadcrumbSchema = generateBreadcrumbSchema(schemaBreadcrumbs);

  const SeparatorIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-400 font-medium">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const localizedPath = getLocalizedPath(item.path);
            return (
              <li key={item.path + index} className="flex items-center gap-1.5">
                {index > 0 && <SeparatorIcon size={14} className="text-gray-500 flex-shrink-0" />}
                {isLast ? (
                  <span className="text-sidqly-green-soft font-bold truncate max-w-[180px] sm:max-w-xs" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={localizedPath}
                    className="hover:text-white transition-colors flex items-center gap-1 text-gray-300"
                  >
                    {index === 0 && <Home size={14} className="inline-block" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default LocationBreadcrumbs;
