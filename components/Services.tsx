
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-black tracking-widest uppercase text-[10px] mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900">Comprehensive Energy Solutions</h3>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden bg-slate-50 rounded-2xl h-80 transition-all duration-500 cursor-pointer shadow-sm border border-slate-100 flex flex-col justify-end p-8"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-20 group-hover:opacity-40" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-emerald-900 group-hover:via-emerald-900/40 transition-all duration-500"></div>
              </div>

              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">{service.icon}</div>
                <h4 className="text-xl font-black text-slate-900 group-hover:text-white mb-3 transition-colors uppercase tracking-tighter">{service.title}</h4>
                <p className="text-slate-600 group-hover:text-emerald-50 transition-colors leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
