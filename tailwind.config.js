/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
        colors: {
            primary: "#D9D9D9",
            secondary: "#FFFFFF",
            tertiary: "#4e4e4e",
            quaternary: "#e5e5e5",
            quinary: "#2F2F2F",
            border: "#444444",
            searchBar: "#b0a2a2cc",
            searchBar2: "#636262",
            Button: "#5FA8A3",
            FieldInput: "#2F2F2F",
            loginScreem: "#3f3f3f"
        },
        fontFamily: {
            primary: ["Montserrat", "sans-serif"],
            secondary: ["Inter", "sans-serif"],
        },
    },
},
  plugins: [],
}
