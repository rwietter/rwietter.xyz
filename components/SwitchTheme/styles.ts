import { keyframes } from "@stitches/react";
import { styled } from "features/ui/theme";
import { motion } from "framer-motion";

const rotate = keyframes({
	from: {
		scale: 0,
		transform: "rotate(0deg)",
	},
	to: {
		scale: 1,
		transform: "rotate(360deg)",
	},
});

export const Button = styled("button", {
	background: "none",
	borderRadius: "60rem",
	color: "$text_color",
	outline: "none",
	border: "none",
	cursor: "pointer",
	transition: "$transitonTheme, transform 700ms ease, rotate 700ms ease",
	fontFamily: "var(--font-primary), monospace",

	"&:hover": {
		color: "$main_color",
		background: "transparent",
	},

	variants: {
		visible: {
			header: {
				padding: "10px",
				"@bp1": {
					display: "flex",
					alignItems: "center",
				},
			},
			sticky: {
				display: "flex",
			},
		},
	},

	"&.active": {
		animation: `${rotate} 500ms ease`,
	},
});
