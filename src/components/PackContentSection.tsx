import { Box, Cake, CheckCircle, FileCode, Gift, HelpCircle, Laptop, PackageCheck, Printer, Scissors, Sparkles, Star } from 'lucide-react';

export default function PackContentSection() {
  const mainFeatures = [
    {
      title: '+1.000 Moldes de Caixinhas Temáticas',
      subtitle: 'Todos os formatos consagrados de lembrancinhas',
      description: 'Acervo completo com Caixas Milk, Pirâmide, Cone, Sushi, Bolsinha, Meia Bala, Bis Duplo, Tubete, Caixa Alça e Caixas Cenário nos temas mais desejados.',
      icon: Box,
      tag: 'Principal',
      bgTag: 'bg-pink-100 text-pink-700',
    },
    {
      title: 'Topos de Bolo Prontos para Imprimir',
      subtitle: 'Camadas 3D e faixas editáveis',
      description: 'Topos de bolo em alta resolução (300 DPI) para aniversários infantis, adultos, mesversários e datas comemorativas prontos para colar no canudo.',
      icon: Cake,
      tag: 'Alta Procura',
      bgTag: 'bg-rose-100 text-rose-700',
    },
    {
      title: 'Formatos Duplos: PDF + Silhouette Studio',
      subtitle: 'Versatilidade total para qualquer impressora ou máquina',
      description: 'PDFs prontos para imprimir e cortar na tesoura sem precisar de programas pesados. E arquivos em .STUDIO para quem deseja personalizar ou cortar na plotter.',
      icon: FileCode,
      tag: '100% Compatível',
      bgTag: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'Guia de Montagem & Tipos de Papel',
      subtitle: 'Passo a passo descomplicado para iniciantes',
      description: 'Manual detalhado com recomendações de gramaturas de papel (Offset 180g, Glossy 230g), tipos de cola ideais e truques para dobras perfeitas sem rachar a tinta.',
      icon: Scissors,
      tag: 'Bônus Grátis',
      bgTag: 'bg-amber-100 text-amber-700',
    },
  ];

  return (
    <section id="conteudo-pack" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <PackageCheck className="w-3.5 h-3.5 text-pink-600" />
            Tudo o que está Incluso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            O que você vai receber no seu e-mail:
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Acesso imediato à pasta organizada com pastas separadas por tema, tipo de caixa e formato.
          </p>
        </div>

        {/* 4 Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-neutral-50/70 rounded-2xl p-6 border border-gray-200/90 shadow-xs hover:border-pink-300 hover:shadow-sm transition-all duration-200 flex gap-4 sm:gap-5"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-pink-600 text-white flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${item.bgTag}`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-pink-600">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
