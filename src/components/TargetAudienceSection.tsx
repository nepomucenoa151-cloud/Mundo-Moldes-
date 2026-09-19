import { Briefcase, Check, Heart, Sparkles, TrendingUp, Users, Wand2 } from 'lucide-react';

export default function TargetAudienceSection() {
  const audiences = [
    {
      id: 'artesas',
      badge: 'Para quem quer Faturar',
      title: 'Artesãs e Confeiteiras',
      subtitle: 'Economize tempo de criação e aumente seus lucros',
      icon: TrendingUp,
      accentBg: 'bg-rose-50 border-rose-200 text-rose-600',
      description:
        'Não perca mais horas e horas desenhando caixinhas do zero para cada cliente. Pegue os moldes já testados, adicione sua personalização e entregue encomendas com agilidade e alta margem de lucro.',
      benefits: [
        'Aumente a produção diária de caixinhas',
        'Acervo pronto para orçamentos rápidos',
        'Arquivos editáveis no Silhouette Studio',
      ],
    },
    {
      id: 'maes',
      badge: 'Para quem quer Economizar',
      title: 'Mães Festeiras',
      subtitle: 'Faça a festa dos sonhos gastando até 80% menos',
      icon: Heart,
      accentBg: 'bg-pink-50 border-pink-200 text-pink-600',
      description:
        'Papelarias personalizadas cobram fortunas por poucas caixinhas. Com o nosso pack, você mesma imprime na sua impressora, recorta assistindo TV e monta uma mesa de festa de encantar qualquer convidado.',
      benefits: [
        'Economize centenas de reais por festa',
        'Imprima quantas vezes quiser',
        'Temas infantis atualizados que as crianças amam',
      ],
    },
    {
      id: 'iniciantes',
      badge: 'Zero Experiência',
      title: 'Iniciantes na Papelaria',
      subtitle: 'Comece hoje mesmo sem precisar de equipamentos caros',
      icon: Wand2,
      accentBg: 'bg-amber-50 border-amber-200 text-amber-600',
      description:
        'Tem medo de não conseguir montar? Nossos arquivos em PDF já vêm prontos com linhas pontilhadas indicando exatamente onde dobrar e onde passar cola. Basta uma tesoura simples, régua e cola branca.',
      benefits: [
        'Não precisa de máquina Silhouette',
        'Sem softwares complicados ou caros',
        'Gabaritos precisos que encaixam de primeira',
      ],
    },
  ];

  return (
    <section id="para-quem-e" className="py-14 sm:py-20 bg-neutral-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-pink-600" />
            Identificação Imediata
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Para quem é o <span className="text-pink-600">Mundo dos Moldes</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Criado sob medida para quem busca praticidade, economia e acabamento de alto padrão.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md">
                      {card.badge}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${card.accentBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-pink-600 mt-1">
                    {card.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                  {card.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
