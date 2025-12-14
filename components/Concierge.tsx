import React, { useState, useRef, useEffect } from 'react';
import { generateConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: 'Welcome. I am Kyle’s AI Assistant. How can we resolve your business pain points today?',
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => `${m.role}: ${m.text}`);
    const responseText = await generateConciergeResponse(userMsg.text, history);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-rr-dark/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="p-4 border-b border-white/10 bg-black/50 flex justify-between items-center">
            <span className="font-serif text-rr-silver tracking-widest text-sm">VIRTUAL ASSISTANT</span>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed rounded-sm ${
                  msg.role === 'user' 
                    ? 'bg-white/10 text-white border border-white/5' 
                    : 'bg-black/40 text-rr-silver border-l-2 border-rr-blue'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="text-xs text-white/40 italic animate-pulse">Processing request...</div>
              </div>
            )}
          </div>

          <div className="p-3 bg-black/50 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my stack..."
                className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder-white/20"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="text-rr-blue hover:text-white disabled:opacity-50 uppercase text-xs font-bold tracking-wider transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full transition-all duration-500 shadow-lg hover:shadow-rr-blue/20"
      >
        <span className="font-serif text-sm tracking-widest text-white hidden md:block">
          {isOpen ? 'CLOSE' : 'AI ASSISTANT'}
        </span>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-rr-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
      </button>
    </div>
  );
};