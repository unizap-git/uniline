import { useState, useEffect } from 'react';

interface IconProps {
  name: string;
  category?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  fill?: boolean;
  className?: string;
}

export default function Icon({
  name,
  category,
  size = 32,
  strokeWidth = 1.5,
  color = 'currentColor',
  fill = false,
  className = ''
}: IconProps) {
  const [iconExists, setIconExists] = useState(true);
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const folderName = fill ? 'solid' : 'outline';
    // If category is provided, use folder structure: /icons/outline/category/name.svg
    // Otherwise, use flat structure: /icons/outline/name.svg (for backward compatibility)
    const iconSrc = category
      ? `/icons/${folderName}/${category}/${name}.svg`
      : `/icons/${folderName}/${name}.svg`;

    fetch(iconSrc)
      .then(res => {
        if (!res.ok) throw new Error('Icon not found');
        return res.text();
      })
      .then(svg => {
        setSvgContent(svg);
        setIconExists(true);
      })
      .catch(() => {
        setIconExists(false);
      });
  }, [name, category, fill]);

  if (!iconExists) {
    // Fallback placeholder
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        // style={{ width: size, height: size }}
      >
        <div suppressHydrationWarning style={{ width: size, height: size }} className="w-8 h-8 bg-color-gray-200 dark:bg-color-gray-600 rounded animate-pulse" />
      </div>
    );
  }

  if (!svgContent) {
    // Loading state
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        // style={{ width: size, height: size }}
      >
        <div suppressHydrationWarning style={{ width: size, height: size }} className="w-8 h-8 bg-color-gray-200 dark:bg-color-gray-600 rounded animate-pulse" />
      </div>
    );
  }

  // Parse and modify SVG
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = svgDoc.querySelector('svg');

  if (svgElement) {
    // Set size
    svgElement.setAttribute('width', size.toString());
    svgElement.setAttribute('height', size.toString());

    // Apply color and stroke width
    if (fill) {
      svgElement.setAttribute('fill', color);
      svgElement.querySelectorAll('path, circle, rect, polygon, ellipse').forEach(el => {
        el.setAttribute('fill', color);
      });
    } else {
      svgElement.setAttribute('stroke', color);
      svgElement.setAttribute('stroke-width', strokeWidth.toString());
      svgElement.querySelectorAll('path, circle, rect, polygon, ellipse, line, polyline').forEach(el => {
        el.setAttribute('stroke', color);
        el.setAttribute('stroke-width', strokeWidth.toString());
      });
    }

    // Add className if provided
    if (className) {
      const existingClass = svgElement.getAttribute('class') || '';
      svgElement.setAttribute('class', `${existingClass} ${className}`.trim());
    }

    const modifiedSvg = new XMLSerializer().serializeToString(svgElement);

    return (
      <div
        dangerouslySetInnerHTML={{ __html: modifiedSvg }}
      />
    );
  }

  return null;
}