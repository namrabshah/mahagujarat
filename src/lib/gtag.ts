export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-W0VWFECM0";

/**
 * Safe Google Analytics 4 event tracking helper.
 * Strictly avoids PII (Personally Identifiable Information).
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (
    typeof window !== "undefined" &&
    typeof (window as unknown as { gtag?: Function }).gtag === "function"
  ) {
    (window as unknown as { gtag: Function }).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPhoneClick = (locationLabel: string) => {
  trackEvent("click_phone", "Contact", locationLabel);
};

export const trackWhatsAppClick = (locationLabel: string) => {
  trackEvent("click_whatsapp", "Contact", locationLabel);
};

export const trackEnquirySubmit = (productCategory?: string) => {
  trackEvent("submit_enquiry", "Lead", productCategory || "General");
};

export const trackProductView = (productName: string) => {
  trackEvent("view_product", "Product", productName);
};
