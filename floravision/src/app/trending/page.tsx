import Image from "next/image";
import SectionHeading from "@/src/components/SectionHeading";

export default function TrendingPage() {
  return (
    <section className="py-16 bg-bg-primary min-h-screen">
      <div className="container mx-auto px-8">
        <SectionHeading>Our Trendy plants</SectionHeading>

        <div className="flex flex-col gap-10">
          <div className="bg-bg-card border border-white/5 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                For Your Desks <br /> Decorations
              </h2>
              <p className="text-text-secondary font-sans leading-relaxed mb-8 max-w-md">
                Elevate your workspace with our curated selection of desk plants. Each one is chosen for its beauty and low-maintenance needs.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-sans font-medium text-white">Rs. 599/-</span>
                <div className="flex gap-3">
                  <button className="px-6 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white hover:text-bg-primary transition-all">
                    Explore
                  </button>
                  <button className="p-2 border border-white/30 rounded-lg text-white hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-square md:aspect-auto h-[400px]">
              <Image
                src="/plants/aglaonema.png"
                alt="Aglaonema plant"
                fill
                className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>

          <div className="bg-bg-card border border-white/5 rounded-2xl p-10 flex flex-col md:flex-row-reverse items-center gap-12 overflow-hidden">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                For Your Home <br /> & Office
              </h2>
              <p className="text-text-secondary font-sans leading-relaxed mb-8 max-w-md">
                Bring a touch of nature to your home office with these resilient and charming succulent arrangements.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-sans font-medium text-white">Rs. 399/-</span>
                <div className="flex gap-3">
                  <button className="px-6 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white hover:text-bg-primary transition-all">
                    Explore
                  </button>
                  <button className="p-2 border border-white/30 rounded-lg text-white hover:bg-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full aspect-square md:aspect-auto h-[400px]">
              <Image
                src="/plants/succulent.png"
                alt="Succulent plant"
                fill
                className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
