import { FC, ReactNode } from 'react';
import { BlogContainerPosts } from './styles';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => (
  <BlogContainerPosts>
    {children}
  </BlogContainerPosts>
);

export { BlogLayout };
