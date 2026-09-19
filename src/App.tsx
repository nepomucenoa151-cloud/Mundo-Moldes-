import { useState } from 'react';
import TopNotificationBar from './components/TopNotificationBar';
import HeroSection from './components/HeroSection';
import KitsCarouselSection from './components/KitsCarouselSection';
import PackContentSection from './components/PackContentSection';
import BonusSection from './components/BonusSection';
import WhatsAppTestimonials from './components/WhatsAppTestimonials';
import PricingOfferSection from './components/PricingOfferSection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import StickyMobileCta from './components/StickyMobileCta';
import CheckoutSimModal, { PlanDetails } from './components/CheckoutSimModal';
import SingleFileCodeModal from './components/SingleFileCodeModal';
import SalesNotificationToast from './components/SalesNotificationToast';
import { Code2 } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanDetails>({
    id: 'vip',
    name: 'PACOTE COMPLETO',
    originalPrice: '97,00',
    price: '29,90',
    description: '+1.000 Moldes + Arquivos Studio + Todos os 6 Super Bônus',
  });

  const handleScrollToOffer = () => {
    const targetElement = document.getElementById('pacotes') || document.getElementById('oferta');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#pacotes';
    }
  };

  const handleOpenCheckout = (plan?: PlanDetails) => {
    if (plan) {
      setSelectedPlan(plan);
    }
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-gray-800 antialiased font-sans pb-16 sm:pb-0 selection:bg-pink-100 selection:text-pink-900">
      {/* 1. TOP NOTIFICATION BAR */}
      <TopNotificationBar />

      {/* Notificação de compra do PACOTE COMPLETO no topo direito com delay de 10s */}
      <SalesNotificationToast />

      {/* Floating Action Button: View Single-File HTML Code */}
      <div className="fixed bottom-20 left-3 sm:bottom-6 sm:left-6 z-40">
        <button
          onClick={() => setIsCodeModalOpen(true)}
          className="bg-white/95 hover:bg-white text-gray-800 hover:text-pink-600 font-bold text-xs py-2 px-3 sm:px-3.5 rounded-full border border-pink-200 shadow-lg flex items-center gap-1.5 backdrop-blur-xs transition-all cursor-pointer hover:shadow-xl hover:scale-105"
          title="Ver o código HTML5 e CSS3 completo em arquivo único"
        >
          <Code2 className="w-3.5 h-3.5 text-pink-600" />
          <span className="hidden sm:inline">Código HTML5 Único</span>
          <span className="sm:hidden">Código</span>
        </button>
      </div>

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <HeroSection onCtaClick={handleScrollToOffer} />

        {/* 3. VEJA ALGUNS KITS QUE VOCÊ VAI MONTAR EM MINUTOS... (CARROSSEL) */}
        <KitsCarouselSection onCtaClick={handleScrollToOffer} />

        {/* 4. O QUE VOCÊ VAI RECEBER (CONTEÚDO DO PACK PRINCIPAL) */}
        <PackContentSection />

        {/* 6. ÁREA DE BÔNUS EXCLUSIVOS */}
        <BonusSection onCtaClick={handleScrollToOffer} />

        {/* 7. PROVA SOCIAL DE CLIENTES (DEPOIMENTOS WHATSAPP) */}
        <WhatsAppTestimonials />

        {/* 7. SEÇÃO DE PREÇO E OFERTA IMPERDÍVEL */}
        <PricingOfferSection onBuyClick={handleOpenCheckout} />

        {/* 8. FAQ (PERGUNTAS FREQUENTES) */}
        <FaqSection />
      </main>

      {/* 9. RODAPÉ */}
      <FooterSection />

      {/* 10. STICKY MOBILE CTA */}
      <StickyMobileCta onCtaClick={handleScrollToOffer} />

      {/* Interactive Checkout Simulator Modal */}
      <CheckoutSimModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        plan={selectedPlan}
      />

      {/* Single File Code Viewer / Downloader Modal */}
      <SingleFileCodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />
    </div>
  );
}
