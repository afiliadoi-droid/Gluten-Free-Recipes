import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    brandColor: string;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    brandColor
}) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, start + maxVisiblePages - 1);

            if (end === totalPages) {
                start = Math.max(1, end - maxVisiblePages + 1);
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        }
        return pages;
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-12 pb-8">
            <div className="flex items-center gap-2">
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full border border-stone-200 bg-white text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 transition-colors shadow-sm"
                    aria-label="Previous page"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5">
                    {getPageNumbers().map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-200 ${currentPage === page
                                    ? 'text-white shadow-md scale-110'
                                    : 'text-stone-500 hover:text-stone-700 hover:bg-stone-100'
                                }`}
                            style={{
                                backgroundColor: currentPage === page ? brandColor : 'transparent'
                            }}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full border border-stone-200 bg-white text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 transition-colors shadow-sm"
                    aria-label="Next page"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <p className="text-xs text-stone-400 font-medium">
                Page {currentPage} of {totalPages}
            </p>
        </div>
    );
};
