<<<<<<< HEAD
import { SidebarSocialIcons } from 'components/Social';
import * as S from './styles';
=======
import { SidebarSocialIcons } from 'src/shared/Social';
>>>>>>> 145ecd6 (refactor: rsc)

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
<<<<<<< HEAD
  <S.Container>
    <h1>{author.name}</h1>
    <h2>{author.biography}</h2>
    <S.SocialContainer>
      <SidebarSocialIcons />
    </S.SocialContainer>
  </S.Container>
=======
  <div>
    <h1 className="text-5xl font-bold">{author.name}</h1>
    <h2 className="text-xl max-w-3xl font-light pt-4">{author.biography}</h2>
    <div className="pt-4">
      <SidebarSocialIcons />
    </div>
  </div>
>>>>>>> 145ecd6 (refactor: rsc)
);

export { Author };
