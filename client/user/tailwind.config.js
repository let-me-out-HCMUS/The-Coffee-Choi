/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home' : 'url(https://file.hstatic.net/1000075078/file/desktop_bg_350cd1de6f894c64825cd4d961866cb0.png)'
      }
    },
  },
  plugins: [],
}

