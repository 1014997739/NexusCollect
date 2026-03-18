import React from 'react';
import { ShoppingCart, Hexagon } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
}

export default function Navbar({ cartCount, onCartClick, onHomeClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#00f3ff]/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-2 group"
        >
          <Hexagon className="w-8 h-8 text-[#00f3ff] group-hover:text-[#ff003c] transition-colors duration-300" />
          <span className="font-display font-bold text-xl tracking-widest text-white">
            NEXUS<span className="text-[#00f3ff]">COLLECT</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8 font-tech text-sm tracking-widest text-gray-400">
          <button onClick={onHomeClick} className="hover:text-[#00f3ff] transition-colors">NEW ARRIVALS</button>
          <button onClick={onHomeClick} className="hover:text-[#00f3ff] transition-colors">PRE-ORDERS</button>
          <button onClick={onHomeClick} className="hover:text-[#00f3ff] transition-colors">BRANDS</button>
        </div>

        <button 
          onClick={onCartClick}
          className="relative p-2 text-gray-400 hover:text-[#00f3ff] transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 w-5 h-5 bg-[#ff003c] text-white text-xs flex items-center justify-center rounded-full font-tech"
            >
              {cartCount}
            </motion.span>
          )}
        </button>
      </div>
    </nav>
  );
}
