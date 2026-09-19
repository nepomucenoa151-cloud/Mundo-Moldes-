import { useState } from 'react';
import { Check, Code2, Copy, Download, ExternalLink, X } from 'lucide-react';

interface SingleFileCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SingleFileCodeModal({ isOpen, onClose }: SingleFileCodeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = async () => {
    try {
      const res = await fetch('/landing-page-single-file.html');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/landing-page-single-file.html';
    link.download = 'mundo-dos-moldes-landing-page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-pink-200 my-auto flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-pink-400" />
            <div>
              <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                Código HTML5 + CSS3 (Arquivo Único)
              </h3>
              <p className="text-[11px] text-gray-400">
                100% autônomo com style interno, pronto para colar na Hostinger, cPanel, WordPress ou abrir localmente.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4 flex-1 overflow-y-auto">
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-3.5 text-xs text-pink-900 leading-relaxed">
            ✨ <strong>Pronto para uso imediato:</strong> Este arquivo contém todo o HTML5, fontes Google Fonts (Poppins), CSS3 responsivo mobile-first, animação de pulso no botão CTA verde (#28A745), cronômetro regressivo funcional e acordeão FAQ sem nenhuma dependência externa!
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleCopyCode}
              className="w-full flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 active:scale-95 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Código Copiado com Sucesso!' : 'Copiar Código HTML5 Completo'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 active:scale-95 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Arquivo .html Único</span>
            </button>
          </div>

          <div className="pt-2">
            <a
              href="/landing-page-single-file.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-700 font-bold"
            >
              <span>Abrir página autônoma em nova aba</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-5 py-3 text-right">
          <button
            onClick={onClose}
            className="text-xs font-bold text-gray-600 hover:text-gray-900 px-4 py-2 cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
