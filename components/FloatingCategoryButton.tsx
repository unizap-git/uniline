'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { iconCategories } from '@/lib/iconData';
import Icon from './Icon';

export default function FloatingCategoryButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-40 size-12 bg-color-primary hover:bg-color-primary/90 text-color-white rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer"
        aria-label="View categories"
      >
        <Icon name="squares-2x2" category="system" size={24} className="text-color-white" />
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-color-black/50 z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Popup */}
          <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-color-white dark:bg-color-gray-800 rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-hidden md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-color-gray-200 dark:border-color-gray-700">
              <h2 className="text-lg font-bold text-color-gray-900 dark:text-color-white">
                Categories
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-color-gray-100 dark:hover:bg-color-gray-700 transition-colors cursor-pointer bg-color-transparent"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Categories Grid */}
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
              <div className="grid grid-columns-2 gap-3">
                {iconCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`
                      no-underline bg-color-transparent p-3 rounded-xl border-1 transition-all
                      ${pathname === `/category/${category.id}`
                        ? 'border-color-primary bg-color-primary/10'
                        : 'border-color-gray-300 dark:border-color-gray-700 hover:border-color-primary/50 hover:bg-color-gray-50 dark:hover:bg-color-gray-700'
                      }
                    `}
                  >
                    <div className="text-sm font-semibold text-color-gray-900 dark:text-color-white mb-1">
                      {category.name}
                    </div>
                    <div className="text-xs text-color-gray-500 dark:text-color-gray-400">
                      {category.icons.length} icons
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
