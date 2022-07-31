import React from 'react';

interface NavigationBottomData {
  icon: React.ReactNode;
  text: string;
}

interface NavigationBottomProps {
  data?: NavigationBottomData[];
}

export type { NavigationBottomData, NavigationBottomProps };
