'use client';

import { useState, useMemo, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import IconGrid from '@/components/IconGrid';
import IconDialog from '@/components/IconDialog';
import CommonHeader from '@/components/CommonHeader';
import FloatingCategoryButton from '@/components/FloatingCategoryButton';
import ControlBar from '@/components/conntrolBar';
import Icon from '@/components/Icon';
import { iconCategories } from '@/lib/iconData';
import { IconSettings, IconItem } from '@/lib/types';
import { useTheme } from '@/lib/themeContext';

export default function AllIcons() {
  const { theme } = useTheme();
  const [selectedIcon, setSelectedIcon] = useState<IconItem | null>(null);
  const [isFillVariant, setIsFillVariant] = useState(false);
  const [activeCategory, setActiveCategory] = useState(iconCategories[0]?.id || 'system');
  const [searchQuery, setSearchQuery] = useState('');
  const [showControlBar, setShowControlBar] = useState(false);

  // Initialize icon settings from localStorage
  const [iconSettings, setIconSettings] = useState<IconSettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('iconSettings');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved icon settings:', e);
        }
      }
    }
    return {
      size: 32,
      color: '#374151',
      strokeWidth: 1.5,
      variant: 'line'
    };
  });

  // Save icon settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('iconSettings', JSON.stringify(iconSettings));
  }, [iconSettings]);

  // Update icon color based on theme (only if using default theme colors)
  useEffect(() => {
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const newColor = isDark ? '#ffffff' : '#374151';

    // Only update color if it's currently one of the default theme colors
    // This preserves custom user-selected colors
    setIconSettings(prev => {
      const isDefaultColor = prev.color === '#ffffff' || prev.color === '#374151';
      if (isDefaultColor) {
        return { ...prev, color: newColor };
      }
      return prev;
    });
  }, [theme]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return iconCategories;

    return iconCategories
      .map((category) => ({
        ...category,
        icons: category.icons.filter((icon) =>
          icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          icon.keywords.some((keyword) =>
            keyword.toLowerCase().includes(searchQuery.toLowerCase())
          )
        ),
      }))
      .filter((category) => category.icons.length > 0);
  }, [searchQuery]);

  useEffect(() => {
    if (filteredCategories.length > 0 && !filteredCategories.find(cat => cat.id === activeCategory)) {
      setActiveCategory(filteredCategories[0].id);
    }
  }, [filteredCategories, activeCategory]);

  const handleIconClick = (icon: IconItem, isFill: boolean) => {
    setSelectedIcon(icon);
    setIsFillVariant(isFill);
  };

  const handleCloseDialog = () => {
    setSelectedIcon(null);
  };

  const handleIconSettingsChange = (newSettings: IconSettings) => {
    setIconSettings(newSettings);
  };

  const handleCategoryVisible = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-color-white dark:bg-color-gray-950">
      <CommonHeader />

      <div className="flex flex-1 pt-16">
        <div className="hidden md:block">
          <Sidebar activeCategory={activeCategory} />
        </div>

        <main className="flex-1">
          {/* Search and Controls Bar */}
          <div className="md:sticky z-99 md:top-16 fixed bottom-0 inset-x-0 px-4 md:px-8 bg-color-white dark:bg-color-gray-950 py-4">
              <div className="flex gap-4 items-start">
                {/* Search Bar */}
                <div className="relative flex-1 w-full pr-16 md:pr-0">
                  <Icon
                    name="magnifying-glass"
                    category="editor"
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-color-gray-400"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search icons..."
                    className="w-full pl-10 pr-10 md:py-2.5 py-3 bg-color-gray-100 dark:bg-color-gray-800 rounded-full border border-color-gray-200 dark:border-color-gray-700 focus:outline-none focus:ring-2 ring-color-primary dark:text-color-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-color-gray-400 hover:text-color-gray-600 dark:hover:text-color-gray-300 bg-color-transparent cursor-pointer"
                    >
                      <Icon name="x-mark" category="system" size={18} />
                    </button>
                  )}
                </div>

                {/* Settings Dropdown */}
                                <div className="md:relative fixed top-2 right-[72px] md:top-auto md:right-auto">
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
                                    <>
                                      <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setShowControlBar(false)}
                                      />
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
                                          isFill={iconSettings.variant === 'fill'}
                                          className="flex flex-col gap-4"
                                          onFillChange={(fill) => handleIconSettingsChange({ ...iconSettings, variant: fill ? 'fill' : 'line' })}
                                          color={iconSettings.color}
                                          onColorChange={(color) => handleIconSettingsChange({ ...iconSettings, color })}
                                          size={iconSettings.size}
                                          onSizeChange={(size) => handleIconSettingsChange({ ...iconSettings, size })}
                                          strokeWidth={iconSettings.strokeWidth}
                                          onStrokeWidthChange={(strokeWidth) => handleIconSettingsChange({ ...iconSettings, strokeWidth })}
                                          showStroke={true}
                                        />
                                      </div>
                                    </>
                                  )}
                                </div>
              </div>
          </div>

          <IconGrid
            categories={filteredCategories}
            onIconClick={handleIconClick}
            onCategoryVisible={handleCategoryVisible}
            iconSettings={iconSettings}
          />
        </main>
      </div>

      {/* Floating Category Button (Mobile Only) */}
      <FloatingCategoryButton />

      {selectedIcon && (
        <IconDialog
          icon={selectedIcon}
          isFill={isFillVariant}
          onClose={handleCloseDialog}
          iconSettings={iconSettings}
          onIconSettingsChange={handleIconSettingsChange}
        />
      )}
    </div>
  );
}
