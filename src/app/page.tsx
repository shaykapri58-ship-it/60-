import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { WhyDifferent } from "@/components/sections/why-different";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <WhyDifferent />
      <ProcessTimeline />
      <FinalCta />
    </main>
  );
}
