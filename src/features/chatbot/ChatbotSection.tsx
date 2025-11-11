// src/features/chatbot/ChatbotSection.tsx
import React from 'react';
import {motion} from 'framer-motion';

export default function ChatbotSection(){
  const [messages, setMessages] = React.useState<any[]>([{from:'bot', text:'היי! איך אפשר לעזור היום?'}]);
  const [input, setInput] = React.useState('');
  const send = ()=>{ if(!input) return; setMessages(m=>[...m, {from:'user', text:input}]); setInput(''); setTimeout(()=> setMessages(m=>[...m, {from:'bot', text:'תודה! קיבלתי את ההודעה (דמו)'}]), 800); }
  const onFile = (e:any)=>{ const f = e.target.files && e.target.files[0]; if(!f) return; const url = URL.createObjectURL(f); setMessages(m=>[...m, {from:'user', img:url}]); setTimeout(()=> setMessages(m=>[...m, {from:'bot', text:'ראיתי את התמונה (דמו)'}]), 900); }

  return (
    <section aria-label="Chatbot" className="bg-gradient-to-r from-white to-sky-50 rounded-xl p-4 shadow">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">🤖</div>
        <div>
          <div className="font-bold">צ'אטבוט עוזר</div>
          <div className="text-sm text-slate-500">שאל שאלה מהירה וקבל תשובה מדומה</div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="max-h-56 overflow-auto flex flex-col gap-2">
          {messages.map((m,i)=>(
            <div key={i} className={(m.from==='user' ? 'self-end bg-blue-100' : 'bg-slate-100') + ' p-2 rounded-lg max-w-[80%]'}>
              {m.text}
              {m.img && <img src={m.img} className="w-40 mt-2 rounded" alt="uploaded" />}
            </div>
          ))}
        </div>

        <div className="mt-2 flex gap-3">
          <input aria-label="chat input" value={input} onChange={e=>setInput(e.target.value)} placeholder="כתוב כאן (דמו)..." className="flex-1 p-3 rounded-lg border bg-white"/>
          <input type="file" accept="image/*" onChange={onFile} className="hidden" id="chat-file" capture="environment" />
          <label htmlFor="chat-file" className="px-3 py-2 rounded-lg border cursor-pointer">📷</label>
          <button onClick={send} className="px-4 py-2 rounded-lg bg-blue-600 text-white">שלח</button>
        </div>
      </div>
    </section>
  )
}
