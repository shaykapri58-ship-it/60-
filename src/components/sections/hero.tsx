"use client";

import Image from "next/image";
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
      : { opacity: 0, y: 18, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background pt-[clamp(1.5rem,6vw,2.5rem)] pb-[clamp(2rem,7vw,3rem)] md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 sm:px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.96, filter: "blur(8px)" }
          }
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:order-2 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.06] sm:rounded-[2.25rem] md:shadow-[0_36px_80px_-28px_rgba(15,23,42,0.4)]">
            <Image
              src="/images/hero-portrait.jpg"
              alt="מאמן כוח אישי, יבנה"
              fill
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 400px, 360px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="order-2 mt-6 lg:order-1 lg:mt-0"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2.5">
            <span className="h-px w-7 bg-brand" />
            <span className="text-[13px] font-semibold tracking-wide text-brand">
              אימוני כוח אישיים לבני 50+ ביבנה
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-4 text-[2.25rem] leading-[1.1] font-extrabold tracking-[-0.025em] text-navy sm:mt-5 sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.85rem]"
          >
            הגוף כבר לא מגיב כמו פעם?
            <br />
            <span className="text-brand">זה לא חייב להיות ככה.</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 max-w-[42ch] space-y-2.5 text-[0.95rem] leading-[1.55] text-muted-foreground sm:mt-5 sm:space-y-3 sm:text-base md:text-[1.05rem]"
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

          <motion.div variants={item} id="hero-cta" className="mt-6 sm:mt-8">
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
      </div>
    </section>
  );
}
