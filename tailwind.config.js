// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         neon: {
//           50: "#eff6ff",
//           500: "#8b5cf6",
//         },
//       },
//       keyframes: {
//         float: {
//           "0%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-8px)" },
//           "100%": { transform: "translateY(0px)" },
//         },
//       },
//       animation: {
//         float: "float 4s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bt-pink": "#e61e77", // The Black Tomato pink from the button
        "bt-dark": "#1a1a1a", // A soft black for text
        "bt-cream": "#f8f5f0", // A light cream background color
        "bt-brown": "#c16d47", // The brown from the final section
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
