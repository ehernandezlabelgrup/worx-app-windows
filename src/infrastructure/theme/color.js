import { StyleSheet } from 'react-native'
export const colors = {
  gray: {
    50: '#F9FAFB',
    100: '#E8EAEE',
    200: '#E5E7EB',
    300: '#B4B9C7',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D'
  },
  yellow: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F'
  },
  green: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#215E45',
    900: '#064E3B'
  },
  blue: {
    50: '#EFF6FF',
    100: '#E5EEFD',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A'
  },
  orange: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#EA580C',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12'
  },
  lightBlue: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0EA5E9',
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E'
  },
  transparent: 'transparent',
  white: '#fff',
  black: '#000',
  primary: '#e85900',
  secondary: '#333',
  secondaryDark: '#215E45',
  alert: {
    dark: '#EB5757',
    light: '#FEE2E1'
  },
  success: '#228360',
  warning: '#F59E0B',
  info: '#8B5CF6',
  dark: '#374251',
  label: '#9CA3AF',
  whatsapp: '#128C7E'
}
export const Color = StyleSheet.create({
  transparent: {
    color: colors.transparent
  },
  faq: {
    color: colors.faq
  },
  primeros_pasos: {
    color: colors.primeros_pasos
  },
  alert: {
    color: colors.alert.dark
  },
  alertLight: {
    color: colors.alert.light
  },
  success: {
    color: colors.success
  },
  info: {
    color: colors.info.dark
  },
  infoLight: {
    color: colors.info.light
  },
  warning: {
    color: colors.warning
  },
  white: {
    color: colors.white
  },
  black: {
    color: colors.black
  },
  primary: {
    color: colors.primary
  },
  secondary: {
    color: colors.secondary
  },
  label: {
    color: colors.gray[400]
  },
  gray600: {
    color: colors.gray[600]
  },
  gray800: {
    color: colors.gray[800]
  },
  text: {
    color: colors.text
  },
  secondaryDark: {
    color: colors.secondaryDark
  }

})

export const Background = StyleSheet.create({
  transparent: {
    backgroundColor: colors.transparent
  },
  info: {
    backgroundColor: colors.info.dark
  },
  infoLight: {
    backgroundColor: colors.info.light
  },
  alert: {
    backgroundColor: colors.alert.dark
  },
  alertLight: {
    backgroundColor: colors.alert.light
  },
  success: {
    backgroundColor: colors.success
  },
  warning: {
    backgroundColor: colors.warning
  },
  white: {
    backgroundColor: colors.white
  },
  black: {
    backgroundColor: colors.black
  },
  primary: {
    backgroundColor: colors.primary
  },
  secondary: {
    backgroundColor: colors.secondary
  },
  background: {
    backgroundColor: colors.background
  },
  dark: {
    backgroundColor: colors.dark
  },
  gray700: {
    backgroundColor: colors.gray[700]
  },
  gray300: {
    backgroundColor: colors.gray[300]
  },
  blue100: {
    backgroundColor: colors.blue[100]
  },
  whatsapp: {
    backgroundColor: colors.whatsapp
  }
})
