/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //ayuda a no tener estilos no utilizados en nuestra build 
    "./src/**/*.html",
    "./src/**/*.{ts,tsx}"
   //javaScript ---> "./src/**/*.{js,jsx}"

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

