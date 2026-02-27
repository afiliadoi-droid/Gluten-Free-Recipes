/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TabSelector } from './components/TabSelector';
import { RecipeCard } from './components/RecipeCard';
import { Pagination } from './components/Pagination';
import { recipes } from './data/recipes';
import { motion, AnimatePresence } from 'motion/react';
import { DownloadButton } from './components/DownloadButton';
import { Navbar } from './components/Navbar';

const ITEMS_PER_PAGE = 10;

export default function App() {
  const [activeTab, setActiveTab] = useState<'bread' | 'cake' | 'frosting' | 'dessert' | 'essential'>('bread');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRecipes = recipes.filter(recipe => recipe.category === activeTab);
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRecipes = filteredRecipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const brandColor =
    activeTab === 'bread' ? '#76B800' :
      activeTab === 'cake' ? '#FF7924' :
        activeTab === 'frosting' ? '#811B18' :
          activeTab === 'dessert' ? '#D81B60' : '#006064';

  return (
    <div className="min-h-screen bg-[#f5f5f4] pb-20">
      <Navbar onNavigate={setActiveTab} />

      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-stone-900 tracking-tight">
            Healthy Bread Recipe App
          </h1>
          <TabSelector activeTab={activeTab} onChange={setActiveTab} />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-stone-600 leading-relaxed text-lg">
            We believe great recipes deserve a great experience. That's why instead of a simple file,
            you'll get instant access to your very own recipe app organized, beautiful, and always in your pocket.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${currentPage}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {paginatedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredRecipes.length === 0 ? (
          <div className="text-center py-20 text-stone-400">
            <p>No recipes found in this category.</p>
          </div>
        ) : (
          <>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              brandColor={brandColor}
            />

            <div className="mt-12 flex flex-col items-center gap-6">
              <DownloadButton
                category={activeTab}
                recipes={filteredRecipes}
                brandColor={brandColor}
              />
              <p className="text-stone-500 text-sm max-w-sm text-center">
                Rather have it on paper? Hit download and print your recipes at home.
              </p>

              <div className="text-stone-400 text-sm">
                <p>Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredRecipes.length)} of {filteredRecipes.length} recipes</p>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
