import { author } from '../../../data';
import { SidebarSocialIcons } from '../components/social/social';
import { Container, SocialContainer } from './styles';

const AuthorHeader = () => (
  <Container>
    <h1>{author.name}</h1>
    <h2>{author.biography}</h2>
    <SocialContainer>
      <SidebarSocialIcons />
    </SocialContainer>
  </Container>
);

export default AuthorHeader;
