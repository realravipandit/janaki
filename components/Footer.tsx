
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black text-xl">J</div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">Janaki Energy</span>
            </a>
            <p className="text-base leading-relaxed mb-8 text-slate-500">
              Leading the way in sustainable hydropower development and investment across Nepal. Empowering communities through clean, reliable power.
            </p>
            <div className="flex space-x-5">
              {['Twitter', 'LinkedIn', 'FB', 'IG'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all text-xs font-bold">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Corporate</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">Our History</a></li>
              <li><a href="#projects" className="hover:text-emerald-500 transition-colors">Project Portfolio</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Board of Directors</a></li>
              <li><a href="#careers" className="hover:text-emerald-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Annual Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-4 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <div>
                  <span className="text-white font-bold block mb-1">Corporate Office</span>
                  Janaki Bhawan, Floor 4<br />Tinkune, Kathmandu, Nepal
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-500 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </span>
                +977 1 4400 000
              </li>
              <li className="flex items-center">
                <span className="text-emerald-500 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                info@janakienergy.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Sustainability</h4>
            <p className="text-sm mb-6 text-slate-500">Subscribe to our quarterly ESG and progress reports.</p>
            <form className="flex group">
              <input 
                type="email" 
                placeholder="Work Email" 
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-3 w-full focus:outline-none focus:border-emerald-500 transition-colors text-sm"
              />
              <button className="bg-emerald-600 text-white px-5 py-3 rounded-r-md hover:bg-emerald-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold text-slate-600">
          <p>© {new Date().getFullYear()} Janaki Energy Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Governance</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Investment</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
