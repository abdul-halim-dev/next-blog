

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: 'var(--background)',
//         foreground: 'var(--foreground)',
//       },
//     },
//   },
//   plugins: [flowbite.plugin()],
// };

  

 /** @type {import('tailwindcss').Config} */
 export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // for App Router
    './pages/**/*.{js,ts,jsx,tsx}', // for Pages Router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}