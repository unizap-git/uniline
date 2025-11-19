'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/lib/themeContext';
import Icon from '@/components/Icon';
import ControlBar from './conntrolBar';
import Link from 'next/link';

interface IconSettings {
  size: number;
  color: string;
  strokeWidth: number;
  variant: 'line' | 'fill';
}

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  iconSettings: IconSettings;
  onIconSettingsChange: (settings: IconSettings) => void;
}

export default function Header({ searchQuery, onSearchChange, iconSettings, onIconSettingsChange }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showControlBar, setShowControlBar] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themeOptions = [
    { value: 'light' as const, label: 'Light', iconName: 'sun', iconCategory: 'weather' },
    { value: 'dark' as const, label: 'Dark', iconName: 'moon', iconCategory: 'weather' },
    { value: 'system' as const, label: 'System', iconName: 'computer-desktop', iconCategory: 'system' },
  ];

  const currentThemeOption = themeOptions.find(opt => opt.value === theme) || themeOptions[2];

  const handleSettingsChange = (key: keyof IconSettings, value: any) => {
    onIconSettingsChange({
      ...iconSettings,
      [key]: value
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowControlBar(false);
      }
    }

    if (showControlBar) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showControlBar]);

  return (
    <header className="z-40 sticky top-0 bg-color-white md:bg-color-transparent dark:bg-color-gray-900/80 md:backdrop-blur-lg border-b border-color-gray-200 dark:border-color-gray-800">
      <div className="flex items-center justify-between md:px-5 md:py-3 px-4 py-2 gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <div className='w-32 md:w-40'>
            <Link href="/" className="flex items-center gap-2 no-underline">
            <svg viewBox="0 0 284.3 76.2">
              <path d="M38.9,55c-9.7,0-17.6-7.9-17.6-17.6v-14.6h9.6v14.6c0,4.4,3.6,8,8,8s8-3.6,8-8v-14.6h9.6v14.6c0,9.7-7.9,17.6-17.6,17.6Z" fill="#fe007a"/>
              <g>
                <g>
                  <path d="M105.2,57c-3.2,0-6.2-.6-8.7-1.9-2.5-1.2-4.5-3.1-6-5.7-1.5-2.5-2.2-6-2.2-9.6v-18.8h8.6v18.9c0,2.8.7,5.4,2.2,7,1.5,1.6,3.6,2.4,6.4,2.4s4.9-.8,6.4-2.4c1.5-1.6,2.2-4.1,2.2-7v-18.9h8.6v18.8c0,3.7-.8,7.1-2.3,9.6-1.5,2.5-3.6,4.4-6.2,5.7-2.6,1.3-5.6,1.9-8.9,1.9Z" className="fill-color-[#1a1158] dark:fill-color-white"/>
                  <path d="M155.4,57v-19.2c0-2.8-.7-5.1-2.2-6.7-1.5-1.6-3.6-2.4-6.4-2.4s-4.9.8-6.4,2.4c-1.5,1.6-2.2,3.8-2.2,6.7v19.2h-8.6v-19.1c0-3.7.8-6.8,2.3-9.3,1.5-2.5,3.6-4.4,6.2-5.7,2.6-1.3,5.6-1.9,8.9-1.9s6.2.6,8.7,1.9c2.5,1.2,4.5,3.1,6,5.7,1.5,2.5,2.2,5.7,2.2,9.3v19.1h-8.6Z" className="fill-color-[#1a1158] dark:fill-color-white"/>
                  <rect x="170.7" y="21" width="8.6" height="7.5" className="fill-color-[#1a1158] dark:fill-color-white"/>
                  <rect x="170.7" y="33.6" width="8.6" height="23.4" className="fill-color-[#1a1158] dark:fill-color-white"/>
                </g>
                <g>
                  <path d="M193.1,53h12.6v3.8h-17.3V20.9h4.7v32.1Z" className="fill-color-[#1a1158] dark:fill-color-white"/>
                  <path d="M210.8,26.1c-.6-.6-.9-1.4-.9-2.3s.3-1.6.9-2.3,1.4-.9,2.3-.9,1.6.3,2.2.9.9,1.4.9,2.3-.3,1.6-.9,2.3c-.6.6-1.3.9-2.2.9s-1.6-.3-2.3-.9ZM215.3,31.6v25.2h-4.7v-25.2h4.7Z" className="fill-color-[#1a1158] dark:fill-color-white"/>
                  <path d="M245.4,31.2c2.1,2.1,3.2,5.1,3.2,9v16.6h-4.6v-16c0-2.8-.7-5-2.1-6.5-1.4-1.5-3.3-2.2-5.8-2.2s-4.4.8-5.9,2.3c-1.5,1.5-2.2,3.8-2.2,6.7v15.6h-4.7v-28.2h4.7v4c.9-1.4,2.2-2.6,3.8-3.3,1.6-.8,3.4-1.2,5.3-1.2,3.4,0,6.2,1,8.3,3.1Z" className="fill-color-[#1a1158] dark:fill-color-white"/>
                  <path d="M281.9,44.4h-22.6c.2,2.8,1.1,5,2.9,6.5s3.8,2.3,6.3,2.3,3.7-.5,5.1-1.4c1.4-.9,2.3-2.2,2.9-3.8h5c-.8,2.7-2.3,4.9-4.5,6.6-2.3,1.7-5.1,2.6-8.5,2.6s-5.1-.6-7.2-1.8c-2.1-1.2-3.8-2.9-5-5.1-1.2-2.2-1.8-4.8-1.8-7.7s.6-5.5,1.8-7.7c1.2-2.2,2.8-3.9,4.9-5.1s4.5-1.8,7.3-1.8,5,.6,7.1,1.8c2.1,1.2,3.6,2.8,4.8,4.8,1.1,2,1.7,4.4,1.7,6.9s0,1.8-.2,2.8ZM276,36c-.8-1.3-1.9-2.3-3.2-2.9-1.4-.7-2.9-1-4.5-1-2.4,0-4.4.8-6.1,2.3-1.7,1.5-2.6,3.6-2.9,6.3h17.8c0-1.8-.4-3.3-1.2-4.6Z" className="fill-color-[#1a1158] dark:fill-color-white"/>
                </g>
              </g>
              <g>
                <path d="M11.8,74h-4V14.5c0-3.4,2.8-6.2,6.2-6.2h60.9v4H14c-1.2,0-2.2,1-2.2,2.2v59.5Z" fill="#7031fe"/>
                <path d="M62.9,69.6H2.9v-4h60c1.2,0,2.2-1,2.2-2.2V2h4v61.4c0,3.4-2.8,6.2-6.2,6.2Z" fill="#7031fe"/>
              </g>
            </svg>
            </Link>
          </div>
          <span className="dark:bg-color-gray-600 text-xs font-semibold text-color-gray-800 dark:text-color-gray-200 bg-color-gray-200 rounded px-2 py-1">v1.0.0</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 md:max-w-xl md:static fixed bottom-4 left-4 right-20">
          <div className="relative w-full">
            <Icon
              name="magnifying-glass"
              category="editor"
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-color-gray-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search icons..."
              className="w-full shadow-xl md:shadow-none bg-color-white pl-12 pr-10 dark:text-color-white md:bg-color-gray-100 dark:bg-color-gray-900 rounded-full md:h-10 h-12 border border-color-gray-200 dark:border-color-gray-600 focus:outline-none focus:ring-1 ring-color-secondary"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 bg-color-transparent cursor-pointer -translate-y-1/2 text-color-gray-400 hover:text-color-gray-600 dark:hover:text-color-gray-300"
              >
                <Icon name="x-mark" category="system" size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Settings and Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Settings Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowControlBar(!showControlBar)}
              className={`flex cursor-pointer items-center gap-2 p-2.5 rounded-full bg-color-gray-100 dark:bg-color-gray-800 hover:bg-color-gray-200 dark:hover:bg-color-gray-700 transition-color ${
                showControlBar
                  ? 'bg-color-secondary/10 border-color-secondary'
                  : 'bg-color-white dark:bg-color-gray-800'
              }`}
              title="Icon Settings"
            >
              <Icon
                name="cog-6-tooth"
                category="system"
                size={20}
                className={`transition-color ${
                  showControlBar
                    ? 'text-color-secondary dark:text-color-blue-400'
                    : 'text-color-gray-600 dark:text-color-gray-400'
                }`}
              />
            </button>

            {/* Settings Dropdown */}
            {showControlBar && (
              <div className="absolute right-0 top-12 bg-color-white dark:bg-color-gray-800 rounded-2xl shadow-2xl border border-color-gray-200 dark:border-color-gray-700 p-5 w-[250px] z-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-color-gray-900 dark:text-color-white">
                    Icon Settings
                  </h3>
                  <button
                    onClick={() => setShowControlBar(false)}
                    className="flex cursor-pointer items-center justify-center w-8 h-8 rounded-full hover:bg-color-gray-100 dark:hover:bg-color-gray-700 text-color-gray-400 hover:text-color-gray-600 dark:hover:text-color-gray-300 transition-all"
                  >
                    <Icon name="x-mark" category="system" size={16} />
                  </button>
                </div>

                <ControlBar
                  isFill={iconSettings.variant === "fill"}
                  className="flex flex-col gap-4"
                  onFillChange={(fill) => handleSettingsChange('variant', fill ? 'fill' : 'line')}
                  color={iconSettings.color}
                  onColorChange={(color) => handleSettingsChange('color', color)}
                  size={iconSettings.size}
                  onSizeChange={(size) => handleSettingsChange('size', size)}
                  strokeWidth={iconSettings.strokeWidth}
                  onStrokeWidthChange={(strokeWidth) => handleSettingsChange('strokeWidth', strokeWidth)}
                  showStroke={true}
                />
              </div>
            )}
          </div>

        {/* Theme Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            className="flex cursor-pointer items-center gap-2 p-2.5 rounded-full bg-color-gray-100 dark:bg-color-gray-800 hover:bg-color-gray-200 dark:hover:bg-color-gray-700 transition-color"
          >
            <Icon
              name={currentThemeOption.iconName}
              category={currentThemeOption.iconCategory}
              size={20}
              className="text-color-gray-700 dark:text-color-gray-300"
            />
          </button>

          {/* Theme Dropdown */}
          {showThemeMenu && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowThemeMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-color-white dark:bg-color-gray-800 rounded-lg shadow-lg border border-color-gray-200 dark:border-color-gray-700 py-1 z-20">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value);
                      setShowThemeMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-color ${
                      theme === option.value
                        ? 'bg-color-secondary/10 dark:bg-color-blue-900/20 text-color-secondary dark:text-color-blue-400'
                        : 'text-color-gray-700 bg-color-transparent cursor-pointer dark:text-color-gray-300 hover:bg-color-gray-100 dark:hover:bg-color-gray-700'
                    }`}
                  >
                    <Icon name={option.iconName} category={option.iconCategory} size={18} />
                    <span>{option.label}</span>
                    {theme === option.value && (
                      <Icon name="check" category="system" size={18} className="ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        </div>
      </div>
    </header>
  );
}
