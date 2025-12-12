/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ffa800",
                "primary-dark": "#cc8600",
                "primary-light": "#ffca5f",
                "primary-lightest": "#fff6e5",
                secondary: "#ffa800",
                "secondary-dark": "#cc8600",
                accent: "#ffa800",
                "accent-dark": "#cc8600",
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
