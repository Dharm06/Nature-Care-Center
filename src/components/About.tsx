import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Heart, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Nature First',
    desc: 'Every product is sourced from nature — pure, unprocessed, and chemical-free, maintaining the integrity of natural ingredients.',
  },
  {
    icon: Heart,
    title: 'Health Focused',
    desc: 'We believe true wellness comes from within nature. Our curated selection promotes holistic well-being for the entire family.',
  },
  {
    icon: Shield,
    title: 'Trusted Quality',
    desc: 'Years of experience and a commitment to quality ensure every product meets the highest standards of purity and effectiveness.',
  },
  {
    icon: Users,
    title: 'Community Care',
    desc: 'Built on trust within Rajkot\'s community, we provide personalized wellness guidance to every customer who walks in.',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36 overflow-hidden bg-cream-50">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,169,29,0.3), transparent)' }} />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #3a7d3a 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-20 left-0 w-72 h-72 opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #d4a91d 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-luxury">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Natural organic products display"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 glass-light border border-gold-200/50 rounded-2xl p-4 w-44 shadow-luxury"
            >
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-gradient-gold">5.0</div>
                <div className="flex justify-center gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-sm">★</span>
                  ))}
                </div>
                <div className="font-sans text-[10px] text-forest-600 tracking-wider uppercase font-medium">Customer Rating</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-6 -left-6 glass-light border border-forest-200/50 rounded-2xl p-4 w-44 shadow-luxury"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #3a7d3a, #5a9e5a)' }}
                >
                  <Leaf className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-forest-800">100%</div>
                  <div className="font-sans text-[9px] text-forest-600 tracking-wider uppercase">Natural</div>
                </div>
              </div>
            </motion.div>

            <div
              className="absolute -inset-4 rounded-[40px] border border-forest-200/30 pointer-events-none"
              style={{ transform: 'rotate(-2deg)' }}
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold-500" />
                <span className="section-label text-gold-600 text-[10px]">Our Story</span>
              </div>
              <h2 className="heading-lg text-forest-900">
                Nature's Finest,{' '}
                <em className="text-gradient-gold not-italic">Delivered with Care</em>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-sans text-base text-forest-700/80 leading-relaxed mb-6"
            >
              Nature Care Center was founded on a simple belief: that nature provides the best medicine.
              Nestled in the heart of Rajkot, we have become a trusted destination for families seeking
              genuine, chemical-free wellness alternatives.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="font-sans text-base text-forest-700/80 leading-relaxed mb-10"
            >
              From pure forest honey to carefully curated herbal supplements and organic products,
              every item on our shelves is chosen for its authenticity, purity, and proven benefits.
              We don't just sell products — we guide families toward a healthier, more natural lifestyle.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm border border-forest-100 rounded-2xl p-4 hover:bg-white hover:shadow-nature transition-all duration-300 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, rgba(58,125,58,0.1), rgba(212,169,29,0.1))' }}
                  >
                    <item.icon className="w-4 h-4 text-forest-600" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-forest-800 mb-1">{item.title}</h4>
                  <p className="font-sans text-[11px] text-forest-600/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
