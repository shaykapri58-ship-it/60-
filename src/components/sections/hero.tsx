"use client";

import { UserRound } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { WhatsAppCta } from "@/components/whatsapp-cta";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
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
    <section className="relative overflow-hidden bg-background py-[clamp(1.75rem,7vw,3rem)] md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-[clamp(1.5rem,6vw,2.5rem)] px-4 sm:px-6 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={item}
            className="inline-flex items-center rounded-full bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent sm:px-4 sm:py-1.5 sm:text-[13px]"
          >
            אימוני כוח אישיים לבני 50+ ביבנה
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-[2rem] leading-[1.2] font-bold tracking-tight text-navy sm:mt-6 sm:text-4xl sm:leading-[1.14] md:text-5xl lg:text-[3.4rem] lg:leading-[1.12]"
          >
            הגוף כבר לא מגיב כמו פעם?
            <br />
            <span className="text-brand">זה לא חייב להיות ככה.</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 max-w-[46ch] space-y-3 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:space-y-4 sm:text-[1.05rem]"
          >
            <p>
              אם אתם בני 50 ומעלה ומרגישים שהכוח כבר לא מה שהיה, שאתם מתעייפים
              מהר יותר, מתקשים לעלות מדרגות, לקום מהכיסא, להרים קניות או פשוט
              מרגישים פחות בטוחים בתנועה – אתם לא לבד.
            </p>
            <p>
              אלו שינויים טבעיים שמגיעים עם הגיל, אבל הם לא חייבים להמשיך
              להחמיר.
            </p>
            <p>
              בעזרת אימוני כוח מותאמים אפשר לשפר משמעותית את הכוח, היציבות,
              שיווי המשקל והביטחון בתנועה – גם אם לא התאמנתם שנים.
            </p>
          </motion.div>

          <motion.div variants={item} id="hero-cta" className="mt-6 sm:mt-9">
            <WhatsAppCta
              label="קביעת שיחת ייעוץ ללא עלות"
              size="large"
              className="w-full sm:w-auto"
            />
            <p className="mt-3 text-center text-sm text-muted-foreground sm:mt-4 sm:text-right">
              ללא התחייבות • שיחה אישית קצרה
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.94, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px]"
        >
          <div className="relative aspect-square w-full">
            <div className="absolute left-1/2 top-1/2 size-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/15 via-accent/5 to-transparent" />
            <div className="absolute left-1/2 top-1/2 size-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-navy/10" />

            <div className="absolute left-1/2 top-1/2 aspect-[4/5] w-[68%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.25rem] shadow-[0_16px_36px_-18px_rgba(15,23,42,0.35)] ring-1 ring-black/5 md:shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45)]">
              {/* Placeholder: swap for a real photo of the trainer, see /public/images/README.txt */}
              <div className="flex size-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy/8 via-brand/6 to-navy/12 sm:gap-3">
                <UserRound
                  className="size-10 text-navy/25 sm:size-14 lg:size-16"
                  strokeWidth={1.25}
                />
                <span className="rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-medium text-navy/60 backdrop-blur sm:px-3 sm:text-xs">
                  התמונה שלך כאן
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
