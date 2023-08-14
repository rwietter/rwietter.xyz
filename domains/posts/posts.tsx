import React, { PropsWithChildren } from 'react';

import * as S from './styles';

type Props = PropsWithChildren<{}>;

const Posts: React.FC<Props> = ({ children }) => (
  <S.PostsContainer>
    {children}
  </S.PostsContainer>
);

export { Posts };
