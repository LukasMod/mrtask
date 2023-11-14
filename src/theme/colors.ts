const palette = {
  neutral100: '#FFFFFF',
  neutral200: '#F4F2F1',
  neutral300: '#D7CEC9',
  neutral400: '#B6ACA6',
  neutral500: '#978F8A',
  neutral600: '#564E4A',
  neutral700: '#3C3836',
  neutral800: '#191015',
  neutral900: '#000000',

  primary100: '#B3E0FF',
  primary200: '#7CCDFF',
  primary300: '#45BAFF',
  primary400: '#1AA7FF',
  primary500: '#3BAAFF',
  primary600: '#0088CC',

  red500: '#c0392b',
} as const;

export const colors = {
  palette,
  transparent: 'rgba(0, 0, 0, 0)',
  text: palette.neutral800,
  textDim: palette.neutral400,
  background: palette.neutral100,
  border: palette.neutral400,
  tint: palette.primary500,
  separator: palette.neutral300,
  error: palette.red500,
};
