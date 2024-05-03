/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./_site/**/*.{html,js}"],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'Arial', 'sans-serif'],
			serif: ['Lora', 'Georgia', 'serif'],
		},
		letterSpacing: {
			normal: '1.5px',
		},
		extend: {
			width: {
				'600px': '600px'
			},
			height: {
				'300px': '300px'
			},
			colors: {
				light: {
					100: '#fdfdf8',
					300: '#e5e4d7',
				},
				blue: {
					dark: '#283c5f',
					main: '#7aa2e3',
					light: '#60697f'
				},
			},
		},
	},
	plugins: [],
};
