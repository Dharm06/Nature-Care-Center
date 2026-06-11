import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, ShieldCheck, Star, Droplets, HeartPulse, Award } from 'lucide-react';

const features = [
  { icon: Leaf, title: '100% Natural Products', desc: 'Complete authenticity and purity in every purchase.' },
  { icon: ShieldCheck, title: 'Chemical-Free Solutions', desc: 'No harmful chemicals or synthetic additives.' },
  { icon: Star, title: 'Premium Organic Selection', desc: 'Each chosen for superior quality and effectiveness.' },
  { icon: Droplets, title: 'Pure Quality Honey', desc: 'Unprocessed forest honey with natural enzymes.' },
  { icon: HeartPulse, title: 'Trusted Health Guidance', desc: 'Expert wellness consultation for your goals.' },
  { icon: Award, title: 'Years of Customer Trust', desc: 'Built on honesty, quality, and genuine care.' },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden" style={{ background: 'linear-gradient(180deg, #fdfaee 0%, #f0f7f0 100%)' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,169,29,0.3), transparent)' }} />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #3a7d3a, transparent)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-500" />
            <span className="section-label text-gold-600 text-[10px]">Why Choose Nature Care</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="heading-lg text-forest-900 mb-5">The <em className="text-gradient-nature not-italic">Natural Difference</em></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 border border-forest-100/60 hover:border-forest-200 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -6 }}
            >
              <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-400 group-hover:scale-110 bg-gold-50">
                <feature.icon className="w-5 h-5 text-gold-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-sm font-semibold text-forest-800 mb-2">{feature.title}</h3>
              <p className="font-sans text-xs text-forest-600/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
