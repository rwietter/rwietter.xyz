import { SidebarSocialIcons } from '../components/social/social';
import { Container, SocialContainer } from './styles';

const AuthorHeader = () => (
  <Container>
    <h1>Maurício</h1>
    <h2>24-year-old software developer and student from the Brazil.</h2>
    <SocialContainer>
      <SidebarSocialIcons />
    </SocialContainer>
  </Container>
);

export default AuthorHeader;
