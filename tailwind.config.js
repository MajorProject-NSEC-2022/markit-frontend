module.exports = {
    content: ["./src/**/*.{html,tsx,js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter var", "sans-serif"],
                satoshi: ["Satoshi var", "sans-serif"],
            },
        },

        screens: {
            sm: "320px",

            md: "480px",

            lg: "768px",

            xl: "1024px",

            "2xl": "1200px",

            "4xl": "1920px",

            fold: "350px",

            "fold-md": "548px",

            "fold-lg": "1035px",
        },
    },
    plugins: [],
};
