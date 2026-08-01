const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

export const trackEvent = (
  eventName: 'demo_submit' | 'guided_pilot_apply' | 'pricing_cta_click' | 'contact_submit' | 'email_capture',
  params: { cta_source: string; [key: string]: unknown }
) => {
  if (typeof window === 'undefined') return;

  const eventParams = {
    page_path: window.location.pathname + window.location.search,
    device_type: getDeviceType(),
    cta_source: params.cta_source,
    ...params,
  };

  // Strict PII Filter: strip any email, name, or phone number fields
  const piiKeys = ['email', 'name', 'phone', 'fullname', 'telephone', 'emailaddress', 'user_email'];
  piiKeys.forEach((key) => {
    if (key in eventParams) {
      delete eventParams[key];
    }
  });

  // Also strip any potential email-like strings from all string parameters to enforce privacy compliance
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  Object.keys(eventParams).forEach((key) => {
    const val = eventParams[key];
    if (typeof val === 'string') {
      eventParams[key] = val.replace(emailRegex, '[REDACTED_EMAIL]');
    }
  });

  if (window.gtag) {
    console.log(`[GA4 Event] ${eventName}:`, eventParams);
    window.gtag('event', eventName, eventParams);
  } else {
    console.log(`[GA4 Event (Fallback)] ${eventName}:`, eventParams);
  }
};
