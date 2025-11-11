// src/lib/router.tsx
import React, {useEffect, useState} from 'react';

type Route = {path:string, component: any};
const routes: Route[] = [];

export function registerRoute(path:string, component:any){
  routes.push({path, component});
}

export default function Router(){
  const [path, setPath] = useState(window.location.pathname);
  useEffect(()=>{
    const onpop = ()=> setPath(window.location.pathname);
    window.addEventListener('popstate', onpop);
    return ()=> window.removeEventListener('popstate', onpop);
  },[]);
  for(const r of routes){
    if(path === r.path || (r.path.endsWith('*') && path.startsWith(r.path.slice(0,-1)))){
      const Component = r.component;
      return <Component path={path} />;
    }
  }
  return null;
}

export function navigateTo(p:string){
  window.history.pushState({}, '', p);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
