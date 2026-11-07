import { createTheme } from '@mantine/core';

// Deep navy scale used as the primary accent
const navy = [
  '#e8efff',
  '#cfdbf7',
  '#9fb5ea',
  '#6c8dde',
  '#4269d3',
  '#2a55cc',
  '#1d4aca',
  '#0f3bb3',
  '#0533a1',
  '#002b8f',
];

// Dark surfaces: Mantine uses dark[7] as body background in dark mode
const dark = [
  '#e6e9f0',
  '#b4bccc',
  '#8a94a8',
  '#5d677d',
  '#2a3346',
  '#1a2233',
  '#111827',
  '#05070d',
  '#04060b',
  '#020306',
];

export const theme = createTheme({
  primaryColor: 'navy',
  primaryShade: { dark: 4 },
  colors: { navy, dark },
  white: '#f5f7fb',
  black: '#05070d',
  fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily: '"Space Grotesk", Inter, system-ui, sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
});
