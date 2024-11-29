/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                cyan: 'hsl(158, 36%, 37%)',
                cream: 'hsl(30, 38%, 92%)',

                darkBlue: 'hsl(212, 21%, 14%)',
                darkGrayishBlue: 'hsl(228, 12%, 48%)',
                white: 'hsl(0, 0%, 100%)',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                heading: ['Fraunces', 'serif'],
            },
        },
    },
    plugins: [],
};
