import { useEffect, useState } from 'react';
import { ArrowRight, Flame, Lock } from 'lucide-react';

interface StickyMobileCtaProps {
  onCtaClick: () => void;
}

export default function StickyMobileCta({ onCtaClick }: StickyMobileCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when user scrolls past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="sticky-mobile-cta"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-pink-200 p-3 shadow-2xl transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[10px] font-black text-rose-600 uppercase tracking-tight">
            <Flame className="w-3 h-3 fill-rose-600" />
            <span>60% OFF Hoje</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[10px] text-gray-500 font-semibold">A partir de</span>
            <span className="text-base font-black text-gray-900 leading-none">R$ 10,00</span>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="flex-1 bg-[#28A745] hover:bg-[#218838] active:scale-95 text-white font-black text-xs sm:text-sm py-3 px-3 rounded-xl shadow-md uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all animate-cta-pulse cursor-pointer"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>GARANTIR A PARTIR DE R$ 10</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
