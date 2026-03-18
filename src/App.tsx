import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from './data/products';
import { Product } from './types';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product' | 'checkout'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<{product: Product, quantity: number}[]>([]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00f3ff] selection:text-black">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setCurrentView('checkout')}
        onHomeClick={() => setCurrentView('home')}
      />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onExplore={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }} />
              <ProductGrid products={products} onSelect={handleProductSelect} />
            </motion.div>
          )}

          {currentView === 'product' && selectedProduct && (
            <motion.div
              key="product"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ProductDetail 
                product={selectedProduct} 
                onBack={() => setCurrentView('home')}
                onAddToCart={() => handleAddToCart(selectedProduct)}
                onBuyNow={() => {
                  handleAddToCart(selectedProduct);
                  setCurrentView('checkout');
                }}
              />
            </motion.div>
          )}

          {currentView === 'checkout' && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Checkout 
                cart={cart} 
                onBack={() => setCurrentView('home')}
                onCheckoutComplete={() => {
                  setCart([]);
                  setCurrentView('home');
                  alert('TRANSACTION COMPLETE. SECURE CHANNEL CLOSED.');
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
