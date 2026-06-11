import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setVisible(currentY < lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-forest-950/90 backdrop-blur-xl border-b border-white/10 shadow-luxury'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-forest-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <Leaf className="w-5 h-5 text-gold-400 relative z-10" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-display text-sm font-semibold tracking-wide text-white leading-none">
                Nature Care
              </div>
              <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/80 leading-none mt-0.5">
                Center · Rajkot
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`relative font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-300 pb-1 ${
                  activeLink === link.href
                    ? 'text-gold-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919825900012"
              className="flex items-center gap-2 font-sans text-xs tracking-wider text-gold-300 hover:text-gold-200 transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98259 00012</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-luxury bg-gradient-to-r from-gold-600 to-gold-500 text-forest-950 rounded-full text-[10px] tracking-[0.2em] px-6 py-2.5 font-semibold hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-gold"
            >
              Visit Us
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
          >
            <div className="absolute inset-0 bg-forest-950/98 backdrop-blur-2xl" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex-1 flex flex-col justify-center px-8">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="block py-4 font-serif text-3xl font-light text-white/80 hover:text-gold-400 transition-colors duration-300 border-b border-white/5"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-10 space-y-4"
                >
                  <a
                    href="tel:+919825900012"
                    className="flex items-center gap-3 text-gold-400 font-sans text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    +91 98259 00012
                  </a>
                  <a
                    href="https://wa.me/919825900012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-forest-950 rounded-full px-8 py-3 font-sans text-xs tracking-widest uppercase font-semibold"
                  >
                    WhatsApp Us
                  </a>
                </motion.div>
              </div>
              <div className="px-8 pb-10">
                <p className="font-sans text-xs text-white/20 tracking-wider">
                  Sardarnagar, Rajkot, Gujarat 360001
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
