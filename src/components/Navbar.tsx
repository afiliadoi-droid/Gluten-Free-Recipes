import React from 'react';
import { motion } from 'motion/react';
import { Book, Utensils } from 'lucide-react';

interface NavbarProps {
    onNavigate: (category: 'bread' | 'cake' | 'frosting' | 'dessert' | 'essential') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const navItems = [
        { id: 'bread', label: 'Breads', slug: '#breads' },
        { id: 'cake', label: 'Cakes', slug: '#cakes' },
        { id: 'frosting', label: 'Frostings', slug: '#frostings' },
        { id: 'dessert', label: 'Desserts', slug: '#desserts' },
        { id: 'essential', label: 'Essential Guide', slug: '#essential' },
    ] as const;

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-stone-100 sticky top-0 z-[60] py-3">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="bg-[#76B800] p-1.5 rounded-lg shadow-sm">
                        <Utensils className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-stone-900 tracking-tight hidden sm:block italic">GF Bakes</span>
                </div>

                <div className="flex items-center gap-1 sm:gap-4 flex-1 justify-end">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className="text-stone-600 hover:text-stone-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-lg hover:bg-stone-50 transition-all cursor-pointer whitespace-nowrap"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};
