// src/features/collections/CollectionsSection.tsx
import React from 'react';
import {categories} from '../../lib/categories';
import {navigateTo} from '../../lib/router';

export default function CollectionsSection(){
  return (
    <section aria-label="Collections" className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">קטגוריות מקצועות</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((c:any)=>(
          <div 
            key={c.id} 
            onClick={()=>navigateTo('/category/'+c.id)} 
            className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            {/* תמונת רקע עם אפקט hover */}
            <div className="relative h-32 overflow-hidden">
              <img 
                src={c.icon} 
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* שכבת overlay עם גרדיאנט */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* כותרת על התמונה */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-bold text-white text-base leading-tight drop-shadow-lg">
                  {c.title}
                </h3>
              </div>
            </div>
            
            {/* תיאור */}
            <div className="p-3 bg-gradient-to-br from-white to-slate-50">
              <p className="text-sm text-slate-600 leading-relaxed">
                {c.description}
              </p>
              
              {/* חץ קטן */}
              <div className="mt-2 flex items-center text-xs text-sky-600 font-medium group-hover:text-sky-700">
                <span>צפה בכל המומחים</span>
                <svg 
                  className="w-4 h-4 mr-1 transform transition-transform group-hover:-translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}