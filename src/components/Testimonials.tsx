import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Rajesh Patel', review: 'All natural products available here. Chemical free products. Very satisfied.' },
  { name: 'Priya Shah', review: 'Best quality of honey. Genuine herbal and organic products.' },
  { name: 'Amit Mehta', review: 'Organic and variety of natural products. Genuinely impressive range.' },
  { name: 'Sunita Desai', review: 'Best quality. Consistent excellence and truly trusted wellness center.' },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-500" />
            <span className="section-label text-gold-600 text-[10px]">What Our Customers Say</span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="heading-lg text-forest-900 mb-5">Trusted by <em className="text-gradient-gold not-italic">Families in Rajkot</em></h2>

          <div className="inline-flex items-center gap-6 mt-4">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-gradient-gold">5.0</div>
              <div className="flex justify-center gap-0.5 my-1">{[...Array(5)].map((_, i) => <span key={i} className="text-gold-500">★</span>)}</div>
              <div className="font-sans text-[10px] text-forest-600/60 uppercase">Overall Rating</div>
            </div>
            <div className="h-12 w-px bg-forest-200" />
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-forest-700">8+</div>
              <div className="font-sans text-[10px] text-forest-600/60 uppercase mt-2">Happy Reviews</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-luxury overflow-hidden">
            <div className="absolute top-6 right-8 opacity-5"><Quote className="w-24 h-24" /></div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45 }}
              >
                <div className="flex gap-0.5 mb-6">{[...Array(5)].map((_, i) => <span key={i} className="text-gold-500">★</span>)}</div>
                <blockquote className="mb-8">
                  <p className="font-serif text-xl md:text-2xl text-forest-800 leading-relaxed italic font-light">
                    "{testimonials[current].review}"
                  </p>
                </blockquote>
                <div>
                  <div className="font-display text-base font-semibold text-forest-800">{testimonials[current].name}</div>
                  <div className="font-sans text-xs text-forest-600/60">Verified Customer</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2 bg-gradient-to-r from-gold-600 to-gold-400' : 'w-2 h-2 bg-forest-200'}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-forest-200 flex items-center justify-center text-forest-600 hover:border-gold-400 transition-all duration-300">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-forest-200 flex items-center justify-center text-forest-600 hover:border-gold-400 transition-all duration-300">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
