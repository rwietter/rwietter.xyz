import { styled } from "features/ui/theme";

export const CardContainer = styled("li", {
	width: "100%",

	"& + &": {
		marginTop: "2rem",
	},
});

export const DateTimeRead = styled("p", {
	alignItems: "center",
	fontWeight: 200,
	fontFamily: "var(--font-secondary), monospace",
	color: "$text_gray_color",
	transition: "$transitonTheme",
	"--fluid-type-max": "1rem",

	svg: {
		marginRight: "$1",
	},
});

export const PostTitle = styled("p", {
	justifySelf: "flex-start",
	lineHeight: 1.6,
	fontWeight: 500,
	maxWidth: "fit-content",
	borderBottom: "1px dotted $text_gray_color",
	transition: "$transitonTheme",
	display: "inline",
	fontFamily: "var(--font-secondary), monospace",
	color: "$text_color",
	overflowWrap: "anywhere",
	"--fluid-type-max": "1.1rem",

	"&:hover": {
		color: "$main_color",
	},
});
