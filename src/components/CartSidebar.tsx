import { X, Trash2, Plus, Minus, CreditCard, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { useState } from 'react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cart,
  onRemoveItem,
  onUpdateQuantity,
}: CartSidebarProps) {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

  const handleResetCheckout = () => {
    setCheckoutComplete(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* FADE-IN OVERLAY BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-avio-dark/50 backdrop-blur-xs"
          />

          {/* SLIDEOUT SIDEBAR DRAWER */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col border-l border-gray-100"
            aria-label="Carrello della spesa"
          >
            {/* Header section */}
            <div className="bg-avio-dark text-white px-6 py-5 flex justify-between items-center border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <span className="font-sans font-extrabold text-sm uppercase tracking-widest text-high-vis">
                  Carrello Pilota
                </span>
                <span className="text-[10px] bg-white/10 py-0.5 px-2 rounded-full font-mono text-white/90">
                  SECURE GATE
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-md text-white/70 hover:text-white transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {checkoutComplete ? (
              /* Success Landing Gate post-checkout */
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center bg-avio-light/30">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold font-sans text-avio-dark mb-3">
                  PIANO DI VOLO AUTORIZZATO!
                </h3>
                <p className="text-sm text-gray-600 mb-8 max-w-xs mx-auto leading-relaxed">
                  Grazie per aver provato il prototipo. L'ordine simulato è stato elaborato con successo e i tuoi articoli sono pronti per il decollo!
                </p>
                <button
                  onClick={handleResetCheckout}
                  className="w-full max-w-xs py-3 px-6 bg-avio-dark text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-avio-dark/90 transition-colors shadow-xs cursor-pointer"
                >
                  Ritorna allo Store
                </button>
              </div>
            ) : (
              /* Main Cart Panel items list */
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                      <div className="p-4 rounded-full bg-gray-50 border border-gray-150 mb-4 text-gray-300">
                        <AlertCircle className="w-10 h-10" />
                      </div>
                      <p className="font-sans font-medium text-sm text-gray-500">
                        Il carrello è vuoto.
                      </p>
                      <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
                        Seleziona un prodotto dallo store per iniziare l'imbarco.
                      </p>
                    </div>
                  ) : (
                    <AnimatePresence>
                      {cart.map((item) => (
                        <motion.div
                          key={item.product.id}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          className="flex gap-4 p-3 rounded-lg border border-gray-150 bg-avio-light/20 shadow-xs relative group hover:border-gray-300/80 transition-colors"
                        >
                          {/* Image box */}
                          <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-gray-150 select-none">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info panel */}
                          <div className="flex-1 min-w-0 pr-6 flex flex-col justify-between">
                            <div>
                              <h4 className="font-sans font-bold text-sm text-avio-dark line-clamp-1">
                                {item.product.name}
                              </h4>
                              <p className="text-xs text-gray-500 font-sans mt-0.5 line-clamp-1">
                                {item.product.category}
                              </p>
                            </div>

                            {/* Quantity Adjusters */}
                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex items-center border border-gray-200 rounded-md bg-white">
                                <button
                                  onClick={() =>
                                    onUpdateQuantity(item.product.id, item.quantity - 1)
                                  }
                                  className="p-1 px-[6px] text-gray-500 hover:text-avio-dark hover:bg-gray-50 transition-colors focus:outline-none"
                                  aria-label="Riduci quantità"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="font-mono text-xs font-semibold px-2 min-w-[20px] text-center text-avio-dark">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    onUpdateQuantity(item.product.id, item.quantity + 1)
                                  }
                                  className="p-1 px-[6px] text-gray-500 hover:text-avio-dark hover:bg-gray-50 transition-colors focus:outline-none"
                                  aria-label="Aumenta quantità"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              <span className="font-sans font-bold text-sm text-high-vis text-right max-w-[80px] truncate">
                                {(item.product.price * item.quantity).toFixed(2)} €
                              </span>
                            </div>
                          </div>

                          {/* Delete Absolute Trigger */}
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-red-500 transition-colors rounded-md hover:bg-red-50 focus:outline-none focus:ring-1 focus:ring-red-200"
                            aria-label="Rimuovi prodotto"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )}
                </div>

                {/* Sidebar Footer Calculation */}
                {cart.length > 0 && (
                  <div className="bg-avio-light/40 border-t border-gray-150 p-6 space-y-4">
                    <div className="flex justify-between items-center font-sans">
                      <span className="font-extrabold text-sm uppercase tracking-wider text-avio-dark">
                        Totale Spedizione:
                      </span>
                      <span className="font-mono font-black text-2xl text-high-vis">
                        {cartTotal.toFixed(2)} €
                      </span>
                    </div>

                    <p className="text-[11px] text-gray-500 text-center leading-normal">
                      Metodo di pagamento protetto con tecnologia SSL. Spedizione tracciata tramite aero-corriere prioritario Aviation Curiosity.
                    </p>

                    <button
                      onClick={handleCheckout}
                      className="w-full py-4 px-6 bg-high-vis text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:bg-high-vis-hover transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <CreditCard className="w-4 h-4" />
                      Procedi al Checkout
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
