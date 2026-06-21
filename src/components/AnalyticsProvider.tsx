import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GoogleTagManager from './GoogleTagManager';
import GoogleAnalytics from './GoogleAnalytics';
import { analyticsConfig } from '../config/analytics';

const AnalyticsProvider: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // This handles SPA route changes for GTM if needed
    if (analyticsConfig.enableGTM && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics />
    </>
  );
};

export default AnalyticsProvider;
