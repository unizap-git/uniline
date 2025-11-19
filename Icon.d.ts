import * as React from 'react';
import { IconProps } from './types';

export interface DynamicIconProps extends IconProps {
  name: string;
}

declare const Icon: React.FC<DynamicIconProps>;
export default Icon;
