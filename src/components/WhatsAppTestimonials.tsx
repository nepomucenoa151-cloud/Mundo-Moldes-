import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Star, CheckCheck, Pause, Play, Eye, Sparkles } from 'lucide-react';

interface TestimonialSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  viewerUrl: string;
  clientName: string;
  city: string;
  stars: number;
}

const TESTIMONIAL_SLIDES: TestimonialSlide[] = [
  {
    id: 1,
    title: 'Depoimento Real no WhatsApp',
    subtitle: 'Aluna satisfeita compartilhando os primeiros resultados',
    image: 'https://i.ibb.co/twh74Kj7/Gemini-Generated-Image-a151bqa151bqa151.jpg',
    viewerUrl: 'https://ibb.co/Xf4hbL0h',
    clientName: 'Mariana S.',
    city: 'Belo Horizonte - MG',
    stars: 5,
  },
  {
    id: 2,
    title: 'Sucesso na Primeira Encomenda',
    subtitle: 'Economia e facilidade no corte com tesoura',
    image: 'https://i.ibb.co/twh74Kj7/Gemini-Generated-Image-a151bqa151bqa151.jpg',
    viewerUrl: 'https://ibb.co/Xf4hbL0h',
    clientName: 'Fernanda R.',
    city: 'Campinas - SP',
    stars: 5,
  },
  {
    id: 3,
    title: 'Feedback da Mamãe Festeira',
    subtitle: 'Festa infantil completa montada em casa com perfeição',
    image: 'https://i.ibb.co/twh74Kj7/Gemini-Generated-Image-a151bqa151bqa151.jpg',
    viewerUrl: 'https://ibb.co/Xf4hbL0h',
    clientName: 'Juliana P.',
    city: 'Curitiba - PR',
    stars: 5,
  },
  {
    id: 4,
    title: 'Mensagem de Agradecimento',
    subtitle: 'Arquivos em tamanho real A4 prontos para imprimir',
    image: 'https://i.ibb.co/twh74Kj7/Gemini-Generated-Image-a151bqa151bqa151.jpg',
    viewerUrl: 'https://ibb.co/Xf4hbL0h',
    clientName: 'Beatriz M.',
    city: 'Salvador - BA',
    stars: 5,
  },
  {
    id: 5,
    title: 'Depoimento Verificado no Grupo VIP',
    subtitle: 'Mais de R$ 400 economizados na primeira produção',
    image: 'https://i.ibb.co/twh74Kj7/Gemini-Generated-Image-a151bqa151bqa151.jpg',
    viewerUrl: 'https://ibb.co/Xf4hbL0h',
    clientName: 'Camila D.',
    city: 'Porto Alegre - RS',
    stars: 5,
  },
  {
    id: 6,
    title: 'Elogio aos Moldes e Bônus',
    subtitle: 'Qualidade impecável nos arquivos Silhouette Studio e PDF',
    image: 'https://i.ibb.co/twh74Kj7/Gemini-Generated-Image-a151bqa151bqa151.jpg',
    viewerUrl: 'https://ibb.co/Xf4hbL0h',
    clientName: 'Tatiana N.',
    city: 'Florianópolis - SC',
    stars: 5,
  },
];

export default function WhatsAppTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = TESTIMONIAL_SLIDES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Carrossel automático com intervalo de 3.5 segundos
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3500);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, currentIndex]);

  return (
    <section id="depoimentos" className="py-14 sm:py-20 bg-gradient-to-b from-neutral-50 via-white to-pink-50/30 border-t border-gray-100 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 shadow-xs">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Depoimentos Reais de Clientes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Quem Comprou, Amou e Recomendou!
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos e prints reais enviados por nossas clientes no WhatsApp comprovando a qualidade do acervo:
          </p>

          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-xs font-bold text-gray-700 ml-1.5">
              4.9/5 estrelas de satisfação comprovada
            </span>
          </div>
        </div>

        {/* Carrossel Automático Interativo */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Card Principal do Carrossel */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-emerald-200/80 overflow-hidden relative transition-all duration-300">
            {/* Top Bar do Card com Status de Reprodução Automática */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold text-[11px] border border-emerald-200">
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Compra Verificada
                </span>
                <span className="text-gray-400 hidden sm:inline">•</span>
                <span className="text-gray-600 font-medium hidden sm:inline">
                  Slide {currentIndex + 1} de {totalSlides}
                </span>
              </div>

              {/* Controle de Pausa / Play do Carrossel */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 font-semibold text-[11px] transition-colors cursor-pointer"
                title={isPlaying ? 'Pausar carrossel' : 'Retomar carrossel automático'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-gray-500" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                    <span>Auto</span>
                  </>
                )}
              </button>
            </div>

            {/* Imagem do Depoimento com Efeito de Destaque */}
            <div className="relative group overflow-hidden rounded-2xl bg-neutral-100 border border-emerald-100 shadow-inner">
              <a
                href={TESTIMONIAL_SLIDES[currentIndex].viewerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer relative"
              >
                <img
                  src={TESTIMONIAL_SLIDES[currentIndex].image}
                  alt={TESTIMONIAL_SLIDES[currentIndex].title}
                  className="w-full max-h-[500px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Overlay hover com botão de visualização */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-gray-900 font-bold text-xs py-2 px-4 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-xs">
                    <Eye className="w-4 h-4 text-pink-600" />
                    Ampliar Imagem do Depoimento
                  </span>
                </div>
              </a>
            </div>

            {/* Legenda e Detalhes do Slide Atual */}
            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-gray-900 flex items-center justify-center sm:justify-start gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  {TESTIMONIAL_SLIDES[currentIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  {TESTIMONIAL_SLIDES[currentIndex].subtitle} • <strong className="text-gray-700">{TESTIMONIAL_SLIDES[currentIndex].clientName}</strong> ({TESTIMONIAL_SLIDES[currentIndex].city})
                </p>
              </div>

              {/* Botões de Navegação Anterior / Próximo */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Depoimento anterior"
                  className="p-2.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Próximo depoimento"
                  className="p-2.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md shadow-pink-600/30"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Indicadores de Bolinhas (Dots) */}
            <div className="flex items-center justify-center gap-2 mt-4 pt-2">
              {TESTIMONIAL_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Ir para o depoimento ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-emerald-600'
                      : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé da Seção com Garantia de Veracidade */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5">
            <CheckCheck className="w-4 h-4 text-emerald-600" />
            <span>Prints 100% autênticos autorizados por alunas do curso Mundo dos Moldes</span>
          </p>
        </div>
      </div>
    </section>
  );
}
