import { SidebarSocialIcons } from 'src/shared/Social';

type AuthorProps = {
  name: string;
  biography: string;
  avatar: string;
};

export const author: AuthorProps = {
  name: 'Maurício',
  biography:
    'I\'m a brazilian Software Developer, student and a writer. I\'m currently working as a Fullstack Developer. I love to write about my experiences and contribute to the community.',
  avatar: 'https://i.pravatar.cc/150?img=1',
};

const Author = () => (
  <div>
    <h1 className="text-5xl font-bold">{author.name}</h1>
    <h2 className="text-xl max-w-3xl font-light pt-4">{author.biography}</h2>
    <div className="pt-4">
      <SidebarSocialIcons />
    </div>
  </div>
);

export { Author };
