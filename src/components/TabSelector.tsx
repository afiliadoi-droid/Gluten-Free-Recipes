import React from 'react';
import { motion } from 'motion/react';
import { IceCream, CakeSlice, Wheat } from 'lucide-react';

interface TabSelectorProps {
  activeTab: 'bread' | 'cake' | 'frosting';
  onChange: (tab: 'bread' | 'cake' | 'frosting') => void;
}

export const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onChange }) => {
  return (
    <div className="bg-white p-1.5 rounded-full shadow-md border border-stone-100 flex relative w-full max-w-md mx-auto">
      <motion.div
        className="absolute top-1.5 bottom-1.5 rounded-full shadow-sm z-0"
        layoutId="activeTab"
        initial={false}
        animate={{
          x: activeTab === 'bread' ? 0 : activeTab === 'cake' ? '100%' : '200%',
          backgroundColor: activeTab === 'bread' ? '#76B800' : activeTab === 'cake' ? '#FF7924' : '#811B18',
        }}
        style={{
          width: 'calc(33.33% - 4px)',
          left: '4px'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      
      <button
        onClick={() => onChange('bread')}
        className={`flex-1 relative z-10 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-bold transition-colors duration-200 ${
          activeTab === 'bread' ? 'text-white' : 'text-stone-500 hover:text-stone-700'
        }`}
      >
        <Wheat className="w-4 h-4" />
        <span>Breads</span>
      </button>

      <button
        onClick={() => onChange('cake')}
        className={`flex-1 relative z-10 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-bold transition-colors duration-200 ${
          activeTab === 'cake' ? 'text-white' : 'text-stone-500 hover:text-stone-700'
        }`}
      >
        <CakeSlice className="w-4 h-4" />
        <span>Cakes</span>
      </button>

      <button
        onClick={() => onChange('frosting')}
        className={`flex-1 relative z-10 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-bold transition-colors duration-200 ${
          activeTab === 'frosting' ? 'text-white' : 'text-stone-500 hover:text-stone-700'
        }`}
      >
        <IceCream className="w-4 h-4" />
        <span>Frostings</span>
      </button>
    </div>
  );
};
