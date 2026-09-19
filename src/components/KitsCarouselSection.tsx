import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Scissors, Eye } from 'lucide-react';

interface KitsCarouselSectionProps {
  onCtaClick?: () => void;
}

export interface CarouselKit {
  id: string;
  title: string;
  tag: string;
  image: string;
  fallbackUrl: string;
  viewerUrl: string;
}

const CAROUSEL_KITS: CarouselKit[] = [
  {
    id: '1',
    title: 'Kit Festa Infantil Temático',
    tag: 'Festa Completa',
    image: '/assets/carousel/kit-1.jpg',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/BVXLybbH/13v-O6xtig6-Gvq6bh.jpg',
    viewerUrl: 'https://ibb.co/27Dqvxx0',
  },
  {
    id: '2',
    title: 'Caixas Milk & Pirâmide Safari',
    tag: 'Mais Pedido',
    image: '/assets/carousel/kit-2.png',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/Fq4cFfyz/Captura-de-tela-2026-09-15-163505.png',
    viewerUrl: 'https://ibb.co/7NtBqTZK',
  },
  {
    id: '3',
    title: 'Lembrancinhas Delicadas 3D',
    tag: 'Camadas de Luxo',
    image: '/assets/carousel/kit-3.png',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/PGVdsq34/Captura-de-tela-2026-09-15-163518.png',
    viewerUrl: 'https://ibb.co/0yzxpH8Z',
  },
  {
    id: '4',
    title: 'Kit Caixinhas Prontas para Cortar',
    tag: 'Corte na Tesoura',
    image: '/assets/carousel/kit-4.png',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/1tj7tjV8/Captura-de-tela-2026-09-15-163529.png',
    viewerUrl: 'https://ibb.co/zTDQTDcG',
  },
  {
    id: '5',
    title: 'Topos de Bolo & Caixas Cenário',
    tag: 'Alta Resolução',
    image: '/assets/carousel/kit-5.png',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/MDH5RgTb/Captura-de-tela-2026-09-15-163955.png',
    viewerUrl: 'https://ibb.co/7JDNGScH',
  },
  {
    id: '6',
    title: 'Centro de Mesa Chá Revelação',
    tag: 'Chá Revelação',
    image: '/assets/carousel/kit-6.jpg',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/PsMsSCxd/COMO-FAZER-CENTRO-DE-MESA-CH-REVELA-O-SIMPLES.jpg',
    viewerUrl: 'https://ibb.co/vChCtz1S',
  },
  {
    id: '7',
    title: 'Lembrancinhas Criativas em Camadas',
    tag: 'Fácil Montagem',
    image: '/assets/carousel/kit-7.jpg',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/9HkwLrJ4/download-1.jpg',
    viewerUrl: 'https://ibb.co/1Gts5m3X',
  },
  {
    id: '8',
    title: 'Kit Festa Bob Esponja',
    tag: 'Sucesso Infantil',
    image: '/assets/carousel/kit-8.jpg',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/d03v7jb2/Kit-Festa-Bob-Esponja-para-imprimir-Arte-para-toda-a-festa.jpg',
    viewerUrl: 'https://ibb.co/7JTDbjgW',
  },
  {
    id: '9',
    title: 'Caixa Milk Stitch e Angel',
    tag: 'Super Em Alta',
    image: '/assets/carousel/kit-9.jpg',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/cc6pN67L/CAIXA-MILK-STITCH-E-ANGEL-PARA-IMPRIMIR.jpg',
    viewerUrl: 'https://ibb.co/7JnTGn64',
  },
  {
    id: '10',
    title: 'Caixa Cenário Homem-Aranha',
    tag: 'Heróis Favoritos',
    image: '/assets/carousel/kit-10.png',
    fallbackUrl: 'https://wsrv.nl/?url=https://i.ibb.co/G4dMp26Q/CAIXA-CENARIO-DO-HOMEM-ARANHA.png',
    viewerUrl: 'https://ibb.co/wFdQgWkh',
  },
];

export default function KitsCarouselSection({ onCtaClick }: KitsCarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
      
      const itemWidth = 280;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(index, 0), CAROUSEL_KITS.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScrollButtons, { passive: true });
    checkScrollButtons();
    return () => el.removeEventListener('scroll', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const target = scrollRef.current.children[index] as HTMLElement;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section id="veja-alguns-kits" className="py-14 sm:py-20 bg-gradient-to-b from-white via-pink-50/40 to-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span>Galeria Exclusiva de Modelos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            VEJA ALGUNS KITS QUE VOCÊ VAI MONTAR EM MINUTOS...
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Gabaritos testados com linhas de corte e dobra na medida certa. Arraste para o lado e veja a perfeição dos acabamentos:
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <Scissors className="w-4 h-4 text-pink-600" />
              <span>{CAROUSEL_KITS.length} modelos em destaque no carrossel</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Voltar kit anterior"
                className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                  canScrollLeft
                    ? 'bg-white border-pink-200 text-gray-800 hover:bg-pink-50 hover:border-pink-300 shadow-sm active:scale-95'
                    : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Avançar próximo kit"
                className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                  canScrollRight
                    ? 'bg-white border-pink-200 text-gray-800 hover:bg-pink-50 hover:border-pink-300 shadow-sm active:scale-95'
                    : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CAROUSEL_KITS.map((kit, index) => (
              <div
                key={kit.id}
                id={`carousel-item-${kit.id}`}
                className="shrink-0 w-[260px] sm:w-[290px] snap-center group bg-white rounded-2xl border-2 border-pink-100/90 shadow-md hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Wrap */}
                <div className="relative aspect-4/3 bg-neutral-50 overflow-hidden flex items-center justify-center p-3 border-b border-pink-50">
                  <span className="absolute top-2.5 left-2.5 z-10 bg-white/95 backdrop-blur-xs text-pink-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs border border-pink-200">
                    {kit.tag}
                  </span>

                  <a
                    href={kit.viewerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    title={`Ver detalhes de ${kit.title}`}
                  >
                    <img
                      src={kit.image}
                      alt={kit.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== kit.fallbackUrl) {
                          target.src = kit.fallbackUrl;
                        }
                      }}
                    />
                  </a>
                </div>

                {/* Card Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-pink-600 transition-colors">
                      {kit.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                      Pronto para imprimir em A4
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600 font-semibold">
                    <span className="text-pink-600">PDF + Silhouette</span>
                    <a
                      href={kit.viewerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-500 hover:text-pink-600 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver foto</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-1.5 mt-2">
            {CAROUSEL_KITS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para kit ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeIndex === i ? 'w-6 bg-pink-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Banner under Carousel */}
        <div className="mt-8 sm:mt-10 text-center bg-white rounded-2xl p-5 sm:p-6 border-2 border-pink-200 shadow-md shadow-pink-900/5 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base font-extrabold text-gray-800 leading-relaxed">
            Gostou desses modelos? Eles e mais de <strong className="text-pink-600">1.000 outros arquivos</strong> estão inclusos no pacote completo!
          </p>
        </div>
      </div>
    </section>
  );
}
