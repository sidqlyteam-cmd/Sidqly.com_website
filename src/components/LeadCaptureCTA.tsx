import React from 'react';
import { SIDQLY_LEAD_FORM_URL } from '../config/leadForm';
import { trackEvent } from '../lib/analytics';

interface LeadCaptureCTAProps {
  label: string;
  placement: string;
  inquiryContext?: string;
  className?: string;
  children?: React.ReactNode;
}

export const LeadCaptureCTA: React.FC<LeadCaptureCTAProps> = ({
  label,
  placement,
  inquiryContext,
  className = "bg-sidqly-green-emerald text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all inline-block text-center focus:ring-2 focus:ring-sidqly-green-soft focus:outline-none",
  children
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Fire event BEFORE redirect: event: lead_form_click
    // Include ONLY: page_path, placement, cta_label, inquiry_context (No PII!)
    trackEvent('lead_form_click', {
      page_path: window.location.pathname,
      placement: placement,
      cta_label: label,
      inquiry_context: inquiryContext || 'general_lead_capture'
    });
  };

  return (
    <a
      href={SIDQLY_LEAD_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={`${label} (opens in a new tab on Google Forms)`}
    >
      {children || label}
    </a>
  );
};

export default LeadCaptureCTA;
