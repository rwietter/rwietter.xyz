import React from 'react';

import * as S from './styles';

type Posts = {
  attributes: {
    slug: string;
    title: string;
    publishedAt: string;
    category: string;
  }
}

type Props = {
  posts: Posts[];
}

const PostItem: React.FC<Props> = ({ posts }) => (
  <S.PostList>
    {posts?.map((post) => (
      <S.PostListItem
        href={`/posts/post/${post.attributes?.slug}`}
        key={post.attributes.slug}
      >
        {new Date(post.attributes?.publishedAt).toLocaleDateString()}
        {' '}
        —
        {' '}
        {post.attributes?.title}
      </S.PostListItem>
    ))}
  </S.PostList>
);

export { PostItem };
