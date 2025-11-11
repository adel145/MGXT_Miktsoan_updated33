// src/features/professionals/ProfessionalsSection.tsx
import React, {useEffect, useState} from 'react';
import {PROFESSIONALS} from '../../lib/mockData';
import {motion} from 'framer-motion';
import ProModal from '../../components/ProModal';

export default function ProfessionalsSection({categoryFilter}:{categoryFilter?:string}){
  const [data,setData] = useState<any[]>([]);
  const [q,setQ] = useState('');
  const [category,setCategory] = useState('');
  const [sort,setSort] = useState('');
  const [modalOpen,setModalOpen] = useState(false);
  const [activePro,setActivePro] = useState<any>(null);
  const openPro = (p:any)=>{ setActivePro(p); setModalOpen(true); };

  useEffect(()=> setData(PROFESSIONALS),[]);
  useEffect(()=>{ if(categoryFilter){ setData(PROFESSIONALS.filter(p=>p.category===categoryFilter)); } },[categoryFilter]);

  const filtered = data.filter(d=>{
    const ql = q.toLowerCase();
    if(category && d.category!==category) return false;
    if(q && !(d.name.toLowerCase().includes(ql) || d.city.toLowerCase().includes(ql) || d.category.toLowerCase().includes(ql))) return false;
    return true;
  }).sort((a,b)=>{
    if(sort==='rating') return b.rating - a.rating;
    if(sort==='distance') return a.distanceKm - b.distanceKm;
    return 0;
  });

  return (
    <section aria-label="Professionals">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">מקצוענים</h2>
        <div className="text-sm text-slate-500">מציג {filtered.length} תוצאות</div>
      </div>

      <div className="mt-4 flex gap-3 flex-col md:flex-row items-stretch">
        <input placeholder="חפש שם, עיר או סוג מקצוע..." value={q} onChange={e=>setQ(e.target.value)} className="p-2 rounded-lg border flex-1"/>
        <select value={category} onChange={e=>setCategory(e.target.value)} className="p-2 rounded-lg border">
          <option value="">כל הקטגוריות</option>
          {[...new Set(PROFESSIONALS.map((p:any)=>p.category))].map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={sort} onChange={e=>setSort(e.target.value)} className="p-2 rounded-lg border">
          <option value="">מיון</option>
          <option value="rating">דירוג</option>
          <option value="distance">מרחק</option>
        </select>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p=>(
          <motion.div key={p.id} whileHover={{scale:1.02}} className="bg-white rounded-xl p-4 shadow">
            <div className="flex items-center gap-4">
              <img src={p.avatar} alt={p.name} className="w-16 h-16 rounded-full object-cover"/>
              <div>
                <div className="font-bold">{p.name}</div>
                <div className="text-sm text-slate-500">{p.category} • {p.city}</div>
                <div className="text-sm">⭐ {p.rating} • {p.reviews} ביקורות</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-lg font-semibold">{p.pricePerHour} ₪ / שעה</div>
              <button onClick={()=>openPro(p)} className="px-3 py-1 rounded bg-blue-600 text-white">צור קשר</button>
            </div>
          </motion.div>
        ))}
      </div>

      <ProModal open={modalOpen} onClose={()=>setModalOpen(false)} pro={activePro} />
    </section>
  )
}
