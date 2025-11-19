"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { iconCategories } from "@/lib/iconData";

interface SidebarProps {
  activeCategory?: string;
  onCategoryClick?: (categoryId: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  activeCategory,
  onCategoryClick,
  isOpen = true,
  onClose,
}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Calculate total icon count
  const totalIcons = iconCategories.reduce(
    (total, category) => total + category.icons.length,
    0
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && onClose && (
        <div
          className="md:hidden fixed inset-0 bg-color-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        w-64 bg-color-gray-50 dark:bg-color-gray-900 border-r border-color-gray-200 dark:border-color-gray-800 overflow-y-auto dark:scrollbar-[color-gray-600_color-gray-900]
        md:sticky md:top-[71px] md:h-[calc(100vh-71px)]
        fixed top-0 left-0 h-full z-50 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Close Button (Mobile Only) */}
        {onClose && (
          <div className="md:hidden flex items-center justify-between p-4 border-b border-color-gray-200 dark:border-color-gray-700">
            <h2 className="text-sm font-semibold text-color-gray-900 dark:text-color-white">
              Categories
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-color-gray-200 dark:hover:bg-color-gray-800 transition-colors cursor-pointer bg-color-transparent"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="p-6">
          <nav>
            {/* Quick Links */}
            <div className="mb-6">
              <h2 className="text-xs font-semibold text-color-gray-500 dark:text-color-gray-400 uppercase tracking-wider mb-3">
              Introduction
            </h2>
              <Link
                href="/get-started"
                onClick={() => onClose?.()}
                className={`w-full no-underline bg-color-transparent block text-left px-3 py-2 rounded-lg text-sm font-medium transition-color ${
                  pathname === `/get-started`
                    ? "bg-color-primary text-color-white"
                    : "text-color-gray-700 dark:text-color-gray-300 hover:bg-color-gray-200 dark:hover:bg-color-gray-800"
                }`}
              >
                Get Started
              </Link>
              <Link
                href="/icons"
                onClick={() => onClose?.()}
                className={`w-full no-underline bg-color-transparent block text-left px-3 py-2 rounded-lg text-sm font-medium transition-color ${
                  pathname === `/icons`
                    ? "bg-color-primary text-color-white"
                    : "text-color-gray-700 dark:text-color-gray-300 hover:bg-color-gray-200 dark:hover:bg-color-gray-800"
                }`}
              >
                All Icons ({totalIcons})
              </Link>
            </div>

            <h2 className="text-xs font-semibold text-color-gray-500 dark:text-color-gray-400 uppercase tracking-wider mb-3">
              Categories
            </h2>
            <ul className="space-y-1">
              {iconCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/category/${category.id}`}
                    onClick={() => onClose?.()}
                    className={`w-full no-underline bg-color-transparent block text-left px-3 py-2 rounded-lg text-sm font-medium transition-color ${
                      pathname === `/category/${category.id}`
                        ? "bg-color-primary text-color-white"
                        : "text-color-gray-700 dark:text-color-gray-300 hover:bg-color-gray-200 dark:hover:bg-color-gray-800"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="ml-2 text-xs opacity-60">
                      ({category.icons.length})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
