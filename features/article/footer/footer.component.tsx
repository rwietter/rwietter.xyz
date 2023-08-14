/* eslint-disable react/jsx-one-expression-per-line */
import { SidebarSocialIcons } from 'components/StickyBar/Social';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { type FC } from 'react';
import { FiTwitter, FiCoffee } from 'react-icons/fi';
import { GoCommentDiscussion } from 'react-icons/go';
import * as S from './styles';

interface ArticleFooterProps {
  author: string;
  name: string;
  category: string;
}

const ArticleFooter: FC<ArticleFooterProps> = ({
  author, category, name,
}) => {
  const { asPath } = useRouter();
  const tweetUrl = `http://twitter.com/share?text=I just read "${name}"&url=https://rwietterc.xyz${asPath}&hashtags=${category}`;
  const linkToSearchOnTwietter = `https://twitter.com/search?q=https://rwietterc.xyz${asPath}`;
  return (
    <S.ArticleFooterContainer>
      <S.Separator />
      <S.NavHeader>
        <a href={tweetUrl} target="_blank" rel="noreferrer">
          <FiTwitter size={14} />&nbsp;Tweet this article
        </a>
        <a href={linkToSearchOnTwietter} target="_blank" rel="noreferrer">
          <GoCommentDiscussion size={14} />&nbsp;Discuss on Twitter
        </a>
        <Link href={`/blog/category/${category}`}>
          <FiCoffee size={14} />&nbsp;Learn more about {category}
        </Link>
      </S.NavHeader>
      <S.Separator />
      <div>
        <S.SocialContainer>
          <SidebarSocialIcons />
          {author && <h4>Written by <strong>{author}</strong></h4>}
        </S.SocialContainer>
      </div>
    </S.ArticleFooterContainer>
  );
};

export { ArticleFooter };
