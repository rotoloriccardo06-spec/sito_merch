import { Plane, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

export default function Header({ cart, onOpenCart }: HeaderProps) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-avio-dark text-white border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 rounded-lg bg-high-vis flex items-center justify-center text-white shadow-md shadow-high-vis/20">
            <Plane className="w-6 h-6 -rotate-12 transform transition-transform hover:-rotate-45" />
          </div>
          <span className="font-sans font-extrabold text-lg sm:text-xl tracking-wider uppercase">
            Aviation <span className="text-high-vis">Curiosity</span>
          </span>
        </div>

        {/* NAVIGATION MENUS */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="font-sans text-sm font-semibold uppercase tracking-wider hover:text-high-vis transition-colors text-white/90"
          >
            Home
          </a>
          <a
            href="#prodotti"
            className="font-sans text-sm font-semibold uppercase tracking-wider hover:text-high-vis transition-colors text-white/90"
          >
            Store
          </a>
          <a
            href="#youtube"
            className="font-sans text-sm font-semibold uppercase tracking-wider hover:text-high-vis transition-colors text-white/90"
          >
            Canale YT
          </a>
        </nav>

        {/* CART TRIGGER BUTTON */}
        <button
          onClick={onOpenCart}
          className="relative p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-high-vis/50"
          aria-label="Apri carrello"
        >
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <motion.span
              key={totalItems}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="absolute -top-1.5 -right-1.5 min-w-5 h-5 flex items-center justify-center bg-high-vis text-white text-[10px] sm:text-xs font-bold rounded-full px-1.5 border-2 border-avio-dark"
            >
              {totalItems}
            </motion.span>
          )}
        </button>
      </div>
    </header>
  );
}
