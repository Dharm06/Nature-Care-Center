import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Natural wellness background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/88" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-gold-500/50" />
            <span className="section-label text-gold-500/70 text-[10px]">Start Your Journey</span>
            <div className="h-px w-8 bg-gold-500/50" />
          </div>

          <h2 className="heading-xl text-white mb-6 text-shadow-luxury">
            Start Your Natural <span className="text-gradient-gold">Wellness Journey</span> Today
          </h2>

          <p className="font-sans text-base md:text-lg text-white/55 leading-relaxed mb-12 max-w-2xl mx-auto">
            Walk into Nature Care Center and discover pure, organic, and herbal wellness products curated for you and your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://maps.google.com/maps?q=Nature+Care+Center+Rajkot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-gradient-to-r from-gold-600 to-gold-500 text-forest-950 rounded-full font-semibold hover:from-gold-500 hover:to-gold-400 shadow-gold group"
            >
              <MapPin className="w-4 h-4" />
              Visit Nature Care Center
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="https://wa.me/919825900012"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury glass border border-white/20 text-white rounded-full hover:bg-white/10 group"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Enquiry
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span className="font-sans text-xs">Sardarnagar, Rajkot, Gujarat 360001</span>
            </div>
            <div className="hidden sm:block h-3 w-px bg-white/20" />
            <a href="tel:+919825900012" className="flex items-center gap-2 hover:text-white/70 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-sans text-xs">+91 98259 00012</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
