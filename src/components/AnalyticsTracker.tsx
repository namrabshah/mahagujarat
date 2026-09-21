"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialRender = useRef(true);

  useEffect(() => {
    // Skip initial pageview because the Google tag
    // in app/layout.tsx already handles it.
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (
      pathname &&
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: Function }).gtag === "function"
    ) {
      const url = searchParams?.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      (window as unknown as { gtag: Function }).gtag(
        "config",
        GA_MEASUREMENT_ID,
        {
          page_path: url,
        },
      );
    }
  }, [pathname, searchParams]);

  return null;
}