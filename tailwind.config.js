/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
   theme: {
      extend: {
         container: {
            center: true,
            padding: "1rem",
         },
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
         },
      },
   },
   // eslint-disable-next-line no-undef
   plugins: [],
};
