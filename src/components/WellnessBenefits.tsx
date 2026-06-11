import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sun, Shield, Leaf, Droplets, Activity } from 'lucide-react';

const benefits = [
  { icon: Sun, title: 'Better Lifestyle', stat: '85%', label: 'Feel Better' },
  { icon: Shield, title: 'Natural Immunity Support', stat: '3x', label: 'Stronger' },
  { icon: Leaf, title: 'Chemical-Free Living', stat: '0%', label: 'Chemicals' },
  { icon: Droplets, title: 'Organic Wellness', stat: '100%', label: 'Organic' },
  { icon: Activity, title: 'Healthy Daily Habits', stat: '365', label: 'Days Better' },
];

export default function WellnessBenefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="wellness" ref={ref} className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0f7f0 0%, #fdfaee 50%, #f5f9f0 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-500" />
            <span className="section-label text-gold-600 text-[10px]">Wellness Benefits</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="heading-lg text-forest-900 mb-5">Transform Your <em className="text-gradient-nature not-italic">Health Naturally</em></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-gradient-to-br from-forest-50 to-nature-50 border border-forest-200/50 rounded-3xl p-6 overflow-hidden hover:shadow-luxury transition-all duration-500 group"
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-400 group-hover:scale-110" style={{ background: '#3a7d3a15' }}>
                <benefit.icon className="w-5 h-5 text-forest-600" strokeWidth={1.5} />
              </div>

              <div className="mb-3">
                <div className="font-display text-3xl font-bold text-gradient-gold">{benefit.stat}</div>
                <div className="font-sans text-[9px] tracking-widest uppercase font-medium text-forest-600/60">{benefit.label}</div>
              </div>

              <h3 className="font-display text-sm font-semibold text-forest-800 mb-2">{benefit.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative bg-forest-900 rounded-3xl overflow-hidden mt-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { value: '8+', label: 'Happy Customers', sub: 'Reviews & counting' },
              { value: '100%', label: 'Natural Products', sub: 'No synthetic additives' },
              { value: '5★', label: 'Average Rating', sub: 'On Google Business' },
              { value: '∞', label: 'Natural Variants', sub: 'Always new products' },
            ].map((item) => (
              <div key={item.label} className="px-8 py-8 text-center">
                <div className="font-display text-3xl font-bold text-gradient-gold mb-1">{item.value}</div>
                <div className="font-display text-sm font-medium text-white/80">{item.label}</div>
                <div className="font-sans text-xs text-white/40 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
