// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1024px",
                xl: "1280px",
            },
        },
        extend: {
            fontFamily: {
                ...fontFamily,
                sans: ["Montserrat", "sans-serif"],
                serif: ["Source Serif Pro", "serif"],
                oswald: ["Oswald", "sans-serif"],
            },
            colors: {
                primary: "#ea4d46",
                lightGrey: "#F9F9F9",
                darkGrey: "#323232",
            },
        },
    },
    plugins: [],
};
