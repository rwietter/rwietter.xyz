import { links } from 'data/social-links';
import { Container, Link } from './styles';

const AuthorHeader = () => (
  <Container>
    <h1>Maurício</h1>
    <h2>24-year-old software developer and student from the Brazil.</h2>
    <nav>
      {links.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          title={link.name}
          social={link.color as any}
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  </Container>
);

export default AuthorHeader;
