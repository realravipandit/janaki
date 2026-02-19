
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';
import AIAdvisor from './components/AIAdvisor';
import Footer from './components/Footer';

const MEDIA_ITEMS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800',
    date: 'March 11, 2024',
    title: 'Sustainable Hydropower Expansion in the Kaligandaki Region',
    desc: 'Janaki Energy completes the primary phase of environmental assessment for the Upper Janaki cascading project, ensuring zero impact on local wildlife.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800',
    date: 'March 12, 2024',
    title: 'New Efficiency Benchmarks in Turbine Operation',
    desc: 'Implementation of smart monitoring systems at our Middle Janaki project has resulted in a 4% increase in annual generation efficiency.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
    date: 'March 13, 2024',
    title: 'Community Development Initiatives in Myagdi',
    desc: 'Our social responsibility team has inaugurated three new drinking water projects for local communities near our Lower Janaki site.'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-emerald-600 font-black tracking-widest uppercase text-[10px] mb-4">Welcome to Janaki Energy</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.2]">
                  Driving Sustainable Growth <br className="hidden md:block"/> Through Green Power
                </h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Janaki Energy Pvt. Ltd. stands as a beacon of progress in Nepal's energy sector. We focus on identifying, investing in, and developing hydropower resources that offer the highest value to our shareholders and the community.
                </p>
                <div className="space-y-6 mb-10">
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Energy Security</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">Ensuring a stable and reliable power supply for industrial and residential growth across the region.</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Eco-Friendly Legacy</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">Committing to zero-carbon energy generation and preserving the unique biodiversity of Nepal's river systems.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative" id="message">
                <div className="absolute -inset-4 bg-emerald-50 rounded-[2.5rem] rotate-2 -z-10 border border-emerald-100"></div>
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Mountain Resources"
                  className="rounded-3xl shadow-2xl relative z-10 w-full aspect-[4/5] object-cover border-4 border-white"
                />
                <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-8 rounded-2xl z-20 shadow-2xl hidden md:block">
                  <div className="text-4xl font-black mb-1">14+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Years Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-24 bg-slate-50 border-y border-slate-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-emerald-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Our Foundations</h2>
             <h3 className="text-4xl font-black text-slate-900 mb-16">Vision & Mission</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-emerald-300 transition-all duration-500">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-6 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h4 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">Vision</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">To be a pioneer in developing sustainable energy resources and contributing towards the nation's energy sufficiency through excellence and innovation.</p>
                </div>
                <div className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-emerald-300 transition-all duration-500">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:-rotate-6 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <h4 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">Mission</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">To effectively utilize hydropower resources through high-standard engineering, ethical investments, and environmentally friendly practices.</p>
                </div>
             </div>
           </div>
        </section>

        <ProjectGallery />
        <Services />

        {/* Media / News Section */}
        <section id="media" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4 text-center md:text-left">
              <div>
                <h2 className="text-emerald-600 font-black uppercase tracking-widest text-[10px] mb-4">Latest Insights</h2>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900">Media & Articles</h3>
              </div>
              <button className="text-emerald-600 font-black hover:text-emerald-700 transition-colors flex items-center gap-2 group text-[10px] uppercase tracking-[0.2em]">
                Explore All
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {MEDIA_ITEMS.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-3xl mb-6 aspect-[16/10] shadow-lg border-2 border-slate-50 bg-slate-100">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="News" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-600 text-white text-[9px] font-black uppercase rounded-sm">Update</span>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors mb-3 leading-tight">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section id="careers" className="py-24 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-5">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-emerald-500 font-black tracking-[0.3em] uppercase text-[10px] mb-6">Empowering Talent</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Join the Energy Revolution</h3>
              <p className="text-emerald-100/60 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                We are looking for passionate engineers and visionary leaders to help us scale the future of green energy in the Himalayas.
              </p>
              <button className="px-14 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-sm font-black transition-all transform hover:scale-105 shadow-2xl shadow-emerald-600/20 uppercase tracking-[0.2em] text-[10px]">
                Explore Vacancies
              </button>
            </div>
          </div>
        </section>

        <AIAdvisor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
