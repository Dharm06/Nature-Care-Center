import { useEffect, useRef } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import ProductCategories from './components/ProductCategories';
import Testimonials from './components/Testimonials';
import WellnessBenefits from './components/WellnessBenefits';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
        ringRef.current.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const onEnter = () => ringRef.current && (ringRef.current.style.width = '52px', ringRef.current.style.height = '52px');
    const onLeave = () => ringRef.current && (ringRef.current.style.width = '36px', ringRef.current.style.height = '36px');
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}

export default function App() {
  useEffect(() => {
    document.body.style.cursor = window.innerWidth >= 768 ? 'none' : 'auto';
    return () => { document.body.style.cursor = 'auto'; };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <ProductCategories />
        <Testimonials />
        <WellnessBenefits />
        <Gallery />
        <Contact />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
