// import { useQuery } from '@apollo/react-hooks';
import Image from 'next/image';
import Link from 'next/link';
import { LastArticles } from 'queries/article/article';
// import { LAST_ARTICLES_QUERY } from 'queries/articles/articles';
import { FC } from 'react';
import {
  LastPostContainer,
  LastPostContainerContent,
  LastPostContainerContentCategory,
  LastPostContainerDescription,
  LastPostContainerImage,
  LastPostContainerLink,
  LastPostToBlog,
} from './styles';

interface LastPostsProps {
  lastArticles: LastArticles;
}

const LastPosts: FC<LastPostsProps> = ({ lastArticles }) => {
  // const { data } = useQuery(LAST_ARTICLES_QUERY);
  const posts = lastArticles?.data;

  if (!posts) return null;

  return (
    <LastPostContainerLink>
      <LastPostContainerDescription>
        <h2>My Last Posts</h2>
        <p>
          Here I share what I learned daily in software development,
          check out my latest articles.
        </p>
      </LastPostContainerDescription>
      {posts.map((post: any) => (
        <Link
          key={post.attributes.slug}
          href={`/blog/article/${post.attributes.slug}`}
          passHref
        >
          <LastPostContainer>
            <LastPostContainerImage>
              <Image
                src={post.attributes.image.data.attributes.url}
                alt={post.attributes.image.url}
                layout="fixed"
                width={80}
                height={80}
                loading="lazy"
                blurDataURL="https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_1280.jpg"
                placeholder="blur"
              />
            </LastPostContainerImage>
            <LastPostContainerContent>
              <div>
                <h1 className="title">{post.attributes.title}</h1>
                <p className="description">{post.attributes.description}</p>
              </div>
              <div>
                <LastPostContainerContentCategory
                  category={post.attributes.category.data.attributes.name}
                >
                  {post.attributes.category.data.attributes.name}
                </LastPostContainerContentCategory>
              </div>
            </LastPostContainerContent>
          </LastPostContainer>
        </Link>
      ))}
      <LastPostToBlog>
        <Link href="/blog">Go to Blog</Link>
      </LastPostToBlog>
    </LastPostContainerLink>
  );
};

export { LastPosts };
