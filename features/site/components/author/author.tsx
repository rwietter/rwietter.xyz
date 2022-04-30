import React, { useEffect, useState } from 'react';

import { AuthorContainer, AuthorImage, AuthorLink } from './styles';

const Author: React.FC = () => {
  const [offsetWidth, setOffsetWidth] = useState(50);

  useEffect(() => {
    const body = document?.querySelector('body');

    if (body) { setOffsetWidth(body.offsetWidth); }
  }, []);

  return (
    <AuthorLink href="/blog">
      <AuthorContainer>
        <AuthorImage
          src="https://res.cloudinary.com/ddwnioveu/image/upload/v1650924676/profile/photo_2022-03-21_15-43-27_qykura.jpg"
          layout="fixed"
          width={offsetWidth < 1000 ? 40 : 55}
          height={offsetWidth < 1000 ? 40 : 55}
          alt="image from author profile"
          loading="lazy"
          blurDataURL="https://res.cloudinary.com/ddwnioveu/image/upload/v1650924999/profile/author_image_s30zc6.jpg"
          placeholder="blur"
        />
        <h3 className="author">@rwietter</h3>
        <p className="description">
          Software developer and student from the Brazil.
          {' '}
        </p>
      </AuthorContainer>
    </AuthorLink>
  );
};

export { Author };
