import { Container } from './styles';
import { Author } from '../components/author/author';
import { SidebarSocialIcons } from '../components/social/social';

const Sidebar = () => (
  <Container>
    <div>
      <Author />
      <SidebarSocialIcons />
    </div>
  </Container>
);

export { Sidebar };
