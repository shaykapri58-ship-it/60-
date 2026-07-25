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
            className="mt-5 text-[2.1rem] leading-[1.16] font-extrabold tracking-[-0.02em] text-navy sm:mt-6 sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-[3.6rem] lg:leading-[1.08]"
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
            {/* soft radial backdrop for depth */}
            <div className="absolute left-1/2 top-1/2 size-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand/12 via-accent/6 to-transparent" />
            <div className="absolute left-1/2 top-1/2 size-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full ring-1 ring-navy/8" />
            {/* grounding contact shadow */}
            <div className="absolute left-1/2 top-[60%] h-[42%] w-[56%] -translate-x-1/2 rounded-full bg-navy/25 opacity-40 blur-2xl" />

            {/* double-bezel frame: outer shell + inner photo */}
            <div className="absolute left-1/2 top-1/2 aspect-[4/5] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[2.35rem] bg-background p-1.5 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.4)] ring-1 ring-black/[0.06] md:shadow-[0_32px_64px_-24px_rgba(15,23,42,0.45)]">
              <div className="relative size-full overflow-hidden rounded-[1.85rem] ring-1 ring-inset ring-white/50">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="מאמן כוח אישי, יבנה"
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 360px, 300px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
