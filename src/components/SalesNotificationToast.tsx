import { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingBag, X, Sparkles } from 'lucide-react';

interface PurchaseEvent {
  name: string;
  city: string;
  state: string;
  item: string;
  price: string;
  timeAgo: string;
}

const recentPurchases: PurchaseEvent[] = [
  { name: 'Renata Alencar', city: 'Fortaleza', state: 'CE', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 1 minuto' },
  { name: 'Mariana Vasconcelos', city: 'Goiânia', state: 'GO', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 3 minutos' },
  { name: 'Beatriz Oliveira', city: 'Salvador', state: 'BA', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 4 minutos' },
  { name: 'Débora Silveira', city: 'Curitiba', state: 'PR', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 6 minutos' },
  { name: 'Luciana Farias', city: 'Belo Horizonte', state: 'MG', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 8 minutos' },
  { name: 'Tatiana Nogueira', city: 'Florianópolis', state: 'SC', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 11 minutos' },
  { name: 'Priscila Santos', city: 'Campinas', state: 'SP', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 13 minutos' },
  { name: 'Vanessa Ramos', city: 'Recife', state: 'PE', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 15 minutos' },
  { name: 'Aline Medeiros', city: 'Porto Alegre', state: 'RS', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 18 minutos' },
  { name: 'Carla Guimarães', city: 'Manaus', state: 'AM', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 21 minutos' },
  { name: 'Gabriela Peixoto', city: 'Brasília', state: 'DF', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 24 minutos' },
  { name: 'Amanda Carvalho', city: 'Vitória', state: 'ES', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 27 minutos' },
  { name: 'Juliana Prado', city: 'São Paulo', state: 'SP', item: 'PACOTE COMPLETO', price: 'R$ 29,90', timeAgo: 'há 30 minutos' },
];

export default function SalesNotificationToast() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    let hideTimeout: ReturnType<typeof setTimeout>;
    let nextTimeout: ReturnType<typeof setTimeout>;

    const showNext = () => {
      setVisible(true);

      // Fica visível por 5 segundos
      hideTimeout = setTimeout(() => {
        setVisible(false);

        // Delay de 10 segundos antes de exibir a próxima compra
        nextTimeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % recentPurchases.length);
          showNext();
        }, 10000);
      }, 5000);
    };

    // Delay inicial de 10 segundos para a primeira notificação
    const initialTimer = setTimeout(() => {
      showNext();
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [isDismissed]);

  const current = recentPurchases[currentIndex];

  if (isDismissed) return null;

  return (
    <aside
      id="sales-notification-toast"
      aria-label="Notificação de compra recente"
      className={`fixed top-14 sm:top-16 right-3 sm:right-6 z-50 max-w-[calc(100vw-24px)] sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border-2 border-pink-300 transition-all duration-500 ease-out flex items-center gap-3 ${
        visible
          ? 'translate-x-0 opacity-100 pointer-events-auto'
          : 'translate-x-12 opacity-0 pointer-events-none'
      }`}
    >
      {/* Ícone com gradiente temático */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 via-rose-500 to-pink-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-pink-500/30">
        <ShoppingBag className="w-5 h-5" />
      </div>

      {/* Conteúdo da Notificação */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <p className="text-xs font-bold text-gray-900 truncate">{current.name}</p>
          <span className="text-[10px] text-gray-400">•</span>
          <span className="text-[11px] text-pink-700 font-bold truncate">
            {current.city}, {current.state}
          </span>
        </div>

        <p className="text-xs text-pink-600 font-medium truncate mt-0.5">
          Acabou de comprar o <strong className="font-black text-pink-700">{current.item}</strong>
        </p>

        <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-emerald-600 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
          <span>Compra verificada • {current.timeAgo}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-600 bg-emerald-50 px-1 rounded text-[9px]">{current.price}</span>
        </div>
      </div>

      {/* Botão de Fechar */}
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        aria-label="Fechar notificação"
        className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
