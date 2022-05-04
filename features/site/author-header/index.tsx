import React from 'react';
import { SOCIAL_LINKS } from 'data/social-links';
import { Container } from './styles';

const AuthorHeader: React.FC = () => (
  <Container>
    <h1>Maurício</h1>
    <p>24-year-old software developer and student from the Brazil.</p>
    <nav>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          title={link.name}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  </Container>
);

export default AuthorHeader;
