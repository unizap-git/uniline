import * as React from 'react';

export interface IconProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export type IconComponent = React.FC<IconProps>;
