import React from 'react';
import { Recipe } from '../types';
import { motion } from 'motion/react';
import { ChefHat, List, Lightbulb } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const accentColor =
    recipe.category === 'bread' ? 'text-[var(--color-brand-green)]' :
      recipe.category === 'cake' ? 'text-[var(--color-brand-orange)]' :
        recipe.category === 'frosting' ? 'text-[var(--color-brand-red)]' :
          recipe.category === 'dessert' ? 'text-[#D81B60]' :
            'text-[#006064]';

  const bgAccent =
    recipe.category === 'bread' ? 'bg-[#76B800]/10' :
      recipe.category === 'cake' ? 'bg-[#FF7924]/10' :
        recipe.category === 'frosting' ? 'bg-[#811B18]/10' :
          recipe.category === 'dessert' ? 'bg-[#D81B60]/10' :
            'bg-[#006064]/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      <div className={`p-6 ${bgAccent}`}>
        <h3 className={`text-xl font-bold ${accentColor} mb-2`}>{recipe.title}</h3>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider opacity-60">
          <span className="bg-white/50 px-2 py-1 rounded-md">{recipe.category}</span>
          <span>•</span>
          <span>Recipe #{recipe.id.split('-')[1]}</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Ingredients */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-stone-800 font-semibold">
            <List className="w-4 h-4" />
            <h4>Ingredients</h4>
          </div>
          <ul className="space-y-2 text-sm text-stone-600">
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-stone-300 shrink-0" />
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-stone-800 font-semibold">
            <ChefHat className="w-4 h-4" />
            <h4>Directions</h4>
          </div>
          <ol className="space-y-4 text-sm text-stone-600">
            {recipe.instructions.map((step, idx) => (
              <li key={idx} className="flex gap-3">
                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold shrink-0 ${bgAccent} ${accentColor}`}>
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        {recipe.tips && recipe.tips.length > 0 && (
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
            <div className="flex items-center gap-2 mb-2 text-stone-800 font-semibold text-sm">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              <h4>Tips</h4>
            </div>
            <ul className="space-y-2 text-xs text-stone-500">
              {recipe.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};
