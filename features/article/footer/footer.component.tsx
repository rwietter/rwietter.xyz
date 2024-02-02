import { SidebarSocialIcons } from 'components/StickyBar/Social'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { type FC } from 'react'
import { FiCoffee, FiTwitter } from 'react-icons/fi'
import { GoCommentDiscussion } from 'react-icons/go'
import * as S from './styles'

interface ArticleFooterProps {
  author: string
  name: string
  category: string
}

const ArticleFooter: FC<ArticleFooterProps> = ({ author, category, name }) => {
  const { asPath } = useRouter()
  const tweetUrl = `http://twitter.com/share?text=I just read "${name}"&url=https://rwietterc.xyz${asPath}&hashtags=${category}`
  const linkToSearchOnTwietter = `https://twitter.com/search?q=https://rwietterc.xyz${asPath}`
  return (
    <S.ArticleFooterContainer>
      <S.Separator />
      <S.NavHeader>
        <a href={tweetUrl} target='_blank' rel='noreferrer'>
          <FiTwitter size={14} />
          &nbsp;Tweet this article
        </a>
        <a href={linkToSearchOnTwietter} target='_blank' rel='noreferrer'>
          <GoCommentDiscussion size={14} />
          &nbsp;Discuss on Twitter
        </a>
        <Link href={`/blog/category/${category}`}>
          <FiCoffee size={14} />
          &nbsp;Learn more about {category}
        </Link>
      </S.NavHeader>
      <S.Separator />
      <S.SocialContainer>
        <SidebarSocialIcons />
        <S.License
          href='https://github.com/rwietter/rwietter.xyz#CC-BY-SA-4.0-2'
          target='_blank'
          rel='noreferrer'
        >
          CC-BY-SA-4.0
        </S.License>
        {author && (
          <h4>
            Written by <strong>{author}</strong>
          </h4>
        )}
      </S.SocialContainer>
    </S.ArticleFooterContainer>
  )
}

export { ArticleFooter }
