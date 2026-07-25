Add the real hero portrait here as hero-portrait.jpg (recommended: 1000x1250px, portrait orientation, well-lit, of the actual trainer).
Then in src/components/sections/hero.tsx, replace the placeholder <div> block (marked with a comment) with a Next.js <Image src="/images/hero-portrait.jpg" fill className="object-cover" ... /> inside the same rounded container.
