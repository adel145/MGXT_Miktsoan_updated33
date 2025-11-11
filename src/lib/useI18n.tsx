
import React, {createContext, useContext, useState} from 'react';
import en from '../i18n/en.json';
import he from '../i18n/he.json';

type Lang = 'he'|'en';
const dicts: Record<Lang, any> = {he, en};
const I18nContext = createContext<any>(null);

export const I18nProvider = ({children}:{children:any})=>{
  const [lang, setLang] = useState<Lang>('he');
  const t = (path:string)=>{
    const parts = path.split('.');
    let cur:any = dicts[lang];
    for(const p of parts){ cur = cur?.[p]; if(cur==null) return path; }
    return cur;
  };
  return <I18nContext.Provider value={{lang,setLang,t}}>{children}</I18nContext.Provider>
};

export const useI18n = ()=> useContext(I18nContext);
