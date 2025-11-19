import { FC, SVGProps, useEffect, useState } from 'react';

interface IconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  fill?: boolean;
  className?: string;
}

// Dynamic import function
async function loadIcon(name: string, fill: boolean): Promise<FC<SVGProps<SVGSVGElement>> | null> {
  try {
    const iconModule = await import(`../icons/${name}${fill ? '-fill' : '-line'}.svg`);
    return iconModule.default;
  } catch (error) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
}

export default function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  fill = false,
  className = ''
}: IconProps) {
  const [IconComponent, setIconComponent] = useState<FC<SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    loadIcon(name, fill).then(setIconComponent);
  }, [name, fill]);

  if (!IconComponent) {
    return <div className="w-6 h-6 bg-gray-200 animate-pulse rounded" />;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      stroke={color}
      strokeWidth={strokeWidth}
      fill={fill ? color : 'none'}
      className={className}
    />
  );
}