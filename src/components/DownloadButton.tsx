import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';
import { Recipe } from '../types';
import { motion } from 'motion/react';

interface DownloadButtonProps {
    category: 'bread' | 'cake' | 'frosting';
    recipes: Recipe[];
    brandColor: string;
}

export function DownloadButton({ category, recipes, brandColor }: DownloadButtonProps) {
    const handleDownload = () => {
        const doc = new jsPDF();
        const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1) + 's';

        // Title Page
        doc.setFontSize(24);
        doc.setTextColor(brandColor);
        doc.text(`Healthy ${categoryTitle} Recipes`, 105, 40, { align: 'center' });

        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text('Gluten-Free & Delicious', 105, 50, { align: 'center' });

        let yOffset = 70;

        recipes.forEach((recipe, index) => {
            // Check if we need a new page
            if (yOffset > 250) {
                doc.addPage();
                yOffset = 20;
            }

            // Recipe Title
            doc.setFontSize(18);
            doc.setTextColor(brandColor);
            doc.text(`${index + 1}. ${recipe.title}`, 20, yOffset);
            yOffset += 10;

            // Ingredients
            doc.setFontSize(12);
            doc.setTextColor(50, 50, 50);
            doc.setFont('helvetica', 'bold');
            doc.text('Ingredients:', 20, yOffset);
            yOffset += 7;

            doc.setFont('helvetica', 'normal');
            recipe.ingredients.forEach(ing => {
                if (yOffset > 280) { doc.addPage(); yOffset = 20; }
                doc.text(`• ${ing}`, 25, yOffset);
                yOffset += 6;
            });
            yOffset += 4;

            // Instructions
            if (yOffset > 270) { doc.addPage(); yOffset = 20; }
            doc.setFont('helvetica', 'bold');
            doc.text('Instructions:', 20, yOffset);
            yOffset += 7;

            doc.setFont('helvetica', 'normal');
            recipe.instructions.forEach((ins, i) => {
                if (yOffset > 280) { doc.addPage(); yOffset = 20; }
                const currentText = `${i + 1}. ${ins}`;
                const splitText = doc.splitTextToSize(currentText, 170);
                doc.text(splitText, 25, yOffset);
                yOffset += (splitText.length * 6);
            });
            yOffset += 4;

            // Tips if any
            if (recipe.tips && recipe.tips.length > 0) {
                if (yOffset > 270) { doc.addPage(); yOffset = 20; }
                doc.setFont('helvetica', 'bold');
                doc.text('Tips:', 20, yOffset);
                yOffset += 7;

                doc.setFont('helvetica', 'normal');
                recipe.tips.forEach(tip => {
                    if (yOffset > 280) { doc.addPage(); yOffset = 20; }
                    const splitTip = doc.splitTextToSize(`* ${tip}`, 170);
                    doc.text(splitTip, 25, yOffset);
                    yOffset += (splitTip.length * 6);
                });
            }

            yOffset += 15; // Space between recipes
        });

        doc.save(`healthy-${category}-recipes.pdf`);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            style={{ backgroundColor: brandColor }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        >
            <Download size={20} />
            <span>Download {category.charAt(0).toUpperCase() + category.slice(1)} Recipes (PDF)</span>
        </motion.button>
    );
}
