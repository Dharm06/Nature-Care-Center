import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  { title: 'Organic Products', desc: 'Certified organic products free from pesticides.', image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600', accent: '#3a7d3a' },
  { title: 'Natural Health Supplements', desc: 'Science-backed herbal supplements.', image: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=600', accent: '#65a042' },
  { title: 'Herbal Products', desc: 'Ayurvedic formulations for holistic wellness.', image: 'https://images.pexels.com/photos/3654772/pexels-photo-3654772.jpeg?auto=compress&cs=tinysrgb&w=600', accent: '#2d632d' },
];

export default function ProductCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="products" ref={ref} className="relative py-28 md:py-36 bg-forest-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-500" />
            <span className="section-label text-gold-500/80 text-[10px]">Featured Categories</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="heading-lg text-white mb-5">Explore Our <em className="text-gradient-gold not-italic">Natural Collection</em></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/5]"
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredId === i ? 1.07 : 1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-lg font-semibold text-white mb-2">{cat.title}</h3>
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={hoveredId === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-sans text-xs text-white/60 mb-3 overflow-hidden"
                >
                  {cat.desc}
                </motion.p>
                <div className="flex items-center gap-1.5 font-sans text-xs text-white/70">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
