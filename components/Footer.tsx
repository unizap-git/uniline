'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-4 border-t border-color-gray-200 dark:border-color-gray-800 bg-color-white dark:bg-color-gray-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="flex flex-col items-center md:items-start gap-2">
            <span className='text-sm font-medium text-color-gray-600 dark:text-color-gray-400'>Made with love by</span>
            <Link className='text-sm text-color-gray-500 dark:text-color-gray-400 hover:text-color-blue-500 dark:hover:text-color-blue-400 no-underline transition-color' href="https://unizap.ai" target='_blank'>Unizap Team</Link>
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-medium text-color-gray-600 dark:text-color-gray-400">Missing an icon?</p>
            <a href="https://github.com/unizap-git/uniline/issues/new?title=Icon%20Request:%20&labels=icon-request&body=**Icon%20Name:**%0A%0A**Description:**%0A%0A**Use%20Case:**%0A%0A**Similar%20Icons:**%0A" target="_blank" rel="noopener noreferrer" className="text-sm text-color-gray-500 dark:text-color-gray-400 hover:text-color-blue-500 dark:hover:text-color-blue-400 no-underline transition-color">
              Request an Icon
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm font-medium text-color-gray-600 dark:text-color-gray-400">Other open source packages</p>
            <div className="flex items-center gap-4">
              <a href="https://unicss-docs.onrender.com" target="_blank" rel="noopener noreferrer" className="text-sm text-color-gray-500 dark:text-color-gray-400 hover:text-color-blue-500 dark:hover:text-color-blue-400 no-underline transition-color">
                Unicss
              </a>
              <a href="https://uniui-docs.onrender.com" target="_blank" rel="noopener noreferrer" className="text-sm text-color-gray-500 dark:text-color-gray-400 hover:text-color-blue-500 dark:hover:text-color-blue-400 no-underline transition-color">
                Uniui
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
