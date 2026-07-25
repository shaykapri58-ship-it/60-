"use client";

import { useEffect, useState } from "react";

import { WhatsAppCta } from "@/components/whatsapp-cta";
import { cn } from "@/lib/utils";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const finalCtaSection = document.getElementById("final-cta-section");
    if (!heroCta || !finalCtaSection) return;

    let heroCtaVisible = true;
    let finalCtaVisible = false;

    const update = () => setVisible(!heroCtaVisible && !finalCtaVisible);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroCtaVisible = entry.isIntersecting;
        update();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    const finalObserver = new IntersectionObserver(
      ([entry]) => {
        finalCtaVisible = entry.isIntersecting;
        update();
      },
      { rootMargin: "0px" }
    );

    heroObserver.observe(heroCta);
    finalObserver.observe(finalCtaSection);

    return () => {
      heroObserver.disconnect();
      finalObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden",
        "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border-t border-navy/10 bg-background/95 px-4 py-3 shadow-[0_-12px_28px_-20px_rgba(15,23,42,0.35)] backdrop-blur-lg">
        <WhatsAppCta
          label="קביעת שיחת ייעוץ ללא עלות"
          size="default"
          className="w-full"
        />
      </div>
    </div>
  );
}
