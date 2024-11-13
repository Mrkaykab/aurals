import React from 'react';
import { Users, Gift, Radio, Image } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#03E5DF]" />,
      title: "Direct Artist-Fan Connection",
      description: "Connect directly with fans, share exclusive content, and hold virtual concerts with music tokens."
    },
    {
      icon: <Gift className="w-8 h-8 text-[#03E5DF]" />,
      title: "Digital Collectibles and Rewards",
      description: "Purchase music tokens, gain rewards like free concert tickets, exclusive merchandise, and more."
    },
    {
      icon: <Radio className="w-8 h-8 text-[#03E5DF]" />,
      title: "Web3 Music Streaming",
      description: "Stream music and earn Aurals tokens as you listen, supporting your favorite artists."
    },
    {
      icon: <Image className="w-8 h-8 text-[#03E5DF]" />,
      title: "Virtual Music Gallery",
      description: "Attend live virtual concerts, explore artist exhibitions, and interact in our vibrant digital space."
    }
  ];

  return (
    <div className="bg-[#3F043F] py-24" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Why Aurals? It's More Than Music
        </h2>
        <p className="text-center text-[#EDEDED]/80 mb-16 max-w-2xl mx-auto">
          Connecting Artists and Fans, Redefining Ownership in Music
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all"
            >
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[#EDEDED]/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}