/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#203465',
                'secondary': '#E8DCC0',
            },
            fontFamily: {
                sans: ['"Open Sans"', 'sans-serif'],
                serif: ['"Cardo"', 'serif'],
                cardo: ['"Cardo"', 'serif'],
            }
        },
    },
    plugins: [],
}
