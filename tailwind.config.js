/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,js,html}'],
	theme: {
		maxHeight: {
			container: '1440px',
			contentContainer: '1140px',
			containerSmall: '1024px',
			containers: '768px',
		},
		extend: {
			screens: {
				xs: '319px',
				sm: '375px',
				sml: '500px',
				md: '667px',
				mdl: '768px',
				lg: '960px',
				lgl: '1024px',
				xl: '1280px',
			},
			fontFamily: {
				customFont: ['"Fira Code"'],
			},
			boxShadow: {
				navbarShadow: '0 10px 10px -10px #ebbcba',
			},
			colors: {
				Base: '#191724',
				Muted: '#6e6a86',
				Subtle: '#908caa',
				Text: '#e0def4',
				Love: '#eb6f92',
				Gold: '#f6c177',
				Rose: '#ebbcba',
				Pine: '#31748f',
				Foam: '#9ccfd8',
				Iris: '#c4a7e7',
				HighlightLow: '#21202e',
				HighlightMed: '#403d52',
				HighlightHigh: '#524f67',
			},
		},
	},
	plugins: [],
};
