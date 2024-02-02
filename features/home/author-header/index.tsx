/* eslint-disable react/jsx-one-expression-per-line */
import { SidebarSocialIcons } from "components/StickyBar/Social";
import { author } from "./author";
import { Container, SocialContainer } from "./styles";

const AuthorHeader = () => (
	<Container>
		<h1>{author.name}</h1>
		<span>@{author.username}</span>
		<h2>{author.biography}</h2>
		<SocialContainer>
			<SidebarSocialIcons />
		</SocialContainer>
	</Container>
);

export { AuthorHeader };
