"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

interface FactorCard {
  title: string;
  lead?: boolean;
}

const factors: FactorCard[] = [
  { title: "רמת הכושר הנוכחית", lead: true },
  { title: "כאבי גב, ברכיים או כתפיים" },
  { title: "מגבלות תנועה" },
  { title: "ניסיון קודם" },
  { title: "המטרות האישיות שלכם" },
];

export function WhyDifferent() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const item: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 24, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: EASE },
    },
  };

  return (
    <section className="bg-secondary/60 py-[clamp(2.5rem,9vw,3.5rem)] md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-extrabold leading-[1.25] tracking-tight text-navy sm:text-3xl md:text-4xl">
            למה אימון אחרי גיל 50 חייב להיות שונה?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-[1.05rem]">
            אימונים שמתאימים לבן 25 לא תמיד מתאימים לבן 60. בגיל הזה חשוב
            לקחת בחשבון הרבה יותר ממספר החזרות והמשקלים.
          </p>
        </div>

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-7 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {factors.map((factor, index) => (
            <motion.div
              key={factor.title}
              variants={item}
              className={cn(factor.lead && "md:col-span-2 lg:col-span-2")}
            >
              <FactorTile factor={factor} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FactorTile({
  factor,
  index,
}: {
  factor: FactorCard;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group h-full rounded-[1.75rem] p-1.5 ring-1 ring-inset transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hover:-translate-y-0.5",
        factor.lead
          ? "bg-navy/10 ring-navy/12 md:hover:shadow-[0_18px_36px_-18px_rgba(15,23,42,0.4)]"
          : "bg-black/[0.025] ring-black/[0.06] md:hover:shadow-[0_14px_30px_-16px_rgba(15,23,42,0.2)]"
      )}
    >
      <div
        className={cn(
          "flex h-full items-center gap-4 rounded-[1.4rem] p-4 sm:p-5",
          factor.lead
            ? "bg-gradient-to-br from-navy to-navy/88 text-navy-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]"
            : "bg-card text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
        )}
      >
        <span
          className={cn(
            "shrink-0 text-xl font-extrabold tabular-nums sm:text-2xl",
            factor.lead ? "text-white/35" : "text-brand/40"
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-base font-semibold leading-snug sm:text-lg">
          {factor.title}
        </h3>
      </div>
    </div>
  );
}
