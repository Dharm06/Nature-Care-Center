import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 3500);
      const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
      return () => { clearTimeout(tooltipTimer); clearTimeout(hideTimer); };
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-dark border border-white/10 rounded-2xl px-4 py-3 max-w-[200px] shadow-luxury"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-forest-700 rounded-full flex items-center justify-center"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
                <p className="font-sans text-xs text-white/80 leading-snug">
                  Chat with us on WhatsApp for product enquiries!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href="https://wa.me/919825900012?text=Hi! I'm interested in your natural wellness products from Nature Care Center."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-luxury"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            <MessageCircle className="w-6 h-6 text-white" fill="white" />
            <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#25D366' }} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
