import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-serif text-white flex items-center">
          <span className="mr-2" aria-hidden="true">🌿</span>
          FloraVision
        </span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-sm font-sans font-medium text-white/80">
        <Link href="/home" className="hover:text-white transition-colors">Home</Link>
        <Link href="/top-selling" className="hover:text-white transition-colors">Worth Types</Link>
        <Link href="/trending" className="hover:text-white transition-colors">More</Link>
        <Link href="/footer" className="hover:text-white transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-6">
        <button aria-label="Search" className="text-white hover:text-accent-green transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
        <button aria-label="Open cart" className="text-white hover:text-accent-green transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
