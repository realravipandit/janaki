
import React, { useState, useRef, useEffect } from 'react';
import { getEnergyAdvice } from '../services/gemini';
import { ChatMessage } from '../types';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Janaki AI. How can I assist you with renewable energy solutions or sustainable transitions today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const response = await getEnergyAdvice(userText);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-3">Innovation</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Meet Your AI <span className="text-emerald-600">Energy Advisor</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Transitioning to renewable energy can be complex. Our AI-powered consultant helps you navigate hydropower potential, solar feasibility, and sustainability strategies tailored for your goals.
            </p>
            <ul className="space-y-4">
              {['Real-time sustainability insights', 'Renewable energy transition planning', 'Specific expertise in Himalayan energy', 'Corporate ESG strategy advice'].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl border border-white/10">
            <div className="bg-slate-950 rounded-[1.4rem] h-[550px] flex flex-col overflow-hidden">
              {/* Header */}
              <div className="p-6 bg-slate-900 border-b border-white/5 flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-white/50 text-sm font-mono uppercase tracking-widest">advisor_engine_v3.2</span>
              </div>

              {/* Chat Area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-tr-none' 
                      : 'bg-white/10 text-slate-200 border border-white/10 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 flex space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-6 bg-slate-900 border-t border-white/5 flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about green energy..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl px-5 transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
