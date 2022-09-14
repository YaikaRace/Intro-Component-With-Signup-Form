/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/index.html"],
	theme: {
		colors: {
			transparent: "transparent",
			white: "white",
			red: "hsl(0, 100%, 74%)",
			green: "hsl(154, 59%, 51%)",
			blue: "hsl(248, 32%, 49%)",
			"dark-blue": "hsl(249, 10%, 26%)",
			"grayish-blue": "hsl(246, 25%, 77%)",
		},
		fontFamily: {
			sans: "Poppins",
		},
		boxShadow: {
			shadow: "0px 7px 0px 0px rgba(0,0,0,0.1)",
		},
		extend: {
			backgroundImage: {
				"bg-desktop": 'url("../images/bg-intro-desktop.png")',
				"bg-mobile": 'url("../images/bg-intro-mobile.png")',
			},
		},
	},
	plugins: [],
};
