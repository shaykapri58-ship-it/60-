"use client";

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
    <section className="relative overflow-hidden bg-background pt-[clamp(3rem,12vw,6rem)] pb-[clamp(2.5rem,9vw,4.5rem)] md:pt-28 md:pb-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 md:px-8"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2.5">
          <span className="h-px w-7 bg-brand" />
          <span className="text-[13px] font-semibold tracking-wide text-brand">
            אימוני כוח אישיים לבני 50+ ביבנה
          </span>
          <span className="h-px w-7 bg-brand" />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-5 text-[2.35rem] leading-[1.1] font-extrabold tracking-[-0.025em] text-navy sm:mt-6 sm:text-[2.9rem] md:text-[3.5rem] lg:text-[4rem] lg:leading-[1.06]"
        >
          הגוף כבר לא מגיב כמו פעם?
          <br />
          <span className="text-brand">זה לא חייב להיות ככה.</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-5 max-w-[52ch] space-y-3 text-[0.98rem] leading-[1.6] text-muted-foreground sm:mt-6 sm:text-base md:text-[1.05rem]"
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

        <motion.div
          variants={item}
          id="hero-cta"
          className="mt-7 flex w-full flex-col items-center sm:mt-9"
        >
          <WhatsAppCta
            label="קביעת שיחת ייעוץ ללא עלות"
            size="large"
            className="w-full sm:w-auto"
          />
          <p className="mt-3 text-sm text-muted-foreground sm:mt-4">
            ללא התחייבות • שיחה אישית קצרה
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
