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
        "group/cta flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp pe-2 text-whatsapp-foreground shadow-[0_1px_2px_rgba(15,23,42,0.08),0_16px_32px_-14px_rgba(15,23,42,0.45)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_1px_2px_rgba(15,23,42,0.1),0_22px_44px_-16px_rgba(15,23,42,0.5)] active:scale-[0.98] sm:inline-flex sm:w-auto",
        isLarge
          ? "min-h-[56px] ps-8 py-2 text-lg font-semibold"
          : "min-h-[48px] ps-6 py-1.5 text-[0.95rem] font-medium",
        className
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-inset ring-white/25 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/cta:-translate-x-1 group-hover/cta:scale-105",
          isLarge ? "size-12" : "size-9"
        )}
      >
        <MessageCircle
          className={isLarge ? "size-6" : "size-4"}
          strokeWidth={1.75}
        />
      </span>
    </a>
  );
}
