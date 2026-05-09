import Link from "next/link";

export default function FooterPage() {
  return (
    <footer className="py-16 bg-bg-primary border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl font-serif text-white flex items-center">
                <span className="mr-2">🌿</span>
                FloraVision<span className="text-accent-green">.</span>
              </span>
            </div>
            <p className="text-text-secondary font-sans leading-relaxed mb-10 max-w-sm">
              From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.
            </p>
            <div className="flex items-center gap-8 text-sm font-sans font-medium text-white/60">
              <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors">FB</Link>
              <Link href="#" aria-label="Twitter" className="hover:text-white transition-colors">TW</Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">LI</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-xl font-sans font-semibold text-white mb-8">Quick Link's</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/home" className="text-text-secondary hover:text-white transition-colors font-sans">Home</Link>
              </li>
              <li>
                <Link href="/top-selling" className="text-text-secondary hover:text-white transition-colors font-sans">Type's Of plant's</Link>
              </li>
              <li>
                <Link href="/footer" className="text-text-secondary hover:text-white transition-colors font-sans">Contact</Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-white transition-colors font-sans">Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-xl font-sans font-semibold text-white mb-8">For Every Update.</h4>
            <div className="flex bg-bg-card border border-white/10 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-grow bg-transparent px-6 py-4 text-white font-sans outline-none placeholder:text-white/20"
              />
              <button className="bg-white text-bg-primary px-8 py-4 font-sans font-bold text-sm tracking-widest hover:bg-accent-green hover:text-white transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex justify-center">
          <p className="text-sm text-text-secondary font-sans">
            FloraVision ® all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
}
