// src/app.tsx
import React from 'react';
import StoriesSection from './features/stories/StoriesSection';
import ChatbotSection from './features/chatbot/ChatbotSection';
import CollectionsSection from './features/collections/CollectionsSection';
import ProfessionalsSection from './features/professionals/ProfessionalsSection';
import FeaturedSlider from './features/featured/FeaturedSlider';
import {I18nProvider, useI18n} from './lib/useI18n';
import Router, {registerRoute} from './lib/router';
import CategoryPage from './features/category/CategoryPage';
import './index.css';

registerRoute('/category/*', CategoryPage); ////33333333

const LangToggle = ()=> {
  const {lang,setLang} = useI18n();
  return (
    <div className="flex items-center gap-2 ml-auto">
      <button onClick={()=>setLang('he')} className={"px-2 py-1 rounded "+(lang==='he'?'bg-blue-600 text-white':'bg-white')}>עברית</button>
      <button onClick={()=>setLang('en')} className={"px-2 py-1 rounded "+(lang==='en'?'bg-blue-600 text-white':'bg-white')}>EN</button> 
    </div>
  ) /////1111111111111
}/////22222222222222

export default function App(){////hgvbkjkbvgh
  return (
    <I18nProvider>
      <div dir="rtl" className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-900"> 
        <header className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold">מ</div>
            <div>
              <div className="text-xl font-bold">Miktsoan <span className="text-sm text-slate-500">מקצוען</span></div>
              <div className="text-xs text-slate-400">מרקטפלייס לשירותים מקצועיים</div>
            </div>
          </div>
          <LangToggle />
        </header>

        <main className="max-w-6xl mx-auto p-4 space-y-8">
          <StoriesSection />
          <ChatbotSection />
          <CollectionsSection />
          <FeaturedSlider />
          <ProfessionalsSection />
        </main>

        <Router />

        <footer className="max-w-6xl mx-auto p-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Miktsoan - כל הזכויות שמורות
        </footer>
      </div>
    </I18nProvider>
  )
}
