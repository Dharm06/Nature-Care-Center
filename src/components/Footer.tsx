import { Leaf, Phone, MapPin, MessageCircle } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Wellness', href: '#wellness' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-forest-600 rounded-full opacity-20" />
                <Leaf className="w-5 h-5 text-gold-400 relative z-10" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display text-sm font-semibold tracking-wide text-white">Nature Care Center</div>
                <div className="font-sans text-[9px] tracking-wider uppercase text-gold-400/60 mt-0.5">Rajkot</div>
              </div>
            </div>

            <p className="font-sans text-xs text-white/40 leading-relaxed mb-5">
              Rajkot's trusted destination for 100% natural, organic, and herbal wellness products.
            </p>

            <div className="font-serif text-sm text-gold-400/50 italic mb-6">
              નૌતન કેર સેન્ટર
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-500">★</span>
                ))}
              </div>
              <span className="font-sans text-xs text-white/50">5.0 · 8+ Reviews</span>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] tracking-wider uppercase text-gold-500/70 mb-5 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-sans text-xs text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] tracking-wider uppercase text-gold-500/70 mb-5 font-medium">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold-500/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="font-sans text-xs text-white/40 leading-relaxed">
                  Landmark Complex, Tagore Road, Sardarnagar, Rajkot, Gujarat 360001
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold-500/60 flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+919825900012" className="font-sans text-xs text-white/40 hover:text-gold-400">
                  +91 98259 00012
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <MessageCircle className="w-4 h-4 text-gold-500/60 flex-shrink-0" strokeWidth={1.5} />
                <a href="https://wa.me/919825900012" target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-white/40 hover:text-gold-400">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-white/25 tracking-wider">
            © {new Date().getFullYear()} Nature Care Center, Rajkot. All rights reserved.
          </p>
          <p className="font-sans text-[10px] text-white/20 tracking-wider">
            Natural Health Consultant · Organic Products · Herbal Wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
