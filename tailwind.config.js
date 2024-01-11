const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                k2d: ["K2D", "sans-serif"],
                K2D: ["K2D", "sans-serif"],
                kelly: ["Kelly Slab", "sans-serif"],
                Rocker: ["New Rocker", "sans-serif"],
                Play:['Playfair Display', "seri"]
            },
        },
    },
    plugins: [],
});
