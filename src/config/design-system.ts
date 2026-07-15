/**
 * SICA Platform Design System
 * Color Palette, Typography, and Component Tokens
 */

export const colors = {
  primary: '#0B1F3A',      // Deep Blue
  secondary: '#00A8E8',    // Science Cyan
  accent: '#2EC4B6',       // Emerald
  background: '#FFFFFF',   // White
  surface: '#F8FAFB',      // Light Gray
  text: '#1F2937',         // Dark Text
  textSecondary: '#6B7280',// Secondary Text
  border: '#E5E7EB',       // Border
  success: '#10B981',      // Success Green
  warning: '#F59E0B',      // Warning Amber
  error: '#EF4444',        // Error Red
} as const;

export const typography = {
  fontFamily: 'Inter, system-ui, sans-serif',
  sizes: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
  },
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
} as const;

export const shadows = {
  sm: '0 2px 4px rgba(11, 31, 58, 0.08)',
  md: '0 4px 12px rgba(11, 31, 58, 0.12)',
  lg: '0 8px 24px rgba(11, 31, 58, 0.16)',
  xl: '0 12px 32px rgba(11, 31, 58, 0.20)',
} as const;

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;
