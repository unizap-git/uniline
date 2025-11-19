"use client";

import { IconCategory, IconItem } from "@/lib/iconData";
import Icon from "@/components/Icon";
import { useState, useEffect } from "react";


interface IconSettings {
  size: number;
  color: string;
  strokeWidth: number;
  variant: 'line' | 'fill';
}

interface IconGridProps {
  categories: IconCategory[];
  onIconClick: (icon: IconItem, isFill: boolean) => void;
  onCategoryVisible: (categoryId: string) => void;
  iconSettings: IconSettings;
}

export default function IconGrid({
  categories,
  onIconClick,
  onCategoryVisible,
  iconSettings,
}: IconGridProps) {
  const [copiedIconName, setCopiedIconName] = useState<string | null>(null);
  const [copiedJSXName, setCopiedJSXName] = useState<string | null>(null);

  // Convert kebab-case to PascalCase
  const getComponentName = (iconName: string): string => {
    return iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  };

  const copySVGToClipboard = async (icon: IconItem, e: React.MouseEvent) => {
    e.stopPropagation();

    const folderName = iconSettings.variant === 'fill' ? 'solid' : 'outline';
    const iconSrc = `/icons/${folderName}/${icon.category}/${icon.name}.svg`;

    try {
      const response = await fetch(iconSrc);
      const svgText = await response.text();

      // Check if clipboard API is available
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(svgText);
      } else {
        // Fallback for browsers without clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = svgText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      // Show "Copied!" feedback
      setCopiedIconName(icon.name);
      setTimeout(() => setCopiedIconName(null), 2000);
    } catch (err) {
      console.error('Failed to copy SVG:', err);
    }
  };

  const copyJSXToClipboard = async (icon: IconItem, e: React.MouseEvent) => {
    e.stopPropagation();

    const componentName = getComponentName(icon.name);
    const isFill = iconSettings.variant === 'fill';

    const jsxCode = `import { ${componentName} } from '@unizap/uniline';

<${componentName}
  size={${iconSettings.size}}${
      !isFill ? `
  strokeWidth={${iconSettings.strokeWidth}}` : ""
    }
  color="${iconSettings.color}"${
      isFill ? `
  fill={true}` : ""
    }
/>`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(jsxCode);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = jsxCode;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopiedJSXName(icon.name);
      setTimeout(() => setCopiedJSXName(null), 2000);
    } catch (err) {
      console.error('Failed to copy JSX:', err);
    }
  };

  // Set up intersection observer to track visible categories
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onCategoryVisible(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all category sections
    const sections = document.querySelectorAll("[data-category]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [categories, onCategoryVisible]);

  return (
    <div className="flex-1">
      <div className="md:px-8 md:pb-0 md:pt-8 px-4 pt-4 pb-16">
        {/* Icon Categories */}
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            data-category={category.id}
            className="mb-12 scroll-mt-8"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-color-gray-900 dark:text-color-white mb-6">
              {category.name}
            </h3>

            <div className="grid grid-columns-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
              {category.icons.map((icon) => (
                <div
                  key={icon.name}
                 
                  className="group"
                >
                  {/* Icon Display */}
                  <div className="cursor-pointer flex relative flex-col items-center justify-center p-4 aspect-square rounded-xl border border-color-gray-200 dark:border-color-gray-600 transition-all">
                    <div onClick={() => onIconClick(icon, iconSettings.variant === "fill")} className="w-full h-full flex items-center justify-center">
                      <Icon
                        name={icon.name}
                        category={icon.category}
                        size={iconSettings.size}
                        strokeWidth={iconSettings.strokeWidth}
                        color={iconSettings.color}
                        fill={iconSettings.variant === "fill"}
                        className="max-w-full max-h-full group-hover:scale-80 transition-all duration-300"
                      />
                    </div>
                     {/* Hover Buttons */}
                    <div className="absolute z-10 bg-color-white dark:bg-color-gray-900 opacity-0 group-hover:opacity-100 inset-0 p-1 flex flex-col transition-all duration-300 border-2 border-color-primary">
                      <span className="size-3 rounded-full border-2 absolute -left-1.5 -top-1.5 bg-color-white dark:bg-color-gray-900 border-color-primary"></span>
                      <span className="size-3 rounded-full border-2 absolute -right-1.5 -top-1.5 bg-color-white dark:bg-color-gray-900 border-color-primary"></span>
                      <span className="size-3 rounded-full border-2 absolute -left-1.5 -bottom-1.5 bg-color-white dark:bg-color-gray-900 border-color-primary"></span>
                      <span className="size-3 rounded-full border-2 absolute -right-1.5 -bottom-1.5 bg-color-white dark:bg-color-gray-900 border-color-primary"></span>
                     <div className="flex flex-1 flex-col justify-center space-y-1 *:rounded-md">
                       <button
                        onClick={(e) => copySVGToClipboard(icon, e)}
                        className="flex-1 py-1.5 cursor-pointer bg-color-gray-100 dark:bg-color-gray-800 dark:text-color-gray-200 dark:hover:bg-color-primary text-color-blue-950 text-sm font-semibold hover:bg-color-primary hover:text-color-white transition-all"
                      >
                        {copiedIconName === icon.name ? 'Copied!' : 'Copy SVG'}
                      </button>
                      <button
                        onClick={(e) => copyJSXToClipboard(icon, e)}
                        className="flex-1 py-1.5 cursor-pointer bg-color-gray-100 dark:bg-color-gray-800 dark:text-color-gray-200 dark:hover:bg-color-primary text-color-blue-950 text-sm font-semibold hover:bg-color-primary hover:text-color-white transition-all duration-300"
                      >
                        {copiedJSXName === icon.name ? 'Copied!' : 'Copy JSX'}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onIconClick(icon, iconSettings.variant === "fill");
                        }}
                        className="flex-1 py-1.5 cursor-pointer bg-color-gray-100 dark:bg-color-gray-800 dark:text-color-gray-200 dark:hover:bg-color-primary text-color-blue-950 text-sm font-semibold hover:bg-color-primary hover:text-color-white transition-all duration-300"
                      >
                        View Details
                      </button>
                     </div>
                    </div>
                  </div>
                  <span className="mt-2 block text-xs text-color-gray-600 dark:text-color-gray-300 text-center line-clamp-2">
                      {icon.name}
                  </span>

                 
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
