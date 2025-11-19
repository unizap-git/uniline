'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-color-gray-200 dark:border-color-gray-800 bg-color-white dark:bg-color-gray-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-color-gray-500 dark:text-color-gray-400">
            Made with love by <Link className='no-underline text-color-blue-500 hover:underline' href="https://unizap.ai" target='_blank'>Unizap</Link> Team
          </p>
          <div className="flex items-center gap-6">
            <Link href="/get-started" className="text-sm text-color-gray-500 dark:text-color-gray-400 hover:text-color-gray-700 dark:hover:text-color-gray-300 no-underline">
              Documentation
            </Link>
            <Link href="/icons" className="text-sm text-color-gray-500 dark:text-color-gray-400 hover:text-color-gray-700 dark:hover:text-color-gray-300 no-underline">
              Icons
            </Link>
            <a href="https://github.com" className="text-sm text-color-gray-500 dark:text-color-gray-400 hover:text-color-gray-700 dark:hover:text-color-gray-300 no-underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
