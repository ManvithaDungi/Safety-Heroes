/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Neurodivergent-friendly pastel color palette
      colors: {
        // Base palette
        'bg-primary': '#F8FAFC',      // Ultra-soft background
        'bg-secondary': '#FFFFFF',    // Clean surface
        'primary-soft': '#A7C7E7',    // Pastel blue
        'secondary-soft': '#CDEAC0',  // Pastel green
        'accent-soft': '#F9D5E5',     // Pastel pink
        'highlight-soft': '#FFF3B0',  // Pastel yellow
        'success-soft': '#A8D8B8',    // Soft success green
        'error-soft': '#F5B6A8',      // Soft error red
        'text-primary': '#334155',    // Slate dark (with good contrast)
        'text-secondary': '#64748B',  // Slate medium
        'border-light': '#E2E8F0',    // Calm border
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      spacing: {
        // Generous spacing for low cognitive load
        '0.5': '0.125rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
      },
      boxShadow: {
        // Soft, minimal shadows
        'soft': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'soft-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'soft-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      animation: {
        // Calm, accessible animations
        'gentle-float': 'gentleFloat 6s ease-in-out infinite',
        'subtle-pop': 'subtlePop 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'soft-pulse': 'softPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 300ms ease-out',
      },
      keyframes: {
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        subtlePop: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontSize: {
        // Clear type scale
        'xs': '0.75rem',  // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem',   // 16px (minimum for readability)
        'lg': '1.125rem', // 18px
        'xl': '1.25rem',  // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
      },
    },
  },
  plugins: [],
}
