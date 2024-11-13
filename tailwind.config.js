/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#525252",
				secondary: "#414141",
				accent: "#313131",
				warning: "#CA3E47",
				info: "#FFFFFF",
			},
		},
	},
	plugins: [],
};
