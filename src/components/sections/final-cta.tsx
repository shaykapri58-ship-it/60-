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
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[560px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/20 blur-[120px]"
      />

      <motion.div
        variants={container}
        initial={shouldReduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto max-w-2xl px-4 text-center md:px-8"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl md:text-[2.75rem]"
        >
          רוצים לבדוק אם זה מתאים גם לכם?
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-navy-foreground/70"
        >
          לחצו על הכפתור וקבעו שיחת ייעוץ אישית ללא עלות.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex justify-center">
          <WhatsAppCta label="קביעת שיחת ייעוץ ללא עלות" size="large" />
        </motion.div>
      </motion.div>
    </section>
  );
}
