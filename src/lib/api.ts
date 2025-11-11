import { PROFESSIONALS, STORIES, Professional } from './mockData';

const simulate = (ms=500)=> new Promise(res=>setTimeout(res, ms));

export async function fetchProfessionals(filters?: any, sort?: any): Promise<Professional[]>{
  await simulate(400 + Math.random()*300);
  let data = [...PROFESSIONALS];
  // simple filter implementations
  if(filters){
    if(filters.category) data = data.filter(d=>d.category===filters.category);
    if(filters.city) data = data.filter(d=>d.city===filters.city);
    if(typeof filters.availableNow === 'boolean') data = data.filter(d=>d.availableNow===filters.availableNow);
    if(filters.priceMin!=null) data = data.filter(d=>d.pricePerHour>=filters.priceMin);
    if(filters.priceMax!=null) data = data.filter(d=>d.pricePerHour<=filters.priceMax);
  }
  if(sort){
    if(sort==='rating') data.sort((a,b)=>b.rating-a.rating);
    if(sort==='distance') data.sort((a,b)=>a.distanceKm-b.distanceKm);
    if(sort==='reviews') data.sort((a,b)=>b.reviews-b.reviews);
  }
  return data;
}

export async function fetchStories(){
  await simulate(200);
  return STORIES;
}

// TODO: Replace these mock functions with real API calls when backend is ready.