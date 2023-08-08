/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import { SidebarSocialIcons } from 'components/Social';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { type FC } from 'react';
import { FiTwitter, FiCoffee } from 'react-icons/fi';
import { GoCommentDiscussion } from 'react-icons/go';
import * as S from './styles';

interface Props {
  article: any;
}

const ArticleFooter: FC<Props> = ({ article }) => {
  const author = article.attributes?.author?.data?.attributes?.name;
  const category = article.attributes?.category?.data?.attributes?.name;
  const title = article.attributes?.title;

  const pathname = usePathname();
  const tweetUrl = `http://twitter.com/share?text=I just read "${title}"&url=https://rwietterc.xyz${pathname}&hashtags=${category}`;
  const linkToSearchOnTwietter = `https://twitter.com/search?q=https://rwietterc.xyz${pathname}`;

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