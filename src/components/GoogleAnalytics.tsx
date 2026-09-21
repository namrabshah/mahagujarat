import { Suspense } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import AnalyticsTracker from "./AnalyticsTracker";

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}
