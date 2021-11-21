// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                natural: {
                    500: '#aa907d'
                },
                silver: {
                    500: '#c0c0c0'
                },
                brown: {
                    500: '#a52a2a'
                },
                orange: {
                    500: '#ff6600'
                }
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}