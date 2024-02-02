import { styled } from "features/ui/theme";

export const SocialContainer = styled("div", {
	display: "none",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "row",
	cursor: "pointer",

	"@bp5": {
		display: "flex",
	},
});

export const Link = styled("a", {
	color: "$text_color",
	display: "inline-block",
	textDecoration: "none",

	"& + &": {
		paddingLeft: "$2",
	},
});
