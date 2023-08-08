/* eslint-disable react/jsx-one-expression-per-line */

'use client';

import { SidebarSocialIcons } from 'components/Social';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { type FC } from 'react';
import { FiTwitter, FiCoffee } from 'react-icons/fi';
import { GoCommentDiscussion } from 'react-icons/go';

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
    <footer className="pt-7">
      <div className="w-full h-[0.1rem] bg-gray-600" />
      <nav className="flex justify-between items-center py-4">
        <a href={tweetUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <FiTwitter size={14} />
          &nbsp;Tweet this article
        </a>
        <a href={linkToSearchOnTwietter} target="_blank" rel="noreferrer" className="flex items-center space-x-2">
          <GoCommentDiscussion size={14} />
          &nbsp;Discuss on Twitter
        </a>
        <Link href={`/blog/category/${category}`} className="flex items-center space-x-2">
          <FiCoffee size={14} />
          &nbsp;Learn more about {category}
        </Link>
      </nav>
      <div className="w-full h-[0.1rem] bg-gray-600" />
      <div>
        <section className="py-12 flex justify-between">
          <SidebarSocialIcons />
          {author && (
            <h4 className="text-white text-xl">
              Written by <strong>{author}</strong>
            </h4>
          )}
        </section>
      </div>
    </footer>
  );
};

export { ArticleFooter };
