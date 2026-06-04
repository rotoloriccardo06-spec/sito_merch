import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import YoutubeBanner from './components/YoutubeBanner';
import CartSidebar from './components/CartSidebar';
import { PRODUCTS } from './data';
import { CartItem, Product } from './types';
import { HelpCircle, Shield, Truck } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aviation_curiosity_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Persistence side-effect
  useEffect(() => {
    localStorage.setItem('aviation_curiosity_cart', JSON.stringify(cart));
  }, [cart]);

  // Synchronize dynamic scrolling for accessibility when cart opens
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  // Category Filtering Extractor
  const categories = ['all', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col selection:bg-high-vis selection:text-white">
      {/* 1. Header & Navigation Gate */}
      <Header cart={cart} onOpenCart={() => setIsCartOpen(true)} />

      {/* 2. Hero banner */}
      <main className="flex-1">
        <Hero />

        {/* 3. Primary Store Display */}
        <section id="prodotti" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-avio-dark tracking-tight uppercase">
              Equipaggiamento Selezionato
            </h2>
            <div className="w-12 h-1.5 bg-high-vis mx-auto rounded-full" />
            <p className="text-gray-600 text-sm sm:text-base font-sans font-normal leading-relaxed">
              Materiali aeronautici e grafiche tecniche certificate. Scegli i prodotti ufficiali del canale d'aviazione Aviation Curiosity.
            </p>
          </div>

          {/* Core Categories Filter Rail */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-high-vis text-white shadow-md shadow-high-vis/15'
                      : 'bg-white text-avio-dark border border-gray-250 select-all hover:bg-gray-50'
                  }`}
                >
                  {category === 'all' ? 'TUTTI I PRODOTTI' : category}
                </button>
              );
            })}
          </div>

          {/* Grid View layout of Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {/* Secondary benefits banner rail */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-gray-200/80">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-avio-dark text-white rounded-lg flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-high-vis" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-avio-dark">SPEDIZIONE PRIORITARIA GESTITA</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">Consigne rapide con corriere espresso in tutta Italia e tracking del volo.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-avio-dark text-white rounded-lg flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-high-vis" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-avio-dark">PAGAMENTI SICURI CRITTOGRAFATI</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">Transazioni sicure garantite con crittografia SSL avanzata.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-avio-dark text-white rounded-lg flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 text-high-vis" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-avio-dark">SERVIZIO ASSISTENZA PILOTI</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">Siamo qui per te. Scrivici se hai dubbi sulle taglie o sulle specifiche tecniche.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. YouTube Subscription segment */}
        <YoutubeBanner />
      </main>

      {/* 5. Sleek Literal Footer */}
      <footer className="bg-avio-dark text-white/80 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-sans font-bold text-base text-white">AVIATION CURIOSITY STORE</p>
            <p className="text-xs text-avio-light/60">Il merchandising aeronautico moderno per veri esperti e appassionati di volo.</p>
          </div>
          
          <div className="text-xs text-avio-light/40 font-mono">
            © {new Date().getFullYear()} Aviation Curiosity. All rights reserved. Made in Europe.
          </div>
        </div>
      </footer>

      {/* 6. Dynamic Over-the-top drawer */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}
