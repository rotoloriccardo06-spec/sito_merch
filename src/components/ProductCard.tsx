import { useState } from 'react';
import { Check, ShoppingCart, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  key?: string;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    onAddToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col bg-white rounded-xl border border-gray-200/60 shadow-sm hover:shadow-xl hover:border-high-vis/40 transition-all duration-300 overflow-hidden group">
      {/* Product Image Stage */}
      <div className="relative overflow-hidden aspect-square select-none">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge overlay */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-avio-dark/80 text-avio-light text-[10px] uppercase font-bold tracking-widest backdrop-blur-xs">
          {product.category}
        </div>
      </div>

      {/* Product Content info panel */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="font-sans font-bold text-lg text-avio-dark tracking-tight leading-tight group-hover:text-high-vis transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xl font-extrabold text-high-vis mt-1">
            {product.price.toFixed(2)} €
          </p>
        </div>

        {/* Minimal Description */}
        <p className="text-sm text-gray-600 line-clamp-2 font-sans leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Technical Specs Box - adds great professional touch */}
        <div className="bg-avio-light/60 border border-gray-100 rounded-lg p-3 text-xs mb-5 flex-1 space-y-1.5 flex flex-col justify-center">
          {product.specs.map((spec, index) => (
            <div key={index} className="flex justify-between items-center text-gray-600">
              <span className="font-sans font-medium">{spec.name}:</span>
              <span className="font-sans font-semibold text-avio-dark text-right line-clamp-1 pl-2">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Interactive Button */}
        <button
          onClick={handleAdd}
          disabled={isAdding}
          className={`relative w-full py-3 px-4 rounded-lg font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border shadow-xs active:scale-95 cursor-pointer disabled:cursor-default select-none ${
            isAdding
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'bg-avio-dark text-white border-avio-dark hover:bg-avio-dark/90 hover:shadow-md'
          }`}
        >
          <AnimatePresence mode="wait">
            {isAdding ? (
              <motion.div
                key="added"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5"
              >
                <Check className="w-4 h-4 animate-bounce" />
                Aggiunto!
              </motion.div>
            ) : (
              <motion.div
                key="add"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5"
              >
                <ShoppingCart className="w-4 h-4" />
                Aggiungi al carrello
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
