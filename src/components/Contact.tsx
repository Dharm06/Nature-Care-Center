import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden bg-cream-50"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,169,29,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold-500" />
            <span className="section-label text-gold-600 text-[10px]">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="heading-lg text-forest-900 mb-5">
            Visit Us in{" "}
            <em className="text-gradient-gold not-italic">Rajkot</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white rounded-3xl p-6 border border-forest-100 shadow-nature">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(58,125,58,0.1), rgba(58,125,58,0.05))",
                }}
              >
                <MapPin className="w-5 h-5 text-forest-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base font-semibold text-forest-800 mb-2">
                Our Location
              </h3>
              <p className="font-sans text-sm text-forest-600/80">
                Landmark Complex, Tagore Road, Astron Chowk, Sardarnagar,
                Rajkot, Gujarat 360001
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-forest-100 shadow-nature">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,169,29,0.1), rgba(212,169,29,0.05))",
                }}
              >
                <Phone className="w-5 h-5 text-gold-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base font-semibold text-forest-800 mb-2">
                Call Us
              </h3>
              <a
                href="tel:+919825900012"
                className="font-display text-xl font-semibold text-forest-800"
              >
                +91 98259 00012
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-forest-100 shadow-nature">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(101,160,66,0.1), rgba(101,160,66,0.05))",
                }}
              >
                <Clock className="w-5 h-5 text-nature-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base font-semibold text-forest-800 mb-3">
                Store Hours
              </h3>
              <div className="space-y-1.5">
                <div className="flex justify-between font-sans text-xs">
                  <span className="text-forest-600">Monday – Sunday</span>
                  <span className="text-forest-800 font-medium">
                    9:00 AM – 8:00 PM
                  </span>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-nature-500 animate-pulse" />
                <span className="font-sans text-[10px] text-nature-600 font-medium">
                  Open Now
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919825900012"
                className="flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-600 text-white rounded-2xl py-4 transition-all duration-300 font-sans text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919825900012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white rounded-2xl py-4 transition-all duration-300 font-sans text-sm font-medium"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl overflow-hidden border border-forest-100 shadow-luxury h-full min-h-[400px]">
              <div className="px-6 py-4 border-b border-forest-100 flex items-center justify-between bg-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-nature-500 animate-pulse" />
                  <div>
                    <div className="font-display text-sm font-semibold text-forest-800">
                      Nature Care Center
                    </div>
                    <div className="font-sans text-[10px] text-forest-600/60">
                      Sardarnagar, Rajkot, Gujarat
                    </div>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/maps?q=22.3039,70.8022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs text-forest-600 hover:text-forest-800 flex items-center gap-1 transition-colors duration-200"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Open in Maps
                </a>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7!2d70.8022!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzE0LjAiTiA3MMKwNDgnMDcuOSJF!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullscreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
