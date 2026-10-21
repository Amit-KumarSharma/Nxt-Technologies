/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030305',
          900: '#07070b',
          850: '#0d0e15',
          800: '#12141f',
          750: '#181b2a',
          700: '#1e2235',
          600: '#2c314b',
        },
        electric: {
          blue: '#3b82f6',
          sky: '#38bdf8',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          purple: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'mesh-glow': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
