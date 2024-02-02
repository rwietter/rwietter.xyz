import { styled } from "features/ui/theme";

export const KbarContainer = styled("div", {
	paddingTop: "2rem",
});

export const KbarButton = styled("button", {
	cursor: "pointer",
	color: "$text_alt_color",
	fontFamily: "var(--font-secondary)",
	padding: "2px 8px 4px 8px",
	borderRadius: "1em",
	outline: "none",
	transition: "$transitonTheme",
	textAlign: "center",
	background: "transparent",
	display: "block",
	alignItems: "center",
	border: "none",
	"--fluid-type-min": "0.9rem",
	"--fluid-type-max": "1rem",

	"&:hover": {
		background: "$sub_alt_color",
	},

	code: {
		textAlign: "center",
		color: "$text_alt_color",
		transition: "$transitonTheme",
		fontFamily: "var(--font-code)",
		textTransform: "uppercase",
		border: "none",
		borderBottom: "1px dotted $text_alt_color",
		fontWeight: 600,
		"--fluid-type-min": ".9rem",
		"--fluid-type-max": "1rem",
	},
});
