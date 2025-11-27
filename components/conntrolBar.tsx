interface ControlBarProps {
  isFill: boolean;
  onFillChange: (fill: boolean) => void;
  color: string;
  onColorChange: (color: string) => void;
  size: number;
  onSizeChange: (size: number) => void;
  strokeWidth?: number;
  onStrokeWidthChange?: (strokeWidth: number) => void;
  showStroke?: boolean;
  className?: string;
}

export default function ControlBar({
  isFill,
  onFillChange,
  color,
  onColorChange,
  size,
  onSizeChange,
  strokeWidth = 1.5,
  onStrokeWidthChange,
  showStroke = true,
  className
}: ControlBarProps) {

  return (
    <div className={className}>
      {/* Type Toggle */}
      <div className="flex flex-col gap-1.5 ">
        <span className="text-sm font-medium text-color-gray-400 dark:text-color-gray-400 pl-4">Type</span>
        <div className="flex items-center gap-1 bg-color-gray-100 dark:bg-color-gray-700 rounded-full px-1.5 h-10 border border-color-gray-200 dark:border-color-gray-600">
          <button
            onClick={() => onFillChange(false)}
            className={`px-3 w-full py-2 rounded-full text-sm font-medium transition-all ${
              !isFill
                ? 'bg-color-secondary text-color-white'
                : 'bg-color-transparent cursor-pointer text-color-gray-600 dark:text-color-gray-300 hover:bg-color-gray-100 dark:hover:bg-color-gray-600'
            }`}
          >
            Line
          </button>
          <button
            onClick={() => onFillChange(true)}
            className={`px-3 py-2 w-full rounded-full text-sm font-medium transition-all ${
              isFill
                ? 'bg-color-secondary text-color-white'
                : 'bg-color-transparent cursor-pointer text-color-gray-600 dark:text-color-gray-300 hover:bg-color-gray-100 dark:hover:bg-color-gray-600'
            }`}
          >
            Fill
          </button>
        </div>
      </div>

      {/* Color Picker */}
      <div className="flex flex-col gap-1.5 ">
        <span className="text-sm font-medium text-color-gray-400 dark:text-color-gray-400 pl-4">Color</span>
        <div className="flex items-center gap-1 bg-color-gray-100 dark:bg-color-gray-700 rounded-full px-1.5 h-10 border border-color-gray-200 dark:border-color-gray-600">
          <label htmlFor="control-color-picker" className="w-7 h-7 shrink-0 rounded-full border-2 border-color-gray-200 dark:border-color-gray-500 cursor-pointer overflow-hidden relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: color }}
            />
            <input
              id="control-color-picker"
              type="color"
              value={color}
              onChange={(e) => onColorChange(e.target.value)}
              className="opacity-0 w-full h-full cursor-pointer"
            />
          </label>
          <input
            type="text"
            value={color.toUpperCase()}
            onChange={(e) => onColorChange(e.target.value)}
            className="text-sm w-full bg-color-transparent text-color-gray-700 dark:text-color-gray-200 border-none outline-none"
          />
        </div>
      </div>

      {/* Icon Size Range */}
      <div className="flex flex-col gap-1.5 ">
        <div className="flex items-center justify-between px-4">
          <span className="text-sm font-medium text-color-gray-400 dark:text-color-gray-400">Size</span>
          <span className="text-sm font-medium text-color-gray-700 dark:text-color-gray-200">{size}px</span>
        </div>
        <div className="relative flex items-center gap-1 bg-color-gray-100 dark:bg-color-gray-700 rounded-full h-10 px-4 border border-color-gray-200 dark:border-color-gray-600">
          <input
            type="range"
            min="16"
            max="256"
            step="4"
            value={size}
            onChange={(e) => onSizeChange(Number(e.target.value))}
            className='w-full cursor-pointer accent-color-secondary'
          />
        </div>
      </div>

      {/* Stroke Width Range (only for line icons) */}
      {showStroke && !isFill && onStrokeWidthChange && (
        <div className="flex flex-col gap-1.5 ">
          <div className="flex items-center justify-between px-4">
            <span className="text-sm font-medium text-color-gray-400 dark:text-color-gray-400">Stroke</span>
            <span className="text-sm font-medium text-color-gray-700 dark:text-color-gray-200">{strokeWidth}px</span>
          </div>
          <div className="relative flex items-center gap-1 bg-color-gray-100 dark:bg-color-gray-700 rounded-full h-10 px-4 border border-color-gray-200 dark:border-color-gray-600">
            <input
              type="range"
              min="0.2"
              max="4"
              step="0.1"
              value={strokeWidth}
              onChange={(e) => onStrokeWidthChange(Number(e.target.value))}
              className='w-full cursor-pointer accent-color-secondary'
            />
          </div>
        </div>
      )}
    </div>
  );
}