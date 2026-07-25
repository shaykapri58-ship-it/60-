import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/whatsapp";

interface WhatsAppCtaProps {
  label: string;
  size?: "default" | "large";
  className?: string;
}

export function WhatsAppCta({
  label,
  size = "default",
  className,
}: WhatsAppCtaProps) {
  const isLarge = size === "large";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/cta flex w-full items-center justify-center gap-2.5 rounded-full bg-whatsapp pe-1.5 text-whatsapp-foreground shadow-[0_1px_2px_rgba(15,23,42,0.08),0_10px_22px_-14px_rgba(15,23,42,0.4)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_1px_2px_rgba(15,23,42,0.1),0_22px_44px_-16px_rgba(15,23,42,0.5)] active:scale-[0.98] sm:gap-3 sm:pe-2 sm:inline-flex sm:w-auto",
        isLarge
          ? "min-h-[48px] ps-6 py-1.5 text-base font-semibold sm:min-h-[56px] sm:ps-8 sm:py-2 sm:text-lg"
          : "min-h-11 ps-5 py-1 text-sm font-medium sm:min-h-[48px] sm:ps-6 sm:py-1.5 sm:text-[0.95rem]",
        className
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-inset ring-white/25 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/cta:-translate-x-1 group-hover/cta:scale-105",
          isLarge ? "size-9 sm:size-12" : "size-8 sm:size-9"
        )}
      >
        <MessageCircle
          className={isLarge ? "size-4 sm:size-6" : "size-3.5 sm:size-4"}
          strokeWidth={1.75}
        />
      </span>
    </a>
  );
}
