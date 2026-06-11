import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-[200] bg-forest-950 flex flex-col items-center justify-center"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(212,169,29,0.4) 0%, transparent 60%)',
            }}
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 flex flex-col items-center gap-6 mb-12"
          >
            <div className="relative w-20 h-20 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(212,169,29,0.3), transparent)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(58,125,58,0.3), rgba(212,169,29,0.2))',
                  border: '1px solid rgba(212,169,29,0.3)',
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Leaf className="w-8 h-8 text-gold-400" strokeWidth={1.5} />
                </motion.div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="font-display text-2xl font-semibold text-white tracking-wide mb-1">
                Nature Care Center
              </h1>
              <p className="font-sans text-xs text-white/30 tracking-[0.3em] uppercase">
                Rajkot · Gujarat
              </p>
              <p className="font-serif text-sm text-gold-400/50 italic mt-1">
                નૌતન કેર સેન્ટર
              </p>
            </div>
          </motion.div>

          <div className="relative z-10 w-48">
            <div className="h-px bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #3a7d3a, #d4a91d)',
                  width: `${Math.min(progress, 100)}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-3 text-center">
              <span className="font-sans text-[10px] text-white/25 tracking-widest uppercase">
                Loading wellness...
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
