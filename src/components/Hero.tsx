import React from 'react';
import { Headphones, Music2, Coins } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#3F043F] via-[#EF2020] to-[#03E5DF] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-12">
            <Logo />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
            Own the Future of Music with Aurals
          </h1>
          <p className="text-xl md:text-2xl text-[#EDEDED] mb-12">
            Experience a new era where artists and fans connect directly, supporting each other through digital collectibles and music tokens.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
              <Headphones className="w-6 h-6 text-[#03E5DF]" />
              <span className="text-white">Direct Artist-Fan Connection</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
              <Music2 className="w-6 h-6 text-[#03E5DF]" />
              <span className="text-white">Music NFTs</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
              <Coins className="w-6 h-6 text-[#03E5DF]" />
              <span className="text-white">Fan Rewards</span>
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#03E5DF] hover:bg-[#02c5c0] text-[#3F043F] font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
          >
            Join the Waitlist Today
          </button>
        </div>
      </div>
    </div>
  );
}