// src/features/category/CategoryPage.tsx
import React from 'react';
import StoriesSection from '../stories/StoriesSection';
import ProfessionalsSection from '../professionals/ProfessionalsSection';

export default function CategoryPage({path}:{path:string}){
  const id = path.split('/category/')[1];
  const categoryMap:any = {
    'c1':'מדריכים ומורים פרטיים',
    'c2':'משפט, פיננסים ומנהל',
    'c3':'בנייה, מלאכה ותעשייה',
    'c4':'שירותים, אירוח ומכירות',
    'c5':'ניקיון ותחזוקה',
    'c6':'מאמנים וטרינרים'
  };
  const category = categoryMap[id] ?? id;
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{category}</h1>
      <StoriesSection category={category} />
      <div className="mt-6">
        <ProfessionalsSection categoryFilter={category} />
      </div>
    </div>
  )
}
