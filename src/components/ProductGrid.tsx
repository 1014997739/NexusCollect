import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function ProductGrid({ products, onSelect }: ProductGridProps) {
  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12 border-b border-gray-800 pb-4">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wider">
            LATEST <span className="text-[#00f3ff]">ACQUISITIONS</span>
          </h2>
          <p className="font-tech text-gray-500 text-sm mt-2 tracking-widest">DATABASE // INVENTORY_SCAN</p>
        </div>
        <div className="hidden md:block font-tech text-xs text-[#ff003c] tracking-widest">
          [ {products.length} ITEMS FOUND ]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => onSelect(product)}
          >
            <div className="cyber-border bg-[#121212] aspect-[3/4] mb-4 overflow-hidden relative">
              {/* Status Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className={`font-tech text-[10px] px-2 py-1 tracking-wider border ${product.inStock ? 'border-[#00f3ff] text-[#00f3ff] bg-[#00f3ff]/10' : 'border-[#ff003c] text-[#ff003c] bg-[#ff003c]/10'}`}>
                  {product.inStock ? 'IN STOCK' : 'PRE-ORDER'}
                </span>
              </div>
              
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-tech text-[#00f3ff] text-sm tracking-widest flex items-center gap-2">
                  VIEW SPECS <span className="block w-4 h-[1px] bg-[#00f3ff]"></span>
                </span>
              </div>
            </div>
            
            <div>
              <p className="font-tech text-xs text-gray-500 tracking-widest mb-1">{product.series}</p>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-2 group-hover:text-[#00f3ff] transition-colors">
                {product.name}
              </h3>
              <p className="font-tech text-xl text-white">${product.price.toFixed(2)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
