import { Gift, Cake, Edit3, Palette, ShoppingBag, Lock, CheckCircle2, Heart } from 'lucide-react';

interface BonusSectionProps {
  onCtaClick?: () => void;
}

export default function BonusSection({ onCtaClick }: BonusSectionProps) {
  const bonuses = [
    {
      id: 1,
      number: 'BÔNUS 01',
      title: 'TOPOS DE BOLO',
      originalValue: 'R$ 37,00',
      description: 'Coleção completa de topos de bolo nos temas mais pedidos, com camadas 3D, apliques florais e faixas prontas para personalizar o nome do aniversariante.',
      icon: Cake,
      tag: 'Alta Procura',
      color: 'from-pink-500 to-rose-500',
      borderLight: 'border-pink-200',
      image: 'https://i.ibb.co/sJ3Qc0bn/Captura-de-tela-2026-09-15-171453.png',
      imageAlt: 'Modelos de Topos de Bolo Temáticos',
    },
    {
      id: 2,
      number: 'BÔNUS 02',
      title: 'MOLDES EDITÁVEIS - DIVERSOS',
      originalValue: 'R$ 47,00',
      description: 'Arquivos vetorizados 100% editáveis no Silhouette Studio e Corel/Illustrator para você alterar cores, texturas, medidas e criar novos designs exclusivos.',
      icon: Edit3,
      tag: '100% Editável',
      color: 'from-purple-500 to-indigo-500',
      borderLight: 'border-purple-200',
      image: 'https://i.ibb.co/Nv5sXfh/Captura-de-tela-2026-09-15-171441.png',
      imageAlt: 'Moldes Editáveis Diversos',
    },
    {
      id: 3,
      number: 'BÔNUS 03',
      title: 'ESTAMPAS PARA TUBETES',
      originalValue: 'R$ 29,00',
      description: 'Rótulos e apliques com o gabarito milimetricamente exato para tubetes de 13cm, permitindo imprimir em folha A4 adesiva sem sobras ou cortes tortos.',
      icon: Palette,
      tag: 'Medidas Exatas',
      color: 'from-sky-500 to-blue-500',
      borderLight: 'border-sky-200',
      image: 'https://i.ibb.co/m5PBsSxz/Captura-de-tela-2026-09-15-171430.png',
      imageAlt: 'Estampas e Rótulos para Tubetes',
    },
    {
      id: 4,
      number: 'BÔNUS 04',
      title: 'MOLDES FORMINHAS DE BRIGADEIRO',
      originalValue: 'R$ 35,00',
      description: 'Gabaritos especiais de forminhas com pétalas decoradas, cortes rendados e encaixes rápidos para valorizar e destacar a mesa de docinhos de qualquer festa.',
      icon: Heart,
      tag: 'Decoração Doce',
      color: 'from-amber-500 to-orange-500',
      borderLight: 'border-amber-200',
      image: 'https://i.ibb.co/Hf7kzjdF/Captura-de-tela-2026-09-15-171503.png',
      imageAlt: 'Moldes de Forminhas de Brigadeiro para Festa',
    },
    {
      id: 5,
      number: 'BÔNUS 05',
      title: 'MOLDES SACOLINHAS TEMÁTICAS – DIVERSAS',
      originalValue: 'R$ 42,00',
      description: 'Moldes reforçados de sacolinhas de lembrancinhas com alça embutida e fundo travante, perfeitas para doces, brinquedinhos e kits de agradecimento.',
      icon: ShoppingBag,
      tag: 'Lembrancinhas',
      color: 'from-emerald-500 to-teal-500',
      borderLight: 'border-emerald-200',
      image: 'https://i.ibb.co/hRgKXzmW/Captura-de-tela-2026-09-15-171512.png',
      imageAlt: 'Moldes de Sacolinhas Temáticas',
    },
    {
      id: 6,
      number: 'SUPER BÔNUS',
      title: 'E MAIS 3 BÔNUS SECRETOS...',
      originalValue: 'R$ 97,00',
      description: 'Três surpresas valiosíssimas preparadas a dedo para acelerar suas vendas e montagens, liberadas imediatamente dentro da área de membros do Google Drive!',
      icon: Lock,
      tag: 'Misterioso & Exclusivo',
      color: 'from-yellow-500 to-amber-600',
      borderLight: 'border-yellow-300',
      isSecret: true,
      image: 'https://i.ibb.co/RdVXxtp/Captura-de-tela-2026-09-15-172504.png',
      imageAlt: 'E Mais 3 Bônus Secretos',
    },
  ];

  return (
    <section id="area-de-bonus" className="py-16 sm:py-24 bg-gradient-to-b from-white via-pink-50/50 to-white relative overflow-hidden border-b border-gray-100">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-pink-200/40 via-purple-200/30 to-amber-200/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-xs">
            <Gift className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>Presentes Especiais Para Você</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            ÁREA DE BÔNUS EXCLUSIVOS
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Se você adquirir o <strong className="text-pink-600">Mundo dos Moldes</strong> hoje, levará todos esses materiais complementares inteiramente <strong className="text-emerald-700 underline decoration-emerald-500">GRÁTIS</strong>:
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.id}
                id={`bonus-card-${bonus.id}`}
                className={`relative rounded-2xl bg-white border-2 ${
                  bonus.isSecret
                    ? 'border-yellow-400 shadow-xl shadow-yellow-500/10 ring-2 ring-yellow-400/30'
                    : 'border-pink-100/90 shadow-md hover:shadow-xl hover:border-pink-300'
                } p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                        bonus.isSecret
                          ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-yellow-950 shadow-xs'
                          : 'bg-pink-100 text-pink-700'
                      }`}
                    >
                      {bonus.number}
                    </span>

                    <span className="text-xs font-semibold text-gray-400 line-through">
                      De {bonus.originalValue}
                    </span>
                  </div>

                  {/* Icon Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bonus.color} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold text-pink-600 uppercase tracking-wide block">
                        {bonus.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug group-hover:text-pink-600 transition-colors">
                        {bonus.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
                    {bonus.description}
                  </p>

                  {/* Bonus Preview Image if available */}
                  {bonus.image && (
                    <div className="mt-3.5 rounded-xl overflow-hidden border border-pink-100 bg-pink-50/40 shadow-inner group/img relative">
                      <img
                        src={bonus.image}
                        alt={bonus.imageAlt || bonus.title}
                        className="w-full h-36 sm:h-40 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>

                {/* Footer Tag: GRÁTIS */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Incluso no Pacote</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-lg uppercase tracking-wide">
                    HOJE: R$ 0,00
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
