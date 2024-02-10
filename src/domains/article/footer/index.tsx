'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { FiCoffee, FiTwitter } from 'react-icons/fi'
import { GoCommentDiscussion } from 'react-icons/go'
import { SidebarSocialIcons } from 'src/components/StickyBar/Social'
import * as S from './styles'

interface ArticleFooterProps {
  author: string
  name: string
  category: string
}

const ArticleFooter: FC<ArticleFooterProps> = ({ author, category, name }) => {
  const pathname = usePathname()
  const { t } = useTranslation()

  const tweetUrl = `http://twitter.com/share?text=${t(
    'article.justRead',
  )} "${name}"&url=https://rwietterc.xyz${pathname}&hashtags=${category}`

  const linkToSearchOnTwietter = `https://twitter.com/search?q=https://rwietterc.xyz${pathname}`

  return (
    <S.ArticleFooterContainer>
      <S.Separator />
      <S.NavHeader>
        <a href={tweetUrl} target='_blank' rel='noreferrer'>
          <FiTwitter size={14} />
          &nbsp;{t('article.shareOnTwitter')}
        </a>
        <a href={linkToSearchOnTwietter} target='_blank' rel='noreferrer'>
          <GoCommentDiscussion size={14} />
          &nbsp;{t('article.joinTheDiscussion')}
        </a>
        {category && (
          <Link href={`/blog/category/${category}`}>
            <FiCoffee size={14} />
            &nbsp;{t('article.moreIn')} {category}
          </Link>
        )}
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
            {t('article.writtenBy')} <strong>{author}</strong>
          </h4>
        )}
      </S.SocialContainer>
    </S.ArticleFooterContainer>
  )
}

export default memo(ArticleFooter)
