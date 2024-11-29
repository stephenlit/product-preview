// .prettierrc.mjs (recommended)
/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
    printWidth: 80,
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
