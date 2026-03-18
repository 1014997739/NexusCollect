import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
        
        {/* Cyberpunk Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-tech text-[#00f3ff] tracking-[0.3em] mb-4 text-sm md:text-base">
            SYSTEM INITIALIZED // PREMIUM COLLECTIBLES
          </p>
          <h1 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
            <span className="glitch-text" data-text="ELEVATE YOUR">ELEVATE YOUR</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#ff003c]">REALITY</span>
          </h1>
          <p className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Curated high-end action figures and mecha models for the elite collector. 
            Precision engineering meets artistic perfection.
          </p>
          
          <button 
            onClick={onExplore}
            className="cyber-button px-8 py-4 text-sm font-bold"
          >
            INITIALIZE CATALOG
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#00f3ff] cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={onExplore}
      >
        <ChevronDown className="w-8 h-8 opacity-50" />
      </motion.div>
    </div>
  );
}
