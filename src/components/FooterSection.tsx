import { Heart, Lock, ShieldCheck } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand and Description */}
          <div className="space-y-2 max-w-sm">
            <div className="text-white font-black text-lg tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="text-pink-500">Mundo dos Moldes</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              O maior acervo de moldes prontos para imprimir e montar caixas e lembrancinhas temáticas. Economia e praticidade para sua família e seu negócio.
            </p>
          </div>

          {/* Legal and Policies links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-300">
            <a href="#oferta" className="hover:text-pink-400 transition-colors">
              Garantir Oferta
            </a>
            <span>•</span>
            <a href="#faq" className="hover:text-pink-400 transition-colors">
              Dúvidas Frequentes
            </a>
            <span>•</span>
            <span className="hover:text-pink-400 transition-colors cursor-pointer">
              Termos de Uso
            </span>
            <span>•</span>
            <span className="hover:text-pink-400 transition-colors cursor-pointer">
              Política de Privacidade
            </span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800 space-y-3 text-[11px] text-gray-400 leading-relaxed text-center">
          <p>
            Aviso Legal: Os resultados podem variar de pessoa para pessoa de acordo com a dedicação e impressora utilizada. Este produto não garante ganhos financeiros fixos, sendo uma ferramenta e acervo de modelos digitais para auxílio na produção artesanal.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-400 pt-2">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-emerald-500" /> Checkout Seguro
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-pink-500" /> Garantia 7 Dias
            </span>
          </div>
          <p className="pt-2 text-gray-400">
            © {currentYear} Mundo dos Moldes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
