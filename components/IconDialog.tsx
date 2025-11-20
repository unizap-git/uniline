"use client";

import { IconSettings, IconItem } from '../lib/types';
import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import Icon from "@/components/Icon";
import ControlBar from "./conntrolBar";

interface IconDialogProps {
  icon: IconItem;
  isFill: boolean;
  onClose: () => void;
  iconSettings: IconSettings;
  onIconSettingsChange: (settings: IconSettings) => void;
}

export default function IconDialog({
  icon,
  isFill,
  onClose,
  iconSettings,
  onIconSettingsChange,
}: IconDialogProps) {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [nameCopied, setNameCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Local settings that don't affect the parent component
  const [localIsFill, setLocalIsFill] = useState(isFill);
  const [localSettings, setLocalSettings] = useState<IconSettings>(iconSettings);
  const iconRef = useRef<HTMLDivElement>(null);

  // Handle open animation
  useEffect(() => {
    if (icon) {
      // Small delay to trigger animation
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    }
  }, [icon]);

  // Handle close with animation
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 200); // Match animation duration
  };

  useEffect(() => {
    if (!icon) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [icon]);

  // Initialize local settings when dialog opens
  useEffect(() => {
    setLocalIsFill(isFill);
    setLocalSettings(iconSettings);
  }, [isFill, iconSettings, icon]);

  if (!icon) return null;

  // Convert kebab-case icon name to PascalCase component name
  const getComponentName = (iconName: string): string => {
    return iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  };

  const componentName = getComponentName(icon.name);

  const getSVGString = () => {
    if (!iconRef.current) return "";
    const svgElement = iconRef.current.querySelector("svg");
    if (!svgElement) return "";

    const svgClone = svgElement.cloneNode(true) as SVGElement;
    svgClone.setAttribute("width", localSettings.size.toString());
    svgClone.setAttribute("height", localSettings.size.toString());
    svgClone.setAttribute("stroke-width", localSettings.strokeWidth.toString());

    // Update all path elements with the new color
    const paths = svgClone.querySelectorAll(
      "path, circle, rect, line, polyline, polygon"
    );
    paths.forEach((path) => {
      if (localIsFill) {
        path.setAttribute("fill", localSettings.color);
      } else {
        path.setAttribute("stroke", localSettings.color);
      }
    });

    return new XMLSerializer().serializeToString(svgClone);
  };

  const copyCode = async () => {
    const codeString = `import { ${componentName} } from '@unizap/uniline';

<${componentName}
  size={${localSettings.size}}${
      !localIsFill
        ? `
  strokeWidth={${localSettings.strokeWidth}}`
        : ""
    }
  color="${localSettings.color}"${
      localIsFill
        ? `
  fill={true}`
        : ""
    }
/>`;

    try {
      // Check if clipboard API is available
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(codeString);
      } else {
        // Fallback for older browsers or insecure contexts
        await fallbackCopyTextToClipboard(codeString);
      }
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
      // Try the fallback method
      try {
        await fallbackCopyTextToClipboard(codeString);
        setCodeCopied(true);
        setTimeout(() => setCodeCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy also failed:", fallbackErr);
      }
    }
  };

  const copySVG = async () => {
    const svgString = getSVGString();
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(svgString);
      } else {
        await fallbackCopyTextToClipboard(svgString);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy SVG:", err);
      try {
        await fallbackCopyTextToClipboard(svgString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy also failed:", fallbackErr);
      }
    }
  };

  // Fallback function for older browsers
  const fallbackCopyTextToClipboard = (text: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      
      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          resolve();
        } else {
          reject(new Error('Copy command failed'));
        }
      } catch (err) {
        document.body.removeChild(textArea);
        reject(err);
      }
    });
  };

  const downloadSVG = () => {
    const svgString = getSVGString();
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${icon.name}-${localIsFill ? "fill" : "line"}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadPNG = async () => {
    if (!iconRef.current) return;

    try {
      const canvas = await html2canvas(iconRef.current, {
        backgroundColor: null,
        scale: 2,
      });

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${icon.name}-${localIsFill ? "fill" : "line"}.png`;
        link.click();
        URL.revokeObjectURL(url);
      });
    } catch (err) {
      console.error("Failed to download PNG:", err);
    }
  };

  // Handle local settings changes (doesn't affect parent)
  const handleLocalSettingsChange = (key: keyof IconSettings, value: string | number) => {
    setLocalSettings({
      ...localSettings,
      [key]: value,
    });
  };
  return (
    <div
      className={`fixed inset-0 bg-color-black/50 backdrop-blur-sm z-999 flex items-center justify-center p-4 transition-opacity duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-color-white dark:bg-color-gray-800 rounded-2xl shadow-2xl max-w-xl w-full transition-all duration-200 ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between md:p-6 p-4 border-b border-color-gray-200 dark:border-color-gray-700">
          <div className="flex items-center gap-3">
            <h3 className="text-lg md:text-2xl font-bold text-color-gray-900 dark:text-color-white">
              uni-{icon.name}
            </h3>
            <button
              onClick={async () => {
                try {
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(`uni-${icon.name}`);
                  } else {
                    // Fallback for browsers without clipboard API
                    const textArea = document.createElement('textarea');
                    textArea.value = `uni-${icon.name}`;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                  }
                  setNameCopied(true);
                  setTimeout(() => setNameCopied(false), 2000);
                } catch (err) {
                  console.error('Failed to copy icon name:', err);
                }
              }}
              className="text-color-gray-400 hover:text-color-gray-600 bg-color-transparent cursor-pointer transition-color"
              title={`Copy to clipboard`}
            >
              {nameCopied ? (
                <svg
                  className="size-4"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg
                  className="size-4"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                </svg>
              )}
            </button>
          </div>
          <button
            onClick={handleClose}
            className="text-color-gray-400  cursor-pointer rounded-full p-1 hover:text-color-gray-600 dark:hover:text-color-gray-200 transition-color"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Icon Preview */}
        <div className="md:p-6 p-4 max-h-[80vh] overflow-y-auto">
          {/* Fill/Line Toggle */}

          {/* Control Bar */}
          <ControlBar
            isFill={localIsFill}
            className="grid lg:grid-columns-4 grid-columns-2 mb-6 gap-4"
            onFillChange={(isFill) => {
              setLocalIsFill(isFill);
              handleLocalSettingsChange("variant", isFill ? "fill" : "line");
            }}
            color={localSettings.color}
            onColorChange={(color) => handleLocalSettingsChange("color", color)}
            size={localSettings.size}
            onSizeChange={(size) => handleLocalSettingsChange("size", size)}
            strokeWidth={localSettings.strokeWidth}
            onStrokeWidthChange={(strokeWidth) =>
              handleLocalSettingsChange("strokeWidth", strokeWidth)
            }
            showStroke={true}
          />

          {/* Icon Display */}
          <div className="flex items-center justify-center border border-color-gray-200 rounded-xl p-6 relative z-1 bg-color-white dark:bg-color-gray-800 dark:border-color-gray-700">
            <div ref={iconRef} style={{ color: localSettings.color }}>
              <Icon
                name={icon.name}
                category={icon.category}
                size={localSettings.size}
                strokeWidth={localSettings.strokeWidth}
                color={localSettings.color}
                fill={localIsFill}
              />
            </div>
          </div>


          {/* Code Display with Copy */}
          <div className="bg-color-secondary/10 pt-6 -mt-6 dark:bg-color-gray-800 border border-color-gray-200 dark:border-color-gray-700 rounded-b-xl mb-6 relative overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2 overflow-hidden ">
                <pre className="text-xs font-medium text-color-secondary dark:text-color-gray-300 truncate">
                  {`<${componentName} size={${localSettings.size}}${
                    !localIsFill
                      ? ` strokeWidth={${localSettings.strokeWidth}}`
                      : ""
                  } color="${localSettings.color}"${
                    localIsFill ? ` fill={true}` : ""
                  }/>`}
                </pre>
              </div>
              <button
                onClick={copyCode}
                className="flex shrink-0 cursor-pointer items-center bg-color-transparent gap-1.5 p-1.5 hover:bg-color-secondary/30 dark:hover:bg-color-gray-600 rounded text-color-secondary dark:text-color-gray-400 hover:text-color-gray-700 dark:hover:text-color-gray-200 transition-all"
                title="Copy code"
              >
                {codeCopied ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="grid md:grid-columns-3 grid-columns-2 gap-3">
            <button
              onClick={downloadSVG}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-color-transparent border border-color-secondary dark:bg-color-gray-800 hover:bg-color-secondary/10 dark:hover:bg-color-gray-600 text-color-secondary dark:text-color-white font-medium rounded-lg transition-all cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              SVG
            </button>

            <button
              onClick={downloadPNG}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-color-transparent border border-color-secondary dark:bg-color-gray-800 hover:bg-color-secondary/10 dark:hover:bg-color-gray-600 text-color-secondary dark:text-color-white font-medium rounded-lg transition-all cursor-pointer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              PNG
            </button>
            <button
              onClick={copySVG}
              className="flex col-span-2 md:col-span-1 items-center justify-center gap-2 px-4 py-3 bg-color-primary/90 hover:bg-color-primary text-color-white font-medium rounded-lg transition-background-color cursor-pointer"
            >
              {copied ? (
                <>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                  </svg>
                  Copy SVG
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


