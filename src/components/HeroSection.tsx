import { ArrowDown, CheckCircle2, Lock, ShieldCheck, Sparkles, Star, Zap } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="hero-section" className="relative pt-6 sm:pt-12 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-pink-50/70 via-white to-neutral-50/50">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-pink-200/25 via-rose-100/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-pink-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span>O Maior Acervo de Papelaria Personalizada do Brasil</span>
          </div>
        </div>

        {/* Main Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.18] sm:leading-[1.15]">
            Mundo dos Moldes:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500">
              +1000 Moldes Prontos
            </span>{' '}
            para Imprimir e Montar
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Economize dezenas de horas de trabalho: baixe, imprima na sua <strong className="text-gray-900 font-semibold">impressora comum</strong> e monte caixinhas e lembrancinhas incríveis para <span className="text-pink-600 font-semibold">vender</span> ou fazer a <span className="text-pink-600 font-semibold">festa em casa</span>!
          </p>

          {/* Social Proof Mini Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-400">•</span>
            <span>Mais de <strong className="text-gray-900 font-semibold">4.850 artesãs e mamães</strong> satisfeitas</span>
          </div>

          {/* Banner da Imagem do Produto */}
          <div className="mt-6 sm:mt-8 max-w-3xl mx-auto">
            <a
              href="https://ibb.co/PsFrZFRn"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-pink-900/15 border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 group bg-white"
            >
              <img
                src="/assets/hero-product.png"
                alt="Mundo dos Moldes - +1000 Moldes Prontos para Imprimir e Montar"
                width={896}
                height={504}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl group-hover:scale-[1.01] transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('wsrv.nl')) {
                    target.src = 'https://wsrv.nl/?url=https://i.ibb.co/MyZgDZb4/Chat-GPT-Image-15-de-set-de-2026-16-14-30.png';
                  }
                }}
              />
            </a>
          </div>

          {/* Tópicos em destaque abaixo da imagem */}
          <div className="mt-6 sm:mt-8 max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-pink-100 shadow-md shadow-pink-900/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>MATERIAL EM PDF E EDITÁVEIS</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>CORTE COM TESOURA</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>ARQUIVOS PRONTOS PARA PRODUZIR</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>DO ZERO ÀS PRINCIPAIS VENDAS</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-gray-800 sm:col-span-2 sm:justify-center pt-0.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>ACESSO IMEDIATO VIA E-MAIL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA & Trust Badges directly below the banner */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center max-w-xl mx-auto space-y-4">
            <a
              href="#pacotes"
              onClick={(e) => {
                e.preventDefault();
                if (onCtaClick) {
                  onCtaClick();
                } else {
                  const target = document.getElementById('pacotes') || document.getElementById('oferta');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  } else {
                    window.location.hash = '#pacotes';
                  }
                }
              }}
              id="hero-cta-button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#28A745] hover:bg-[#218838] active:scale-[0.98] text-white font-black text-base sm:text-lg py-4 px-8 sm:px-12 rounded-2xl shadow-xl shadow-green-600/30 transition-all duration-200 animate-cta-pulse uppercase tracking-wide cursor-pointer text-center"
            >
              <span>QUERO GARANTIR MEU ACESSO AGORA</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-gray-700 text-center pt-2">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Acesso Imediato</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>Compra 100% Segura</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-pink-600" />
                <span>Satisfação Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
