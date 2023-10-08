/* eslint-disable react/prop-types */
import SEO from 'components/SEO';
import type { GetStaticProps, NextPage } from 'next';
import { ContentLayout } from 'features/ui/layouts';
import { AuthorContent, AuthorHeader } from 'features/home';
import { Container } from 'features/home/styles';
import { KbarInit } from 'components/Kbar';
import { fetcherLastFm, fetcherWeather } from 'services';
import type { RecentTrackProps } from 'components/Lastfm/types';
import type { WeatherProps } from 'components/Weather/weather';

interface HomeProps {
  lastFm: RecentTrackProps;
  weather: WeatherProps;
}

const Home: NextPage<HomeProps> = ({ lastFm, weather }) => (
  <>
    <SEO
      title="Mauricio Witter | Software Engineer"
      content="website"
      url="https://rwietterc.xyz"
      description="This blog is about my journey as a Software Engineer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it."
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <ContentLayout layout="small">
      <Container>
        <AuthorHeader />
        <AuthorContent lastFm={lastFm} weather={weather} />
        <KbarInit />
      </Container>
    </ContentLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const lastFm = await fetcherLastFm();
    const weather = await fetcherWeather();

    return {
      props: {
        lastFm,
        weather,
      },
      revalidate: 120,
    };
  } catch (error) {
    return {
      props: {
        lastFm: null,
        weather: null,
      },
    };
  }
};

export default Home;
