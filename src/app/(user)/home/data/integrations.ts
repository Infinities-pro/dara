export interface IntegrationTheme {
  primary: string;
  secondary: string;
}

export interface Integration {
  icon: string;
  label: string;
  description?: string;
  theme: IntegrationTheme;
}

export const INTEGRATIONS: Integration[] = [
  {
    icon: 'integrations/bullx.svg',
    label: 'Bullx',
    description: 'Advanced trading tools and analytics',
    theme: {
      primary: '#10B981',
      secondary: '#047857',
    },
  },
  {
    icon: 'integrations/photon.svg',
    label: 'Photon',
    description: 'High-performance image processing and optimization',
    theme: {
      primary: '#C875F8', // Purple from SVG
      secondary: '#28BFFA', // Blue from SVG
    },
  },
  {
    icon: 'integrations/dexscreener.svg',
    label: 'DexScreener',
    description: 'Discover trending tokens',
    theme: {
      primary: '#64748B', // Gray
      secondary: '#94A3B8', // Light gray
    },
  },
  {
    icon: 'integrations/pump_fun.svg',
    label: 'pump.fun',
    description: 'Discover new tokens, launch tokens',
    theme: {
      primary: '#10B981', // Green
      secondary: '#10B981', // Green
    },
  },
];
