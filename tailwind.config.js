module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
		

	},
	variants: {
		extend: {
			display: ["group-hover"],
			opacity: ["group-hover"],
			translate: ["group-hover"],
			transform: ["group-hover"],
			width: ["group-hover", "hover"],
			height: ["group-hover", "hover"],
			padding: ["group-hover", "hover"],
			animation: ["group-hover", "hover"],
			scale: ["group-hover", "hover"],
	},
	},
	plugins: []
};
