import { KbarInit } from 'components/Kbar'
import type { RecentTrackProps } from 'components/Lastfm/types'
import { NextSEO } from 'components/SEO'
import type { WeatherProps } from 'components/Weather/weather'
import { ContentLayout } from 'features/ui/layouts'
import type { GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { fetcherLastFm, fetcherWeather } from 'services'

const AuthorContent = dynamic(() => import('features/home/author-content'), {
  ssr: true,
})

const AuthorHeader = dynamic(() => import('features/home/author-header'), {
  ssr: true,
})

interface HomeProps {
  lastFm: RecentTrackProps
  weather: WeatherProps
}

const Home: NextPage<HomeProps> = ({ lastFm, weather }) => (
  <>
    <NextSEO
      title='Mauricio Witter | Software Developer'
      content='website'
      url='https://rwietterc.xyz'
      canonical='https://rwietterc.xyz/'
      description='This blog is about my journey as a Software Developer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it.'
      image='https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png'
    />
    <ContentLayout>
      <AuthorHeader />
      <AuthorContent lastFm={lastFm} weather={weather} />
      <KbarInit />
    </ContentLayout>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  try {
    const lastFm = await fetcherLastFm()
    const weather = await fetcherWeather()

    return {
      props: {
        lastFm,
        weather,
      },
      revalidate: 3600, // 1 hour
    }
  } catch (error) {
    return {
      props: {
        lastFm: null,
        weather: null,
      },
    }
  }
}

export default Home
