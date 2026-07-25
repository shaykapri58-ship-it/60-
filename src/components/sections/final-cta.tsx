"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { WhatsAppCta } from "@/components/whatsapp-cta";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FinalCta() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 22, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section
      id="final-cta-section"
      className="relative overflow-hidden bg-navy py-[clamp(2.5rem,9vw,3.5rem)] md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[320px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/15 blur-[70px] sm:size-[420px] sm:blur-[90px] md:size-[560px] md:blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_0%,transparent_45%,rgba(0,0,0,0.28)_100%)]"
      />

      <motion.div
        variants={container}
        initial={shouldReduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto max-w-2xl px-4 text-center sm:px-6 md:px-8"
      >
        <motion.h2
          variants={item}
          className="text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy-foreground sm:text-[2.25rem] md:text-[3rem]"
        >
          רוצים לבדוק אם זה מתאים גם לכם?
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-foreground/70 sm:mt-5 sm:text-[1.05rem]"
        >
          לחצו על הכפתור וקבעו שיחת ייעוץ אישית ללא עלות.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex justify-center sm:mt-10">
          <WhatsAppCta label="קביעת שיחת ייעוץ ללא עלות" size="large" />
        </motion.div>
      </motion.div>
    </section>
  );
}
