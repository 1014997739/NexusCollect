import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, CreditCard } from 'lucide-react';
import { Product } from '../types';

interface CheckoutProps {
  cart: { product: Product, quantity: number }[];
  onBack: () => void;
  onCheckoutComplete: () => void;
}

export default function Checkout({ cart, onBack, onCheckoutComplete }: CheckoutProps) {
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 25.00 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <ShieldCheck className="w-16 h-16 text-gray-600 mx-auto mb-6" />
        <h2 className="font-display text-2xl uppercase tracking-widest mb-4">Cart is Empty</h2>
        <p className="font-tech text-gray-500 mb-8">NO ITEMS DETECTED IN YOUR INVENTORY.</p>
        <button onClick={onBack} className="cyber-button px-8 py-3">RETURN TO DATABASE</button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 font-tech text-sm text-gray-400 hover:text-[#00f3ff] transition-colors mb-8 uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" /> Continue Browsing
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-2xl uppercase tracking-widest mb-6 border-b border-gray-800 pb-4">
            Secure Checkout
          </h2>
          
          {cart.map((item, idx) => (
            <div key={idx} className="flex gap-6 bg-[#121212] p-4 cyber-border">
              <div className="w-24 h-32 bg-black shrink-0">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-tech text-xs text-gray-500 tracking-widest mb-1">{item.product.series}</p>
                  <h3 className="font-display text-lg uppercase tracking-wide">{item.product.name}</h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-tech text-sm text-gray-400">QTY: {item.quantity}</span>
                  <span className="font-tech text-lg text-[#00f3ff]">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-[#121212] p-6 cyber-border sticky top-28">
            <h3 className="font-display text-xl uppercase tracking-widest mb-6">Transmission Summary</h3>
            
            <div className="space-y-4 font-tech text-sm mb-6 border-b border-gray-800 pb-6">
              <div className="flex justify-between text-gray-400">
                <span>SUBTOTAL</span>
                <span className="text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>SECURE SHIPPING</span>
                <span className="text-white">${shipping.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between font-tech text-xl mb-8">
              <span>TOTAL</span>
              <span className="text-[#00f3ff]">${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={onCheckoutComplete}
              className="w-full bg-[#00f3ff] text-black font-display font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" /> Initialize Payment
            </button>
            
            <p className="font-tech text-[10px] text-gray-500 text-center mt-4 tracking-widest">
              ENCRYPTED CONNECTION ESTABLISHED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
