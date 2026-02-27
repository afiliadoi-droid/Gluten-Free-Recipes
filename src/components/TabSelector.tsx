import React from 'react';
import { motion } from 'motion/react';
import { IceCream, CakeSlice, Wheat, Cookie, BookOpen } from 'lucide-react';

interface TabSelectorProps {
  activeTab: 'bread' | 'cake' | 'frosting' | 'dessert' | 'essential';
  onChange: (tab: 'bread' | 'cake' | 'frosting' | 'dessert' | 'essential') => void;
}

export const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onChange }) => {
  const tabs = [
    { id: 'bread', label: 'Breads', icon: Wheat, color: '#76B800' },
    { id: 'cake', label: 'Cakes', icon: CakeSlice, color: '#FF7924' },
    { id: 'frosting', label: 'Frostings', icon: IceCream, color: '#811B18' },
    { id: 'dessert', label: 'Desserts', icon: Cookie, color: '#D81B60' },
    { id: 'essential', label: 'Essential Guide', icon: BookOpen, color: '#006064' },
  ] as const;

  return (
    <div className="bg-white p-1.5 rounded-2xl shadow-md border border-stone-100 grid grid-cols-2 sm:grid-cols-3 gap-2 relative w-full max-w-2xl mx-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`group relative z-10 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 min-w-0 flex-1 ${isActive ? 'text-white' : 'text-stone-500 hover:text-stone-900'
              }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 rounded-xl shadow-lg z-0"
                style={{ backgroundColor: tab.color }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <div className="flex items-center gap-2 relative z-10">
              <tab.icon className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className="truncate">{tab.label}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
