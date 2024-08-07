"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const usePrefetch = () => {
  const router = useRouter();

  useEffect(() => {
    const prefetchLinks = () => {
      
      const aElements = document.querySelectorAll("a[href]");
      aElements.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("/")) {
          console.log(`Prefetching ${href}`);
          router.prefetch(href);
        }
      });
      
      const linkComponents = document.querySelectorAll("[data-prefetch]");
      linkComponents.forEach((link) => {
        const href = link.getAttribute("data-prefetch");
        if (href && href.startsWith("/")) {
          console.log(`Prefetching ${href}`);
          router.prefetch(href);
        }
      });
    };

    prefetchLinks();
  }, [router]);
};

export default usePrefetch;
