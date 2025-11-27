import { useState, useEffect, useMemo } from 'react';
import iconsDataRaw from '@/lib/icons.json';

// Ensure iconsData is always an array
const iconsData: any[] = Array.isArray(iconsDataRaw) ? iconsDataRaw : [];

interface IconProps {
  name: string;
  category?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  fill?: boolean;
  className?: string;
}

// Create a map for faster lookups
const iconsMap = new Map(
  iconsData.map((icon: any) => [icon.name, icon])
);

export default function Icon({
  name,
  category,
  size = 32,
  strokeWidth = 1.5,
  color = 'currentColor',
  fill = false,
  className = ''
}: IconProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Only render on client side to avoid DOMParser SSR issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Get icon from map
  const iconData = iconsMap.get(name);

  // Memoize SVG modification
  const modifiedSvg = useMemo(() => {
    // Only process on client side
    if (!isMounted || !iconData) return null;

    // Get the appropriate SVG (outline or solid)
    const svgContent = fill ? iconData.solid : iconData.outline;
    if (!svgContent) return null;

    // Parse and modify SVG
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
    const svgElement = svgDoc.querySelector('svg');

    if (!svgElement) return null;

    // Set size
    svgElement.setAttribute('width', size.toString());
    svgElement.setAttribute('height', size.toString());

    // Apply color and stroke width
    if (fill) {
      // Apply colors to all elements
      svgElement.querySelectorAll('path, circle, rect, polygon, ellipse, line, polyline').forEach(el => {
        const originalFill = el.getAttribute('fill');
        const originalStroke = el.getAttribute('stroke');

        // Apply fill color if element has an existing fill value that's not "none"
        if (originalFill && originalFill !== 'none') {
          el.setAttribute('fill', color);
        }

        // Only apply stroke color if the element has a stroke
        // Don't override strokes that are meant to be white/contrast color (like "#FFF")
        if (originalStroke && originalStroke.toLowerCase() !== '#fff' && originalStroke.toLowerCase() !== '#ffffff' && originalStroke.toLowerCase() !== 'white') {
          el.setAttribute('stroke', color);
        }
      });
    } else {
      svgElement.setAttribute('stroke', color);
      svgElement.setAttribute('stroke-width', strokeWidth.toString());
      svgElement.querySelectorAll('path, circle, rect, polygon, ellipse, line, polyline').forEach(el => {
        const originalStroke = el.getAttribute('stroke');

        // If element has white stroke, remove fill to create cutout/hole
        if (originalStroke) {
          const strokeLower = originalStroke.toLowerCase();
          if (strokeLower === '#fff' || strokeLower === '#ffffff' || strokeLower === 'white') {
            el.removeAttribute('fill');
            el.removeAttribute('stroke');
            el.removeAttribute('stroke-width');
            return;
          }
        }

        // For outline mode, convert all fills to strokes
        el.removeAttribute('fill');
        el.setAttribute('fill', 'none');
        el.setAttribute('stroke', color);
        el.setAttribute('stroke-width', strokeWidth.toString());
      });
    }

    // Add className if provided
    if (className) {
      const existingClass = svgElement.getAttribute('class') || '';
      svgElement.setAttribute('class', `${existingClass} ${className}`.trim());
    }

    return new XMLSerializer().serializeToString(svgElement);
  }, [isMounted, iconData, fill, size, color, strokeWidth, className, name]);

  // Show placeholder during SSR and initial client render
  if (!isMounted || !iconData || !modifiedSvg) {
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
      >
        <div suppressHydrationWarning style={{ width: size, height: size }} className="w-8 h-8 bg-color-gray-200 dark:bg-color-gray-600 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: modifiedSvg }}
    />
  );
}
