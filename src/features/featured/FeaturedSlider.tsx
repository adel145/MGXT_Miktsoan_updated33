
import React from 'react';
import {PROFESSIONALS} from '../../lib/mockData';
import {motion} from 'framer-motion';

export default function FeaturedSlider(){
  const featured = PROFESSIONALS.slice(0,6);
  return (
    <section aria-label="Featured">
      <h2 className="text-2xl font-bold mb-3">מקצוענים מומלצים</h2>
      <div className="flex gap-4 overflow-x-auto py-2">
        {featured.map(p=>(
          <motion.div key={p.id} whileHover={{scale:1.03}} className="min-w-[220px] bg-white rounded-xl p-3 shadow flex-none">
            <img src={p.avatar} className="w-full h-36 object-cover rounded-md mb-2" alt={p.name}/>
            <div className="font-bold">{p.name}</div>
            <div className="text-sm text-slate-500">⭐ {p.rating} • {p.city}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
