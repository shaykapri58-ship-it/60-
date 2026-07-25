"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    title: "שיחת ייעוץ אישית",
    body: "נכיר אתכם ונבין את המטרות שלכם.",
  },
  {
    title: "בניית תוכנית אישית",
    body: "מותאמת לרמה ולמטרות שלכם.",
  },
  {
    title: "אימונים אישיים",
    body: "בטוחים, מקצועיים ובהתקדמות הדרגתית.",
  },
  {
    title: "מעקב והתאמות",
    body: "כדי להמשיך להשתפר לאורך הדרך.",
  },
];

export function ProcessTimeline() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 20, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="bg-background py-[clamp(2.5rem,9vw,3.5rem)] md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-[1.75rem] font-bold leading-[1.25] tracking-tight text-navy sm:text-3xl md:text-4xl">
          ככה נראית הדרך שלכם להתחזק
        </h2>

        <div className="relative mt-8 sm:mt-12 md:mt-20">
          <div className="absolute top-6 bottom-6 start-6 w-px bg-gradient-to-b from-navy/20 via-navy/15 to-navy/5 sm:top-7 sm:bottom-7 sm:start-7 md:start-8" />

          <motion.ol
            variants={container}
            initial={shouldReduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 sm:space-y-10 md:space-y-14"
          >
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                variants={item}
                className="flex items-start gap-4 sm:gap-6 md:gap-8"
              >
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-navy-foreground shadow-[0_10px_22px_-12px_rgba(15,23,42,0.5)] sm:size-14 sm:text-xl md:size-16 md:text-2xl">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1.5 sm:pt-2 md:pt-3">
                  <h3 className="text-lg font-semibold text-navy sm:text-xl md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground sm:mt-2 sm:text-[1.02rem]">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
