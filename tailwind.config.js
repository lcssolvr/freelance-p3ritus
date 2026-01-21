/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#3E0E18',
                'secondary': '#E8DCC0',
            },
            fontFamily: {
                serif: ['"Merriweather"', 'serif'],
                sans: ['"Open Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
