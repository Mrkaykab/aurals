import React from 'react';
import { Palette, ShoppingCart, Trophy } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Palette className="w-8 h-8 text-[#03E5DF]" />,
      title: "Artists Create & Mint",
      description: "Musicians create unique digital collectibles representing their music and other exclusive content on the Aurals platform."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-[#03E5DF]" />,
      title: "Fans Buy & Support",
      description: "Fans purchase music tokens to own a piece of their favorite artist's work, gaining access to exclusive benefits along the way."
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#03E5DF]" />,
      title: "Earn & Engage",
      description: "Fans and artists both earn from resales, interactions, and in-platform events, creating a fair and engaging digital music experience."
    }
  ];

  return (
    <div className="bg-[#3F043F] py-24" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          How Aurals Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#EF2020] to-[#03E5DF]" />
              )}
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-[#EDEDED]/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}