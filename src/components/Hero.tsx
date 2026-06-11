import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Leaf, Sparkles } from 'lucide-react';

const floatingLeaves = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 12 + Math.random() * 20,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 6,
  opacity: 0.3 + Math.random() * 0.4,
}));

const HoneyJar3D = () => (
  <div className="relative w-48 h-60 md:w-64 md:h-80 perspective-1000">
    <motion.div
      animate={{
        rotateY: [0, 8, -8, 0],
        rotateX: [0, 5, -3, 0],
        y: [0, -14, -6, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full h-full transform-style-3d relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-48 md:w-48 md:h-60">
        <div className="relative w-full h-full">
          <div
            className="absolute bottom-0 w-full h-[85%] rounded-b-3xl rounded-t-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(237,217,112,0.9) 0%, rgba(212,169,29,0.95) 40%, rgba(184,135,19,0.85) 100%)',
              boxShadow: '4px 8px 24px rgba(212,169,29,0.4), -4px 4px 16px rgba(255,255,255,0.3), inset 4px 4px 16px rgba(255,255,255,0.2)',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-3/4"
              style={{
                background: 'linear-gradient(180deg, rgba(212,169,29,0.6) 0%, rgba(184,135,19,0.9) 100%)',
              }}
            />
            <div className="absolute top-0 left-2 w-4 h-full bg-gradient-to-r from-white/30 to-transparent rounded-full" />
            <div className="absolute top-4 right-4 w-2 h-8 bg-white/20 rounded-full" />
            {[1, 2, 3].map(i => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gold-300/40"
                style={{
                  width: 6 + i * 4,
                  height: 6 + i * 4,
                  bottom: `${20 + i * 15}%`,
                  left: `${20 + i * 18}%`,
                }}
                animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </div>

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-10 md:w-36 md:h-12 rounded-t-xl"
            style={{
              background: 'linear-gradient(180deg, #5a9e5a 0%, #3a7d3a 100%)',
              boxShadow: '0 4px 12px rgba(58,125,58,0.4)',
            }}
          >
            <div className="absolute inset-1 rounded-t-lg bg-forest-400/30" />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-forest-800/30" />
          </div>

          <div
            className="absolute bottom-[20%] left-3 right-3 py-2 px-3 rounded-lg text-center"
            style={{
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <div className="font-display text-[9px] md:text-[10px] font-bold text-forest-700 tracking-wider uppercase">Pure Honey</div>
            <div className="font-sans text-[7px] md:text-[8px] text-gold-600 tracking-widest">Nature Care</div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 rounded-full"
        style={{ background: 'linear-gradient(180deg, #d4a91d, #b88713)' }}
        animate={{ height: [0, 24, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  </div>
);

const FloatingHerb = ({ delay, x, size }: { delay: number; x: number; size: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: '-5%' }}
    animate={{
      y: ['0%', '110vh'],
      rotate: [0, 180, 360],
      opacity: [0, 0.6, 0.4, 0],
    }}
    transition={{
      duration: 10 + Math.random() * 5,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  >
    <Leaf
      style={{ width: size, height: size, color: `rgba(90,158,90,${0.4 + Math.random() * 0.3})` }}
      strokeWidth={1}
    />
  </motion.div>
);

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Natural wellness background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/60 to-forest-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 via-transparent to-forest-950/40" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 30% 60%, rgba(58,125,58,0.8) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(212,169,29,0.4) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingLeaves.map((leaf) => (
          <FloatingHerb key={leaf.id} delay={leaf.delay} x={leaf.x} size={leaf.size} />
        ))}
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? 'rgba(212,169,29,0.6)' : 'rgba(90,158,90,0.5)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="h-px w-8 bg-gold-400" />
              <span className="section-label text-gold-400 text-[10px]">
                Trusted Since Years · Rajkot, Gujarat
              </span>
              <div className="h-px w-8 bg-gold-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="heading-xl text-white mb-6 text-shadow-luxury"
            >
              <span className="block">Pure Nature.</span>
              <span className="block text-gradient-gold">Better Health.</span>
              <span className="block">Trusted Wellness.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="font-sans text-base md:text-lg text-white/65 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Discover chemical-free, herbal, organic, and natural wellness products
              trusted by families across Rajkot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-10"
            >
              <span className="font-serif text-lg text-gold-400/70 italic">
                નૌતન કેર સેન્ટર
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToProducts}
                className="btn-luxury bg-gradient-to-r from-gold-600 to-gold-500 text-forest-950 rounded-full font-semibold hover:from-gold-500 hover:to-gold-400 shadow-gold group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={scrollToContact}
                className="btn-luxury glass border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-14 flex items-center gap-8 justify-center lg:justify-start"
            >
              {[
                { value: '5.0', label: 'Star Rating' },
                { value: '8+', label: 'Happy Reviews' },
                { value: '100%', label: 'Natural Products' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-semibold text-gold-400">{stat.value}</div>
                  <div className="font-sans text-[10px] text-white/40 tracking-widest uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-80 h-80 rounded-full opacity-20 morph-blob"
                style={{
                  background: 'radial-gradient(ellipse, rgba(212,169,29,0.8) 0%, rgba(58,125,58,0.4) 60%, transparent 100%)',
                  filter: 'blur(40px)',
                }}
              />
            </div>

            <HoneyJar3D />

            <motion.div
              className="absolute top-8 -right-4 glass border border-gold-400/30 rounded-2xl px-4 py-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="font-sans text-xs text-white/80 font-medium">100% Natural</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-16 -left-8 glass border border-forest-500/30 rounded-2xl px-4 py-3"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-nature-400" />
                <span className="font-sans text-xs text-white/80 font-medium">Chemical Free</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-12 glass border border-white/20 rounded-2xl px-4 py-3"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <div className="flex flex-col items-center">
                <div className="flex text-gold-400 text-xs gap-0.5">★★★★★</div>
                <span className="font-sans text-[9px] text-white/60 mt-1">Trusted</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors duration-300"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
}
