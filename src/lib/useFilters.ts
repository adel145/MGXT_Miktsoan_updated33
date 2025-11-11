import { useState } from 'react';

export function useFilters(){
  const [filters, setFilters] = useState({});
  const set = (partial: any)=> setFilters((p:any)=>({...p, ...partial}));
  const reset = ()=> setFilters({});
  return {filters, set, reset};
}