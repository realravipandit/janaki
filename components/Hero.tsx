
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover opacity-70"
          alt="Himalayan Mountains"
          loading="eager"
        />
        {/* CRITICAL: Top gradient to ensure Navbar text is ALWAYS visible against white background if image hasn't loaded */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/30 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-emerald-600 text-white font-black text-[9px] tracking-[0.3em] uppercase mb-8 rounded-sm animate-in fade-in slide-in-from-top duration-700">
            Pioneering Sustainable Energy
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1] mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
            Powering the <br />
            <span className="text-emerald-500">Green Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-12 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom duration-1000 delay-200 drop-shadow-lg font-medium">
            Janaki Energy is committed to developing sustainable hydropower projects in Nepal, contributing significantly to the national grid and green energy transition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <a 
              href="#about" 
              className="px-10 py-5 bg-emerald-600 text-white rounded-sm font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/30 text-center"
            >
              Who We Are
            </a>
            <a 
              href="#projects" 
              className="px-10 py-5 bg-white text-slate-900 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-100 transition-all text-center"
            >
              Our Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce opacity-40 z-20">
        <a href="#about" className="text-white flex flex-col items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
