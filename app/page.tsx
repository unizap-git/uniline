'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import CommonHeader from '@/components/CommonHeader';
import Footer from '@/components/Footer';
import { useTheme } from '../lib/themeContext';
import { iconCategories } from '../lib/iconData';

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState('#374151');
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [size, setSize] = useState(24);
  const [isFill, setIsFill] = useState(false);

  // Update color based on theme
  useEffect(() => {
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setColor(isDark ? '#ffffff' : '#374151');
  }, [theme]);

  // Get total icon count
  const totalIcons = iconCategories.reduce((acc, cat) => acc + cat.icons.length, 0);

  // Sample icons for the floating background
  const floatingIcons = [
    { name: 'heart', category: 'system', x: 0, y: 90 },
    { name: 'star', category: 'system', x: 0, y: 80 },
    { name: 'home-2', category: 'media', x: 0, y: 70 },
    { name: 'user', category: 'user', x: 0, y: 60 },
    { name: 'bell', category: 'system', x: 0, y: 50 },
    { name: 'calendar', category: 'system', x: 0, y: 40 },
    { name: 'camera', category: 'media', x: 8, y: 90 },
    { name: 'mail-box', category: 'system', x: 8, y: 80 },
    { name: 'search', category: 'system', x: 8, y: 70 },
    { name: 'cog-6-tooth', category: 'system', x: 8, y: 60 },
    { name: 'lock', category: 'system', x: 16, y: 90 },
    { name: 'key', category: 'others', x: 16, y: 80 },
    { name: 'cloud', category: 'weather', x: 24, y: 90 },
    { name: 'folder', category: 'files-folders', x: 97, y: 90 },
    { name: 'light-bulb', category: 'others', x: 97, y: 80 },
    { name: 'music-alt', category: 'media', x: 97, y: 70 },
    { name: 'phone', category: 'system', x: 97, y: 60 },
    { name: 'gift', category: 'media', x: 97, y: 50 },
    { name: 'globe-alt', category: 'media', x: 97, y: 40 },
    { name: 'paper-airplane', category: 'communication', x: 89, y: 90 },
    { name: 'printer', category: 'system', x: 89, y: 80 },
    { name: 'pencil', category: 'editor', x: 89, y: 70 },
    { name: 'presentation-chart-bar', category: 'business', x: 89, y: 60 },
    { name: 'academic-cap', category: 'media', x: 81, y: 90 },
    { name: 'adjustments-horizontal', category: 'system', x: 81, y: 80 },
    { name: 'star', category: 'system', x: 73, y: 90 },
  ];

  // Sample icons for the grid preview
  const previewIcons = [
    { name: 'heart', category: 'system' },
    { name: 'building-office-2', category: 'business' },
    { name: 'pencil', category: 'editor' },
    { name: 'presentation-chart-bar', category: 'business' },
    { name: 'academic-cap', category: 'media' },
    { name: 'adjustments-horizontal', category: 'system' },
    { name: 'star', category: 'system' },
    { name: 'clipboard-document', category: 'business' },
    { name: 'bell', category: 'system' },
    { name: 'apple', category: 'brands' },
    { name: 'npm', category: 'brands' },
    { name: 'eye', category: 'system' },
    { name: 'clock', category: 'business' },
    { name: 'cube', category: 'system' },
    { name: 'bookmark', category: 'system' },
    { name: 'calendar', category: 'system' },
    { name: 'chart-bar', category: 'business' },
    { name: 'chat-bubble-left', category: 'communication' },
    { name: 'cloud', category: 'weather' },
    { name: 'chat-bubble-left-ellipsis', category: 'communication' },
    { name: 'cog-6-tooth', category: 'system' },
    { name: 'currency-dollar', category: 'currency' },
    { name: 'document', category: 'business' },
    { name: 'envelope', category: 'system' },
    { name: 'face-smile', category: 'system' },
    { name: 'fire', category: 'system' },
    { name: 'gift', category: 'media' },
    { name: 'globe-alt', category: 'media' },
    { name: 'hand-thumb-up', category: 'media' },
    { name: 'bug-ant', category: 'development' },
    { name: 'home-2', category: 'media' },
    { name: 'identification', category: 'system' },
    { name: 'key', category: 'others' },
    { name: 'light-bulb', category: 'others' },
    { name: 'credit-card', category: 'e-commerce' },
    { name: 'lock-closed', category: 'others' },
    { name: 'magnifying-glass', category: 'editor' },
    { name: 'map-pin-2', category: 'media' },
    { name: 'microphone', category: 'media' },
    { name: 'moon', category: 'weather' },
    { name: 'musical-note', category: 'media' },
    { name: 'paper-airplane', category: 'communication' },
    { name: 'phone', category: 'system' },
    { name: 'photo', category: 'media' },
    { name: 'play', category: 'media' },
    { name: 'paint-brush', category: 'editor' },
    { name: 'cookie', category: 'food' },
    { name: 'printer', category: 'system' },
    { name: 'puzzle-piece', category: 'development' }
  ];

  return (
    <div className="min-h-screen bg-color-white dark:bg-color-gray-950">
      <CommonHeader />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 overflow-hidden min-h-dvh max-w-7xl mx-auto px-4 sm:px-0 lg:px-8">
        {/* Floating Icons Background */}
        <div className="hidden md:block absolute inset-4 sm:inset-0 lg:inset-8 pointer-events-none text-color-gray-400 dark:text-color-gray-500">
          {floatingIcons.map((icon, index) => (
            <div
              key={index}
              className="absolute"
              style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
            >
              <Icon name={icon.name} category={icon.category} size={32} color="currentColor" fill={index % 3 === 1} />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl sm:text-6xl font-bold text-color-gray-900 dark:text-color-white mb-6">
            <span className="text-color-gray-900 dark:text-color-white">Beautiful </span>
            <span className="text-color-primary">icons</span>
            <span className="text-color-gray-900 dark:text-color-white"> elevate</span>
            <br />
            <span className="text-color-gray-900 dark:text-color-white">every </span>
            <span className="text-color-secondary">designs</span>
          </h1>

          <p className="text-lg text-color-gray-700 dark:text-color-gray-400 mb-8 max-w-2xl mx-auto">
           A clean, consistent icon set with {totalIcons}+ icons that helps you save time and effort.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/icons"
              className="px-6 py-3 bg-color-primary text-color-white font-semibold rounded-lg hover:bg-color-primary/90 transition-colors no-underline"
            >
              View All Icons
            </Link>
            <Link
              href="/get-started"
              className="px-6 py-3 border border-color-gray-300 dark:border-color-gray-600 text-color-gray-700 dark:text-color-gray-300 font-semibold rounded-lg hover:bg-color-gray-100 dark:hover:bg-color-gray-800 transition-colors no-underline"
            >
              Get Started
            </Link>
          </div>

          {/* Available For */}
          <div className="mt-12">
            <p className="text-sm text-color-gray-500 dark:text-color-gray-400 mb-4">Available For:</p>
            <div className="dark:bg-color-gray-800 dark:border-color-gray-700 dark:divide-color-gray-600 bg-color-white border border-color-gray-100 rounded-full divide-x-1 divide-color-gray-300 shadow-md w-fit mx-auto px-5 py-2.5 flex items-center justify-center gap-5 flex-wrap text-color-gray-700 dark:text-color-gray-100">
              <span className="pr-4" title="HTML">
                <Icon
                  name="html"
                  category="brands"
                  fill
                  color='#e5532c'
                  
                />
              </span>
              <span className="pr-4" title="React">
                <Icon
                  name="react"
                  category="brands"
                   color='#18d1ff'
                />
              </span>
              <span className="pr-4" title="Next">
                 <Icon
                  name="next-js"
                  category="brands"
                  fill
                   
                />
              </span>
              <span className="text-2xl" title="Angular">
                <Icon
                  name="angular-js"
                  category="brands"
                  fill
                   color='#e3383d'
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Style as you please Section */}
      <section className="md:py-20 py-10 bg-color-gray-50 dark:bg-color-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-8">
          <div className="grid lg:grid-columns-5 md:gap-12 gap-8 items-center">
            {/* Left - Controls */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-color-gray-900 dark:text-color-white">Style as you please</h3>
              </div>
              <p className="text-sm text-color-gray-600 dark:text-color-gray-400 mb-6">
                Uniline has a lot of customization options to match the icons with your UI.
              </p>

              {/* Color */}
              <div className="mb-4 flex justify-between items-center">
                <label className="text-sm font-medium text-color-gray-700 dark:text-color-gray-300 mb-2 block">Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer apearance-none"
                  />                </div>
              </div>

              {/* Stroke Width */}
              <div className="mb-4">
                <div className='flex items-center justify-between'>
                <label className="text-sm font-medium text-color-gray-700 dark:text-color-gray-300 mb-2 block">Stroke width</label>
                <span className="text-sm text-color-gray-500">{strokeWidth}px</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.5"
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(parseFloat(e.target.value))}
                  className="w-full accent-color-primary"
                />
                
              </div>

              {/* Size */}
              <div className="mb-4">
                <div className='flex items-center justify-between'>
                  <label className="text-sm font-medium text-color-gray-700 dark:text-color-gray-300 mb-2 block">Size</label>
                <span className="text-sm text-color-gray-500">{size}px</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="48"
                  step="4"
                  value={size}
                  onChange={(e) => setSize(parseInt(e.target.value))}
                  className="w-full accent-color-primary"
                />
                
              </div>

              {/* Fill Toggle */}
              <div className='flex justify-between items-center'>
                <label className="text-sm font-medium text-color-gray-700 dark:text-color-gray-300 mb-2 block">Fill Icon</label>
                <button
                  onClick={() => setIsFill(!isFill)}
                  className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                    isFill ? 'bg-color-primary' : 'bg-color-gray-300 dark:bg-color-gray-600'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-color-white rounded-full transition-transform ${
                      isFill ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Right - Icon Grid Preview */}
            <div className="bg-color-white dark:bg-color-gray-800 rounded-2xl p-6 shadow-lg md:col-span-3">
              <div className="grid grid-columns-7 gap-3">
                {previewIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-2 rounded-lg hover:bg-color-gray-100 dark:hover:bg-color-gray-700 transition-colors"
                  >
                    <Icon
                      name={icon.name}
                      category={icon.category}
                      size={size}
                      strokeWidth={strokeWidth}
                      color={color}
                      fill={isFill}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="md:py-20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-color-gray-900 dark:text-color-white text-center mb-12">
            Browse by Category
          </h2>
          <div className="grid sm:grid-columns-2 md:grid-columns-3 lg:grid-columns-4 gap-4">
            {iconCategories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="flex items-center gap-3 p-4 bg-color-white dark:bg-color-gray-800 rounded-xl border border-color-gray-200 dark:border-color-gray-700 hover:border-color-primary dark:hover:border-color-primary transition-colors no-underline"
              >
                <div className="flex-shrink-0">
                  <Icon
                    name={category.icons[0]?.name || 'folder'}
                    category={category.id}
                    size={32}
                    color="currentColor"
                    className='text-color-gray-800 dark:text-color-gray-100'
                  />
                </div>
                <div>
                  <h3 className="font-medium text-color-gray-900 dark:text-color-white capitalize">
                    {category.name}
                  </h3>
                  <p className="text-sm text-color-gray-500 dark:text-color-gray-400 mt-1">
                    {category.icons.length} icons
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
