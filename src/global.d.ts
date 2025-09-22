import 'lucide-react';
import type React from 'react';

// Fix missing LucideIcon type
declare module 'lucide-react' {
  export interface LucideProps {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  type Icon = React.ComponentType<LucideProps>;
  
  export type LucideIcon = Icon;
}