/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", 
      },
      colors: {
        customColor: '#e09145',
      },
      keyframes: {
        borderAnimation: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#E09145' },
        },
      },
      animation: {
        'border-glow': 'borderAnimation 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
