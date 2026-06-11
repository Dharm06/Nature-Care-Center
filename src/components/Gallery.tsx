import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Organic natural products', label: 'Organic Products', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/1860801/pexels-photo-1860801.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Pure forest honey', label: 'Pure Honey', span: 'col-span-1 row-span-1' },
  { src: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Natural health supplements', label: 'Health Supplements', span: 'col-span-1 row-span-1' },
  { src: 'https://images.pexels.com/photos/3654772/pexels-photo-3654772.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Herbal products', label: 'Herbal Products', span: 'col-span-1 row-span-2' },
  { src: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Organic wellness', label: 'Wellness Essentials', span: 'col-span-1 row-span-1' },
  { src: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Natural lifestyle', label: 'Natural Lifestyle', span: 'col-span-2 row-span-1' },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section id="gallery" ref={ref} className="relative py-28 md:py-36 overflow-hidden bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-500" />
            <span className="section-label text-gold-500/80 text-[10px]">Gallery</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="heading-lg text-white mb-5">The Essence of <em className="text-gradient-gold not-italic">Natural Beauty</em></h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`${item.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
              onClick={() => setLightbox(item)}
            >
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <div className="glass border border-white/20 rounded-xl px-3 py-2 inline-flex items-center gap-2">
                  <ZoomIn className="w-3.5 h-3.5 text-gold-400" />
                  <span className="font-sans text-xs text-white/90">{item.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto rounded-3xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
