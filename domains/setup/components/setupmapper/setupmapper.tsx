import { type FC } from 'react'

import * as S from './styles'

interface SetupMapperProps {
  title: string
  id: string
  data: any
}

const SetupMapper: FC<SetupMapperProps> = ({ data, title, id }) => (
  <S.SetupMapperContainer>
    <h2 id={id}>{title}</h2>
    <ul>
      {data.map((item: any) => (
        <li key={item.name}>
          <S.SoftwareLink href={item.url} target='_blank' rel='noreferrer'>
            <span>{item.name}</span>: {item.type}
          </S.SoftwareLink>
        </li>
      ))}
    </ul>
  </S.SetupMapperContainer>
)

export { SetupMapper }
