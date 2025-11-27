"use client";

import { IconCategory, IconItem } from "@/lib/iconData";
import Icon from "@/components/Icon";
import { useState, useEffect, memo, useCallback } from "react";
import iconsDataRaw from '@/lib/icons.json';

// Ensure iconsData is always an array
const iconsData: any[] = Array.isArray(iconsDataRaw) ? iconsDataRaw : [];

// Create a map for faster lookups
const iconsMap = new Map(
  iconsData.map((icon: any) => [icon.name, icon])
);


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

    try {
      // Get icon data from the map
      const iconData = iconsMap.get(icon.name);
      if (!iconData) {
        console.error('Icon not found:', icon.name);
        return;
      }

      // Get the appropriate SVG (outline or solid)
      const isFill = iconSettings.variant === 'fill';
      const svgContent = isFill ? iconData.solid : iconData.outline;
      if (!svgContent) {
        console.error('SVG content not found for:', icon.name);
        return;
      }

      // Parse and modify SVG with current settings
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
      const svgElement = svgDoc.querySelector('svg');

      if (!svgElement) {
        console.error('Failed to parse SVG');
        return;
      }

      // Apply current settings
      svgElement.setAttribute('width', iconSettings.size.toString());
      svgElement.setAttribute('height', iconSettings.size.toString());

      if (isFill) {
        // Fill mode logic
        svgElement.querySelectorAll('path, circle, rect, polygon, ellipse, line, polyline').forEach(el => {
          const originalFill = el.getAttribute('fill');
          const originalStroke = el.getAttribute('stroke');

          if (originalFill && originalFill !== 'none') {
            el.setAttribute('fill', iconSettings.color);
          }

          if (originalStroke && originalStroke.toLowerCase() !== '#fff' && originalStroke.toLowerCase() !== '#ffffff' && originalStroke.toLowerCase() !== 'white') {
            el.setAttribute('stroke', iconSettings.color);
          }
        });
      } else {
        // Stroke mode logic
        svgElement.setAttribute('stroke', iconSettings.color);
        svgElement.setAttribute('stroke-width', iconSettings.strokeWidth.toString());
        svgElement.querySelectorAll('path, circle, rect, polygon, ellipse, line, polyline').forEach(el => {
          const originalStroke = el.getAttribute('stroke');

          if (originalStroke) {
            const strokeLower = originalStroke.toLowerCase();
            if (strokeLower === '#fff' || strokeLower === '#ffffff' || strokeLower === 'white') {
              el.removeAttribute('fill');
              el.removeAttribute('stroke');
              el.removeAttribute('stroke-width');
              return;
            }
          }

          el.removeAttribute('fill');
          el.setAttribute('fill', 'none');
          el.setAttribute('stroke', iconSettings.color);
          el.setAttribute('stroke-width', iconSettings.strokeWidth.toString());
        });
      }

      // Serialize the modified SVG
      const modifiedSvgText = new XMLSerializer().serializeToString(svgElement);

      // Copy to clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(modifiedSvgText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = modifiedSvgText;
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

  // Check if there are no icons to display
  const totalIcons = categories.reduce((acc, cat) => acc + cat.icons.length, 0);

  return (
    <div className="flex-1">
      <div className="md:px-8 md:pb-0 md:pt-8 px-4 pt-4 pb-16">
        {/* No Results Found */}
        {totalIcons === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Icon name="search" category="basic" size={48} color="currentColor" className="text-color-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-color-gray-900 dark:text-color-white mb-2">
              No icons found
            </h3>
            <p className="text-color-gray-600 dark:text-color-gray-400 mb-6 max-w-md">
              We couldn&apos;t find any icons matching your search. Try a different keyword or request a new icon.
            </p>
            <a
              href="https://github.com/unizap-git/uniline/issues/new?title=Icon%20Request:%20&labels=icon-request&body=**Icon%20Name:**%0A%0A**Description:**%0A%0A**Similar%20Icons:**%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-color-primary text-color-white font-semibold rounded-lg hover:bg-color-primary/90 transition-colors no-underline"
            >
              <Icon name="github-one" fill category="brands" size={20} color="currentColor" />
              Request an Icon
            </a>
          </div>
        )}

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
                    <div onClick={() => onIconClick(icon, iconSettings.variant === "fill")} className="w-full h-full flex items-center justify-center overflow-hidden">
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
                  <span className="select-all mt-2 block text-xs text-color-gray-600 dark:text-color-gray-300 text-center line-clamp-2">
                      uni-{icon.name}
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
