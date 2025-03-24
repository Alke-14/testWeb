module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}", // Ensures Tailwind scans all relevant files
      "./node_modules/tw-elements/dist/js/**/*.js" 
    ],
    plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class"
  };