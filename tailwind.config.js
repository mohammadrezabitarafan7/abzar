/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main:"#FF5023",
        gray:"#f0f0f0",
        gray1:"#43454D",
        gray2:"#212121",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    
  fontFamily: {
    irans: ['irans'],
  },
  },

  plugins: [],
};
