import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#3F043F] py-24" id="waitlist-form">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-[#EF2020]/20 to-[#03E5DF]/20 rounded-3xl p-8 md:p-12 backdrop-blur-lg text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-[#EDEDED]">
              We've received your submission. We'll be in touch soon with exclusive updates about Aurals.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#3F043F] py-24" id="waitlist-form">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-r from-[#EF2020]/20 to-[#03E5DF]/20 rounded-3xl p-8 md:p-12 backdrop-blur-lg">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Be the First to Join Aurals
          </h2>
          <p className="text-center text-[#EDEDED] mb-12">
            Aurals is more than a platform—it's a movement toward fair music ownership and fan engagement. 
            Sign up to our waitlist to get early access, exclusive rewards, and be part of the future of music.
          </p>
          
          <form 
            name="waitlist" 
            method="POST" 
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#03E5DF]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#03E5DF]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EF2020] to-[#03E5DF] text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>Join the Waitlist</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}