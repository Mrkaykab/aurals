import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#3F043F]">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default App;