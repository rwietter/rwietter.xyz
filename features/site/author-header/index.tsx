import { SOCIAL_LINKS } from 'data/social-links';
import { Container } from './styles';

const AuthorHeader = () => (
  <Container>
    <h1>Maurício</h1>
    <h2>24-year-old software developer and student from the Brazil.</h2>
    <nav>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  </Container>
);

export default AuthorHeader;
