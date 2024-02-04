/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#111959',
        secondary: '#26BDF4',
        third: '#652CB2',
        normal: '#FFC107',
        contact: "#C5EAE4",
        footer: '#4F53BC',
        darkgray: {
          "100": "rgba(150, 150, 150, 0.14)",
          "200": "rgba(150, 150, 150, 0.25)",
        },
      },
    },
  },
  plugins: [],
};
