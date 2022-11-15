import Image from 'next/image';
import Link from 'next/link';
import { LastArticles } from 'queries/article/article';
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
                alt={`Image from article "${post.attributes.title}"`}
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
