import Image from "next/image";
import Link from "next/link";

export default function HeroPage() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-primary">
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 max-w-2xl">
          <h1 className="text-7xl md:text-8xl font-serif text-white leading-tight mb-8">
            Earth's <br /> <span className="italic">Exhale</span>
          </h1>
          <p className="text-lg text-text-secondary font-sans leading-relaxed mb-10 max-w-lg">
            "Zero Exhale" symbolize the purity and vitality of the life force that plants breathe into our surroundings. Immerse yourself in a world where every leaf is a testament to nature's artistry.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/top-selling"
              className="px-8 py-3 rounded-full border border-white/30 text-white font-sans font-medium hover:bg-white hover:text-bg-primary transition-all duration-300"
            >
              Buy Now
            </Link>
            <button className="flex items-center gap-3 px-8 py-3 rounded-full text-white/80 font-sans font-medium hover:text-white transition-colors group">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </span>
              Our Demo
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl aspect-square">
            <Image
              src="/plants/aglaonema.png"
              alt="Aglaonema plant"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="absolute bottom-10 right-0 md:-right-10 bg-bg-card border border-white/10 p-6 rounded-2xl max-w-xs z-20">
            <h3 className="text-white font-sans font-medium mb-1">Indoor Plant —</h3>
            <p className="text-text-secondary text-sm mb-4">Aglaonema plant</p>
            <button className="w-full py-2 bg-white text-bg-primary rounded-full text-sm font-sans font-semibold hover:bg-accent-green hover:text-white transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
