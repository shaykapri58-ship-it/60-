"use client";

import { Bone, Gauge, History, PersonStanding, Target } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

interface FactorCard {
  title: string;
  icon: LucideIcon;
  span: "lead" | "default";
  tone: "navy" | "brand" | "plain";
}

const factors: FactorCard[] = [
  {
    title: "רמת הכושר הנוכחית",
    icon: Gauge,
    span: "lead",
    tone: "navy",
  },
  {
    title: "כאבי גב, ברכיים או כתפיים",
    icon: Bone,
    span: "default",
    tone: "brand",
  },
  {
    title: "מגבלות תנועה",
    icon: PersonStanding,
    span: "default",
    tone: "plain",
  },
  {
    title: "ניסיון קודם",
    icon: History,
    span: "default",
    tone: "plain",
  },
  {
    title: "המטרות האישיות שלכם",
    icon: Target,
    span: "default",
    tone: "plain",
  },
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
    <section className="bg-secondary/60 py-14 sm:py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-bold leading-[1.25] tracking-tight text-navy sm:text-3xl md:text-4xl">
            למה אימון אחרי גיל 50 חייב להיות שונה?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-[1.05rem]">
            אימונים שמתאימים לבן 25 לא תמיד מתאימים לבן 60. בגיל הזה חשוב
            לקחת בחשבון הרבה יותר ממספר החזרות והמשקלים.
          </p>
        </div>

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {factors.map((factor) => (
            <motion.div
              key={factor.title}
              variants={item}
              className={cn(
                factor.span === "lead" && "md:col-span-2 lg:col-span-2"
              )}
            >
              <FactorTile factor={factor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FactorTile({ factor }: { factor: FactorCard }) {
  const Icon = factor.icon;

  const outerTone =
    factor.tone === "navy"
      ? "bg-navy/8 ring-navy/10"
      : factor.tone === "brand"
        ? "bg-brand/8 ring-brand/12"
        : "bg-black/[0.03] ring-black/5";

  const innerTone =
    factor.tone === "navy"
      ? "bg-gradient-to-br from-navy to-navy/85 text-navy-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
      : factor.tone === "brand"
        ? "bg-gradient-to-br from-brand/12 via-brand/5 to-transparent text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
        : "bg-card text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]";

  const iconBadge =
    factor.tone === "navy"
      ? "bg-white/12 text-navy-foreground"
      : factor.tone === "brand"
        ? "bg-brand/15 text-brand"
        : "bg-navy/6 text-navy";

  return (
    <div
      className={cn(
        "h-full rounded-[2rem] p-2 ring-1 ring-inset",
        outerTone
      )}
    >
      <div
        className={cn(
          "flex h-full min-h-[140px] flex-col justify-between rounded-[1.65rem] p-5 sm:min-h-[168px] sm:p-6",
          innerTone
        )}
      >
        <span
          className={cn(
            "flex size-10 items-center justify-center rounded-full sm:size-11",
            iconBadge
          )}
        >
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 text-base font-semibold leading-snug sm:mt-6 sm:text-lg">
          {factor.title}
        </h3>
      </div>
    </div>
  );
}
