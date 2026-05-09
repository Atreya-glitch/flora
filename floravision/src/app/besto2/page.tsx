"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/src/components/sectionHeading";

const plants = [
  {
    name: "Dieffenbachia",
    image: "/plants/dieffenbachia.png",
    alt: "Dieffenbachia plant",
  },
  {
    name: "Sansevieria",
    image: "/plants/sansevieria.png",
    alt: "Sansevieria plant",
  },
  {
    name: "Monstera",
    image: "/plants/monstera.png",
    alt: "Monstera plant",
  },
];

export default function BestO2Page() {
  const [current, setCurrent] = useState(0);
  const total = plants.length;
  const plant = plants[current];

  return (
    <section className="py-16 bg-bg-primary min-h-screen">
      <div className="container mx-auto px-8">
        <SectionHeading>Our Best O2 Plants</SectionHeading>

        <div className="bg-bg-card border border-white/5 rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-16 overflow-hidden">
          <div className="flex-1 relative w-full aspect-square md:h-[500px]">
            <Image
              src={plant.image}
              alt={plant.alt}
              fill
              className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              We Have Small And Best O2 Plants Collection
            </h2>

            <div className="space-y-6 text-text-secondary font-sans leading-relaxed text-lg mb-12">
              <p>
                Oxygen-producing plants, often referred to as &ldquo;O2 plants,&rdquo; are those that release oxygen into the atmosphere through the process of photosynthesis.
              </p>
              <p>
                Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button className="px-10 py-3 border border-white/30 rounded-full text-white font-sans font-medium hover:bg-white hover:text-bg-primary transition-all">
                Explore
              </button>
              <div className="flex items-center gap-6">
                <button
                  aria-label="Previous plant"
                  onClick={() => setCurrent((current - 1 + total) % total)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <span className="text-white font-sans font-medium text-lg" aria-live="polite">
                  {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                </span>
                <button
                  aria-label="Next plant"
                  onClick={() => setCurrent((current + 1) % total)}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {plants.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to plant ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
