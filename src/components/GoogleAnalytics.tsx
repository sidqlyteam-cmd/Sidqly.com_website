import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analyticsConfig } from '../config/analytics';

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!analyticsConfig.enableDirectGA || !analyticsConfig.gaMeasurementId) return;

    if (!document.getElementById('ga-script')) {
      const script = document.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaMeasurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      window.gtag = gtag;
    }

    if (window.gtag) {
      window.gtag('config', analyticsConfig.gaMeasurementId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

// Add global declaration for dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default GoogleAnalytics;
