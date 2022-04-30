/* eslint-disable react/jsx-one-expression-per-line */
import { SOCIAL_LINKS } from 'data/social-links';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FiTwitter, FiCoffee } from 'react-icons/fi';
import { GoCommentDiscussion } from 'react-icons/go';
import {
  ArticleFooterContainer, NavHeader, Separator, SocialContainer,
} from './styles';

interface ArticleFooterProps {
  author: string;
  name: string;
  category: string;
}

const ArticleFooter: FC<ArticleFooterProps> = ({
  author, category, name,
}) => {
  const { asPath } = useRouter();
  const tweetUrl = `http://twitter.com/share?text=I just read "${name}"&url=https://dev.rwietter.xyz${asPath}&hashtags=${category}`;
  const linkToSearchOnTwietter = `https://twitter.com/search?q=https://dev.rwietter.xyz${asPath}`;
  return (
    <ArticleFooterContainer>
      <Separator />
      <NavHeader>
        <a href={tweetUrl} target="_blank" rel="noreferrer">
          <FiTwitter size={14} />&nbsp;Tweet this article
        </a>
        <a href={linkToSearchOnTwietter} target="_blank" rel="noreferrer">
          <GoCommentDiscussion size={14} />&nbsp;Discuss on Twitter
        </a>
        <Link href={`/blog/category/${category}`}>
          <span>
            <FiCoffee size={14} />&nbsp;Learn more about {category}
          </span>
        </Link>
      </NavHeader>
      <Separator />
      <div>
        <SocialContainer>
          <span>
            {SOCIAL_LINKS?.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{ link.icon }</a>
            ))}
          </span>
          {author && <h4>Written by <strong>{ author }</strong></h4>}
        </SocialContainer>
      </div>
    </ArticleFooterContainer>
  );
};

export { ArticleFooter };
