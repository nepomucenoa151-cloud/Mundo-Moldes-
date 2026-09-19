import { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/mockData';
import { Check, Eye, Filter, Heart, Sparkles, Tag } from 'lucide-react';

export default function SocialProofGallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'caixas' | 'topos' | 'lembrancinhas' | 'luxo'>('all');

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria-modelos" className="py-14 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Acabamento Profissional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Veja o que você será capaz de montar com facilidade
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Todos os moldes vêm com linhas de dobra pré-gabaritadas. É só imprimir na sua impressora caseira, cortar e colar em poucos minutos!
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todos os Exemplos
            </button>
            <button
              onClick={() => setActiveFilter('caixas')}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'caixas'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Caixas Milk & Temáticas
            </button>
            <button
              onClick={() => setActiveFilter('topos')}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'topos'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Topos de Bolo 3D
            </button>
            <button
              onClick={() => setActiveFilter('lembrancinhas')}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'lembrancinhas'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Lembrancinhas Divertidas
            </button>
            <button
              onClick={() => setActiveFilter('luxo')}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'luxo'
                  ? 'bg-pink-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Linha Batizado & Luxo
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-pink-300 transition-all duration-300 flex flex-col"
            >
              {/* Product Card Visual Header */}
              <div className={`h-48 bg-gradient-to-br ${item.gradient} p-4 relative flex flex-col justify-between overflow-hidden border-b border-gray-100`}>
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1 bg-white/90 text-gray-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    <Tag className="w-3 h-3 text-pink-600" />
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-black/30 text-white px-2 py-0.5 rounded-full">
                    Gabarito 100% Testado
                  </span>
                </div>

                {/* Product Card Visual Mockup or Real Photo */}
                <div className="my-auto text-center z-10 flex items-center justify-center py-1">
                  {item.imageUrl ? (
                    <a
                      href={item.linkUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform group-hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-28 sm:h-32 w-auto max-w-[210px] object-contain rounded-xl shadow-md border-2 border-white/90 bg-white/80 p-1"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (item.fallbackUrl && target.src !== item.fallbackUrl) {
                            target.src = item.fallbackUrl;
                          }
                        }}
                      />
                    </a>
                  ) : (
                    <div className="inline-block bg-white/85 backdrop-blur-xs p-3 rounded-xl shadow-md border border-white/60 transform group-hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center bg-pink-50 border border-pink-200 text-pink-600 font-black text-2xl shadow-inner">
                        📦
                      </div>
                      <span className="text-[11px] font-extrabold text-gray-800 mt-1 block">
                        {item.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] font-medium text-gray-700 z-10 bg-white/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                  <span>{item.pieces}</span>
                  <span className="font-bold text-pink-700">PDF + Silhouette</span>
                </div>

                {/* Subtle pattern background circles */}
                <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-white/40 rounded-full blur-sm pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <Check className="w-3.5 h-3.5" /> Impressão A4 Caseira
                  </span>
                  <span className="text-gray-400 font-medium">Corte Fácil</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner under gallery */}
        <div className="mt-10 bg-pink-50/70 border border-pink-200/70 rounded-2xl p-4 sm:p-6 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-800 font-medium">
            🎉 <strong className="text-pink-700">Mais de 100 pastas organizadas por temas:</strong> Aniversários Infantis, Chá de Bebê, Batizados, Casamentos, Páscoa, Dia das Mães, Dia dos Pais, Natal e muito mais!
          </p>
        </div>
      </div>
    </section>
  );
}
