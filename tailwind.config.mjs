/** @type {import('tailwindcss').Config} */
    export default {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        theme: {
            extend: {
                boxShadow: {
                    'md-x': '4px 0 6px -1px rgba(0, 0, 0, 0.05), -4px 0 6px -1px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        plugins: [
            require('@tailwindcss/forms'),
            function ({ addUtilities }) {
                addUtilities({
                    '.no-scrollbar': {
                        '-ms-overflow-style': 'none', // IE and Edge
                        'scrollbar-width': 'none', // Firefox
                        '&::-webkit-scrollbar': {
                            display: 'none', // Chrome, Safari
                        },
                    },
                });
            },
        ],
    };

