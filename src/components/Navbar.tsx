import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, Menu, X } from 'lucide-react';

interface NavbarProps {
    onNavigate: (category: 'bread' | 'cake' | 'frosting' | 'dessert' | 'essential') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'bread', label: 'Breads' },
        { id: 'cake', label: 'Cakes' },
        { id: 'frosting', label: 'Frostings' },
        { id: 'dessert', label: 'Desserts' },
        { id: 'essential', label: 'Essential Guide' },
    ] as const;

    const handleNavigate = (id: typeof navItems[number]['id']) => {
        onNavigate(id); // App.tsx handleTabChange updates the hash
        setIsOpen(false);
    };

    return (
        <nav className="bg-white/90 backdrop-blur-md border-b border-stone-100 sticky top-0 z-[100] py-3 shadow-sm">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-4">
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsOpen(false);
                    }}
                >
                    <div className="bg-[#76B800] p-1.5 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                        <Utensils className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-stone-900 tracking-tight italic">Healthy Recipe App</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            className="text-stone-600 hover:text-stone-900 text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-xl hover:bg-stone-50 transition-all cursor-pointer whitespace-nowrap"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Trigger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-10 h-10 bg-[#76B800] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#5e9200] active:scale-95 transition-all z-[110]"
                    aria-label="Toggle Menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                <X size={20} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                            >
                                <Menu size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-stone-100"
                    >
                        <div className="px-4 py-6 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigate(item.id)}
                                    className="text-left py-4 px-6 text-stone-700 hover:text-[#A855F7] hover:bg-purple-50 rounded-2xl font-bold transition-all text-sm border border-transparent hover:border-purple-100"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
