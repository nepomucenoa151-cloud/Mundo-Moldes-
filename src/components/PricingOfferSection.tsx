import { Check, CreditCard, Flame, Gift, Lock, QrCode, Shield, Sparkles, Star, X, Zap } from 'lucide-react';
import { PlanDetails } from './CheckoutSimModal';

interface PricingOfferSectionProps {
  onBuyClick: (plan: PlanDetails) => void;
}

export default function PricingOfferSection({ onBuyClick }: PricingOfferSectionProps) {
  const basicPlan: PlanDetails = {
    id: 'basic',
    name: 'Pacote Básico',
    originalPrice: '47,00',
    price: '10,00',
    description: '+300 Moldes Essenciais das Caixinhas Mais Pedidas + Acesso por 7 dias! (USO POR TEMPO LIMITADO)',
  };

  const vipPlan: PlanDetails = {
    id: 'vip',
    name: 'PACOTE COMPLETO',
    originalPrice: '97,00',
    price: '29,90',
    description: '+1.000 Moldes + Arquivos Studio + Todos os 6 Super Bônus',
  };

  const basicFeatures = [
    { text: '+300 Moldes Essenciais das Caixinhas Mais Pedidas', included: true },
    { text: 'Acesso por 7 dias! (USO POR TEMPO LIMITADO)', included: true },
    { text: 'Arquivos em Silhouette Studio (.STUDIO) editáveis', included: false },
    { text: 'Área com os 6 Super Bônus Exclusivos', included: false },
    { text: 'Suporte prioritário via WhatsApp', included: false },
  ];

  const vipFeatures = [
    { text: '+1.000 Moldes de Caixinhas Temáticas Completas', included: true, highlight: true },
    { text: 'Arquivos em PDF para folha A4 + Studio (.STUDIO) 100% editáveis', included: true, highlight: true },
    { text: 'Gabaritos testados com linhas pontilhadas de dobra', included: true },
    { text: 'BÔNUS 1: Topos de Bolo Temáticos (De R$ 37 por R$ 0)', included: true },
    { text: 'BÔNUS 2: Moldes Editáveis - Diversos (De R$ 47 por R$ 0)', included: true },
    { text: 'BÔNUS 3: Estampas para Tubetes (De R$ 29 por R$ 0)', included: true },
    { text: 'BÔNUS 4: Moldes Forminhas de Brigadeiro (De R$ 35 por R$ 0)', included: true },
    { text: 'BÔNUS 5: Moldes Sacolinhas Temáticas (De R$ 42 por R$ 0)', included: true },
    { text: 'SUPER BÔNUS: E Mais 3 Bônus Secretos no Drive!', included: true, highlight: true },
    { text: 'Suporte Prioritário VIP via WhatsApp', included: true },
  ];

  return (
    <section id="pacotes" className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/40 to-white relative scroll-mt-16 sm:scroll-mt-20">
      {/* Anchor for backwards compatibility with #oferta */}
      <div id="oferta" className="absolute -top-16 sm:-top-20" />
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-pink-200/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 animate-flash-badge">
            <Flame className="w-4 h-4 text-rose-600 fill-rose-600" />
            Escolha o Seu Plano Ideal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Garanta Seu Acesso ao <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              Mundo dos Moldes
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Liberação imediata no seu e-mail logo após a confirmação. Escolha o pacote perfeito para o seu momento:
          </p>
        </div>

        {/* 2-Tier Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* 1. PACOTE ESSENCIAL - R$ 10,00 */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 hover:border-gray-300 shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 relative">
            {/* Top Tag */}
            <div className="bg-gray-100 text-gray-700 py-2.5 px-4 text-center font-bold text-xs tracking-wider uppercase">
              Opção Econômica
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-center pb-6 border-b border-gray-100">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    Pacote Básico
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Para quem quer começar com as caixinhas mais pedidas
                  </p>

                  <div className="mt-4">
                    <span className="text-xs text-gray-400 line-through font-semibold">
                      De R$ 47,00 por apenas
                    </span>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                      <span className="text-xl font-bold text-gray-800">R$</span>
                      <span className="text-5xl font-black text-gray-900 tracking-tight">
                        10,00
                      </span>
                      <span className="text-xs font-semibold text-gray-500">à vista</span>
                    </div>
                    <div className="mt-1 text-xs font-bold text-gray-600">
                      ou apenas 2x de R$ 5,20 no cartão
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <div className="py-6 space-y-3">
                  <div className="text-xs font-bold text-gray-800 uppercase tracking-wide flex items-center gap-1.5 mb-3">
                    <span>Incluso neste pacote:</span>
                  </div>
                  {basicFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      {feat.included ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      )}
                      <span className={feat.included ? 'text-gray-700 font-medium' : 'text-gray-400 line-through'}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-auto">
                <a
                  href="https://pay.wiapy.com/R5oH5S0a5MjL"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="buy-basic-package-button"
                  className="w-full bg-gray-900 hover:bg-gray-800 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base py-3.5 px-5 rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
                >
                  <Lock className="w-4 h-4" />
                  <span>QUERO PACOTE BÁSICO</span>
                </a>
                <div className="text-[11px] text-gray-400 text-center mt-2 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3 text-emerald-600" />
                  Garantia incondicional de 7 dias
                </div>
              </div>
            </div>
          </div>

          {/* 2. PACOTE COMPLETO VIP - R$ 29,90 */}
          <div className="bg-white rounded-3xl border-3 border-pink-500 shadow-2xl shadow-pink-900/15 flex flex-col justify-between overflow-hidden relative scale-[1.02] lg:scale-[1.03]">
            {/* Top Ribbon Highlight */}
            <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white py-3 px-4 text-center font-black text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span>MAIS VENDIDO • MELHOR CUSTO-BENEFÍCIO</span>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-pink-50/20 via-white to-white">
              <div>
                <div className="text-center pb-6 border-b border-pink-100">
                  <div className="inline-block bg-pink-100 text-pink-700 px-3 py-0.5 rounded-full text-[11px] font-black uppercase mb-1">
                    Acervo Completo + 6 Bônus
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                    PACOTE COMPLETO
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Por apenas <strong>R$ 19,90 a mais</strong> você leva mais de 1000 moldes e todos os bônus!
                  </p>

                  <div className="mt-4">
                    <span className="text-xs text-gray-400 line-through font-semibold">
                      De R$ 97,00 por apenas
                    </span>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                      <span className="text-2xl font-bold text-gray-900">R$</span>
                      <span className="text-5xl sm:text-6xl font-black text-pink-600 tracking-tight">
                        29,90
                      </span>
                      <span className="text-xs font-semibold text-gray-500">à vista</span>
                    </div>
                    <div className="mt-1 text-xs sm:text-sm font-bold text-pink-600">
                      ou apenas 3x de R$ 10,70 no cartão de crédito
                    </div>
                    <p className="text-[11px] text-emerald-700 font-bold mt-1">
                      (Menos de R$ 0,03 centavos por cada molde!)
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <div className="py-6 space-y-3">
                  <div className="text-xs font-bold text-gray-900 uppercase tracking-wide flex items-center gap-1.5 mb-3">
                    <Gift className="w-4 h-4 text-pink-600" />
                    <span>Tudo que você recebe no Pacote Completo:</span>
                  </div>
                  {vipFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={feat.highlight ? 'text-gray-900 font-extrabold' : 'text-gray-700 font-medium'}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-auto">
                <a
                  href="https://pay.wiapy.com/xbNZvDT5PSQX"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="buy-vip-package-button"
                  className="w-full bg-[#28A745] hover:bg-[#218838] active:scale-[0.98] text-white font-black text-sm sm:text-lg py-4 px-6 rounded-2xl shadow-xl shadow-green-600/25 transition-all duration-200 animate-cta-pulse uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 text-center"
                >
                  <Lock className="w-5 h-5" />
                  <span>QUERO PACOTE COMPLETO</span>
                </a>
                <div className="text-[11px] text-gray-500 text-center mt-2.5 flex items-center justify-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                  <span>PIX ou Cartão • Acesso imediato no e-mail</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Days Guarantee Box */}
        <div className="mt-12 bg-white rounded-3xl border border-pink-200 shadow-md p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 max-w-4xl mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-pink-100 border-2 border-pink-300 flex flex-col items-center justify-center text-pink-700 shadow-xs">
            <Shield className="w-8 h-8 sm:w-9 sm:h-9" />
            <span className="text-[9px] font-black uppercase tracking-tighter mt-0.5">7 DIAS</span>
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-gray-900">
              Garantia Incondicional de 7 Dias: Risco Zero em Qualquer Pacote!
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Você tem 7 dias completos para baixar os arquivos, imprimir e testar na sua casa. Se por qualquer motivo você não amar o material, basta nos mandar uma mensagem e devolvemos 100% do seu dinheiro. Sem perguntas e sem complicações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
