
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="w-full md:w-auto">
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3 text-center md:text-left">Success Stories</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center md:text-left">Major Energy Installations</h3>
          </div>
          <a href="#" className="text-emerald-600 font-semibold hover:underline flex items-center gap-2 group text-sm uppercase tracking-widest font-black">
            View All Projects
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-sm uppercase tracking-wider z-10">
                  {project.status}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-emerald-600 text-[10px] font-black uppercase mb-3 tracking-[0.2em]">{project.category} Energy</div>
                <h4 className="text-xl font-black text-slate-900 mb-3 leading-tight">{project.title}</h4>
                <div className="flex items-center text-slate-500 text-xs mb-6 font-bold">
                  <svg className="w-4 h-4 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Capacity</span>
                  <span className="text-emerald-600 font-black text-lg">{project.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
