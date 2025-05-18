declare module 'gatsby' {
  import * as React from 'react';

  export interface GatsbyLinkProps {
    to: string;
    className?: string;
    children?: React.ReactNode;
  }

  export const Link: React.FC<GatsbyLinkProps>;
} 