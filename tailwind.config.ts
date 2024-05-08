
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                slideIn: 'slideIn 0.3s ease-in-out',

            },
            keyframes: {
                slideIn: {
                    '0%': {transform: 'translateY(100%)'},
                    '100%': {transform: 'translateY(0)'}
                },

            },
            boxShadow: {
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
            },
            outline: {
                blue: '2px solid rgba(0, 112, 244, 0.5)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                principal: '#075985',
                secondary: "#0EA5E9",
                primaryRed: '#FF395C',
                hoveredRed: '#FF859A',
                primaryDark: '#475569',
                darkBlue: '#035EA1',
                themeGray: '#CBD5E1',
                themeDarkGray: '#94A3B8',
                bgProfile: '#E0F2FE',
                bgDark: '#212121',
                bgFinishStep: '#FF859A',
                bgStepFinishBlue: '#0369A1',
                bgHover: '#38BDF8',
                borderAction: '#E2E8F0',
                activeBlue: '#0284C7',
                bgDarkProfile: '#10172A',
                backToList: '#1E293B'

            },
            fontSize: {
                xs: ['0.75rem', {lineHeight: '1.5'}],
                sm: ['0.875rem', {lineHeight: '1.5715'}],
                base: ['1rem', {lineHeight: '1.5', letterSpacing: '-0.01em'}],
                lg: ['1.125rem', {lineHeight: '1.5', letterSpacing: '-0.01em'}],
                xl: ['1.25rem', {lineHeight: '1.5', letterSpacing: '-0.01em'}],
                '2xl': ['1.5rem', {lineHeight: '1.33', letterSpacing: '-0.01em'}],
                '3xl': ['1.88rem', {lineHeight: '1.33', letterSpacing: '-0.01em'}],
                '4xl': ['2.25rem', {lineHeight: '1.25', letterSpacing: '-0.02em'}],
                '5xl': ['3rem', {lineHeight: '1.25', letterSpacing: '-0.02em'}],
                '6xl': ['3.75rem', {lineHeight: '1.2', letterSpacing: '-0.02em'}],
            },
            screens: {
                xs: '480px',
                '3xl': '1920px',
                '4xl': '2560px'

            },
        },
    },
    plugins: [
    ],
};
