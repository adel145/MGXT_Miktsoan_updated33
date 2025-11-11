// src/components/ProModal.tsx
import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export default function ProModal({open, onClose, pro}:{open:boolean, onClose:()=>void, pro:any}){
  return (
    <AnimatePresence>
      {open && pro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute inset-0 bg-black/40" onClick={onClose} />
          <motion.div initial={{y:40, opacity:0}} animate={{y:0, opacity:1}} exit={{y:40, opacity:0}} className="bg-white rounded-xl p-6 z-10 max-w-xl w-full shadow-lg">
            <div className="flex items-start gap-4">
              <img src={pro.avatar} alt={pro.name} className="w-24 h-24 rounded-full object-cover"/>
              <div>
                <div className="text-xl font-bold">{pro.name}</div>
                <div className="text-sm text-slate-600">{pro.category} • {pro.city}</div>
                <div className="mt-2">⭐ {pro.rating} • {pro.reviews} ביקורות</div>
                <p className="mt-3 text-slate-700">{pro.bio}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={onClose} className="px-3 py-1 rounded border">סגור</button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white">שלח הודעה</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
