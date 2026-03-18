import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldAlert, Cpu, Crosshair, Box } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export default function ProductDetail({ product, onBack, onAddToCart, onBuyNow }: ProductDetailProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 font-tech text-sm text-gray-400 hover:text-[#00f3ff] transition-colors mb-8 uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Database
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="cyber-border aspect-[4/5] bg-[#121212] overflow-hidden"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            {product.gallery.map((img, idx) => (
              <div key={idx} className="cyber-border aspect-square bg-[#121212] overflow-hidden">
                <img src={img} alt={`${product.name} detail ${idx}`} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-tech text-xs px-2 py-1 tracking-widest border border-gray-700 text-gray-400">
                {product.scale}
              </span>
              <span className={`font-tech text-xs px-2 py-1 tracking-widest border ${product.inStock ? 'border-[#00f3ff] text-[#00f3ff]' : 'border-[#ff003c] text-[#ff003c]'}`}>
                {product.inStock ? 'STATUS: IN STOCK' : 'STATUS: PRE-ORDER'}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-wider mb-2">
              {product.name}
            </h1>
            <p className="font-tech text-gray-400 tracking-widest mb-8">{product.series}</p>

            <div className="font-tech text-3xl text-white mb-8">
              ${product.price.toFixed(2)}
            </div>

            <p className="font-sans text-gray-300 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button 
                onClick={onBuyNow}
                className="flex-1 bg-[#00f3ff] text-black font-display font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors"
              >
                Acquire Now
              </button>
              <button 
                onClick={onAddToCart}
                className="flex-1 cyber-button py-4"
              >
                Add to Cart
              </button>
            </div>

            {/* Technical Specs */}
            <div className="border-t border-gray-800 pt-8">
              <h3 className="font-display text-xl uppercase tracking-widest mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#00f3ff]" /> Technical Specifications
              </h3>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                <div>
                  <p className="font-tech text-xs text-gray-500 tracking-widest mb-1">MATERIAL</p>
                  <p className="font-sans text-sm">{product.specs.material}</p>
                </div>
                <div>
                  <p className="font-tech text-xs text-gray-500 tracking-widest mb-1">HEIGHT</p>
                  <p className="font-sans text-sm">{product.specs.height}</p>
                </div>
                <div>
                  <p className="font-tech text-xs text-gray-500 tracking-widest mb-1">MANUFACTURER</p>
                  <p className="font-sans text-sm">{product.specs.manufacturer}</p>
                </div>
                <div>
                  <p className="font-tech text-xs text-gray-500 tracking-widest mb-1">RELEASE</p>
                  <p className="font-sans text-sm">{product.specs.releaseDate}</p>
                </div>
              </div>

              <h3 className="font-display text-xl uppercase tracking-widest mb-6 flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-[#ff003c]" /> Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-sans text-sm text-gray-300">
                    <Box className="w-4 h-4 text-[#00f3ff] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
