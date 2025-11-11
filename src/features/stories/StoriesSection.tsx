// src/features/stories/StoriesSection.tsx
import React, {useState, useEffect} from 'react';
import {STORIES, PROFESSIONALS} from '../../lib/mockData';
import {motion, AnimatePresence} from 'framer-motion';

export default function StoriesSection({category}:{category?:string}){
  const [items, setItems] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(()=>{
    const list = STORIES.map(s=> ({...s, pro: PROFESSIONALS.find(p=>p.id===s.proId)}));
    if(category) setItems(list.filter(l=> l.pro?.category === category));
    else setItems(list);
  },[category]);

  const openStory = (i:number)=> setOpenIndex(i);
  const close = ()=> setOpenIndex(null);
  const next = ()=> setOpenIndex(prev => prev===null ? null : Math.min(prev+1, items.length-1));
  const prev = ()=> setOpenIndex(prev => prev===null ? null : Math.max(prev-1, 0));

  return (
    <section aria-label="Stories">
      <h2 className="text-2xl font-bold mb-3">סיפורים</h2>

      <div className="flex gap-4 overflow-x-auto py-2 pb-4">
        {items.map((s,i)=>(
          <motion.button key={s.id} whileHover={{scale:1.03}} onClick={()=>openStory(i)} className="flex-none flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-pink-500 via-yellow-400 to-red-500">
              <img src={s.pro?.avatar} alt={s.title} className="w-full h-full rounded-full object-cover border-2 border-white"/>
            </div>
            <div className="text-xs text-center max-w-[80px] truncate">{s.pro?.name}</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex!==null && items[openIndex] && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={close}></div>
            <motion.div initial={{scale:0.95, y:20}} animate={{scale:1, y:0}} exit={{scale:0.95, y:20}} className="bg-white rounded-xl p-4 z-10 max-w-3xl w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={items[openIndex].pro?.avatar} className="w-12 h-12 rounded-full object-cover"/>
                  <div>
                    <div className="font-bold">{items[openIndex].pro?.name}</div>
                    <div className="text-sm text-slate-500">{items[openIndex].title}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={prev} className="px-3 py-1 rounded border">Prev</button>
                  <button onClick={next} className="px-3 py-1 rounded border">Next</button>
                  <button onClick={close} className="px-3 py-1 rounded border">Close</button>
                </div>
              </div>
              <div className="mt-4">
                <img src={items[openIndex].img} alt={items[openIndex].title} className="w-full h-96 object-cover rounded-md"/>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
