import { NextSEO } from 'components/SEO'
import { BlogPosts } from 'features/blog'
import { GetStaticPaths, GetStaticProps } from 'next'
import CATEGORY_ARTICLES_QUERY from 'queries/category/articles'
import CATEGORIES_QUERY from 'queries/category/categories'
import { FC } from 'react'
import apolloClient from 'utils/apollo-client'

const Category: FC<any> = ({ categories }) => {
  if (!categories) return <div />

  const [attributes] = categories.map((category: any) => category?.attributes)

  return (
    <>
      <NextSEO
        title='Blog | Maurício W. | Software Developer'
        content='blog'
        url='https://rwietterc.xyz/blog'
        description='The category page of the blog. Here, you can find all the articles of the category. :)'
        image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
      />
      <BlogPosts articles={attributes?.articles?.data} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: CATEGORIES_QUERY })
  if (!data) return { paths: [], fallback: true }

  const paths = data?.categories?.data?.map((article: any) => ({
    params: { slug: article?.attributes?.slug },
  }))

  if (!paths) return { paths: [], fallback: true }

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { props: {} }

  const { data } = await apolloClient.query({
    query: CATEGORY_ARTICLES_QUERY,
    variables: { slug: params?.slug },
  })

  if (!data)
    return {
      props: {
        slug: '',
        categories: [],
      },
    }

  return {
    props: {
      slug: params?.slug,
      categories: data?.categories?.data,
    },
    revalidate: 60,
  }
}

export default Category
