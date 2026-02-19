
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for solid navbar appearance
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white shadow-xl py-0' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex shrink-0 items-center">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isScrolled ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' : 'bg-white/10 backdrop-blur-sm border-white/30 text-white'}`}>
                <span className="text-xl font-black">J</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-black tracking-tighter leading-none transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>JANAKI</span>
                <span className={`text-[9px] font-black tracking-[0.3em] leading-none mt-1 transition-colors duration-300 ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`}>ENERGY</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label} 
                className="relative h-16 flex items-center"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 rounded-md
                    ${isScrolled 
                      ? 'text-slate-700 hover:text-emerald-600 hover:bg-emerald-50' 
                      : 'text-white hover:bg-white/10'}`}
                >
                  <span>{item.label}</span>
                  {item.subItems && (
                    <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className={`absolute left-0 top-full pt-0 transition-all duration-300 origin-top ${activeDropdown === item.label ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white shadow-2xl rounded-b-2xl py-3 min-w-[240px] border-t-4 border-emerald-600">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-6 py-3 text-[9px] font-black text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors uppercase tracking-[0.2em] border-b border-slate-50 last:border-0"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900 bg-slate-100 shadow-inner' : 'text-white bg-white/10'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white ${isMobileMenuOpen ? 'max-h-screen border-t border-slate-100' : 'max-h-0'}`}>
        <div className="px-6 py-8 space-y-2">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="flex items-center justify-between px-4 py-4 text-xs font-black text-slate-900 bg-slate-50 rounded-xl uppercase tracking-widest"
                onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
              {item.subItems && (
                <div className="mt-2 ml-4 space-y-1">
                  {item.subItems.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block pl-6 py-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest border-l-2 border-emerald-100"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
