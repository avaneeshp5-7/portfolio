/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'glow-purple': '0 0 10px rgba(139, 0, 139, 0.7)',
            },
        },
    },
    plugins: [],
}
