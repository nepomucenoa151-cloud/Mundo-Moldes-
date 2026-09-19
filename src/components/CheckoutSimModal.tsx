import { useState } from 'react';
import { CheckCircle2, Copy, CreditCard, Lock, QrCode, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';

export interface PlanDetails {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  description: string;
}

interface CheckoutSimModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan?: PlanDetails;
}

export default function CheckoutSimModal({ isOpen, onClose, plan }: CheckoutSimModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const currentPlan: PlanDetails = plan || {
    id: 'vip',
    name: 'Mundo dos Moldes - PACOTE COMPLETO',
    price: '29,90',
    originalPrice: '97,00',
    description: '+1.000 Moldes Prontos + Todos os 6 Bônus Exclusivos',
  };

  const handleSimulatePayment = () => {
    setIsSuccess(true);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(`00020126330014br.gov.bcb.pix0111mundodosmoldes@pagamento.com520400005303986540${currentPlan.price.replace(',', '.')}5802BR5920Mundo dos Moldes6009Sao Paulo62070503***6304ABCD`);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-pink-200 my-auto relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-300" />
            <span className="font-extrabold text-sm sm:text-base tracking-wide">
              Checkout Seguro • Mundo dos Moldes
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {!isSuccess ? (
            <>
              {/* Order Summary Box */}
              <div className="bg-pink-50/70 border border-pink-200/80 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                  <span>Plano Selecionado:</span>
                  <span className="text-pink-700 font-extrabold">{currentPlan.name}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">
                  {currentPlan.description}
                </div>
                <div className="pt-2 border-t border-pink-200/60 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Total a pagar hoje:</span>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 line-through mr-1.5">R$ {currentPlan.originalPrice}</span>
                    <span className="text-2xl font-black text-gray-900 text-emerald-700">R$ {currentPlan.price}</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 block">
                  Escolha a forma de pagamento:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-800 shadow-xs'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>PIX (Imediato)</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-800 shadow-xs'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Form details based on selection */}
              {paymentMethod === 'pix' ? (
                <div className="bg-neutral-50 rounded-2xl p-4 border border-gray-200 text-center space-y-3">
                  <div className="inline-block p-3 bg-white rounded-xl border border-gray-200 shadow-xs">
                    {/* Simulated QR Code box */}
                    <div className="w-32 h-32 mx-auto bg-gray-900 rounded-lg flex items-center justify-center text-white text-xs p-2 relative overflow-hidden">
                      <div className="grid grid-cols-5 gap-1 w-full h-full opacity-90">
                        {[...Array(25)].map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-xs ${
                              (i % 2 === 0 || i % 3 === 0) && i !== 12 ? 'bg-white' : 'bg-transparent'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-emerald-600 text-white font-black text-[10px] px-1.5 py-0.5 rounded shadow-sm">
                          PIX R$ {currentPlan.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600">
                    Abra o app do seu banco e escaneie o código acima ou copie a chave Pix:
                  </p>

                  <button
                    onClick={handleCopyPix}
                    className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-800 font-bold text-xs py-2 px-4 rounded-xl border border-gray-300 transition-all cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedPix ? 'Chave Pix Copiada!' : 'Copiar Código Pix Copia e Cola'}</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-gray-700 block mb-1">Nome no Cartão</label>
                    <input
                      type="text"
                      placeholder="Ex: Mariana Silva"
                      defaultValue="Mariana Silva"
                      className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-700 block mb-1">Número do Cartão</label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      defaultValue="•••• •••• •••• 4242"
                      className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-pink-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-bold text-gray-700 block mb-1">Validade</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        defaultValue="12/28"
                        className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-700 block mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        defaultValue="890"
                        className="w-full text-xs p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-pink-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={handleSimulatePayment}
                className="w-full bg-[#28A745] hover:bg-[#218838] active:scale-95 text-white font-black text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-lg transition-all animate-cta-pulse uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>CONFIRMAR E LIBERAR ACESSO (R$ {currentPlan.price})</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 text-center font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>7 dias de garantia incondicional ou seu dinheiro de volta</span>
              </div>
            </>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-black text-gray-900">
                Parabéns! Pagamento Aprovado com Sucesso!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                O seu acesso exclusivo ao <strong className="text-pink-600">{currentPlan.name}</strong> foi enviado para o seu e-mail cadastrado.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 font-medium max-w-sm mx-auto">
                🎉 Link do Google Drive liberado com os arquivos e materiais do seu pacote!
              </div>
              <button
                onClick={onClose}
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs py-2.5 px-6 rounded-xl cursor-pointer"
              >
                Fechar e Voltar à Página
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
