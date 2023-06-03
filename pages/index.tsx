import SEO from 'components/SEO';
// import { LastPosts } from 'features/site/last-posts';
// import { LAST_ARTICLES_QUERY } from 'queries/articles/articles';
// import apolloClient from 'utils/apollo-client';
import type { GetStaticProps, NextPage } from 'next';
import { ContentLayout } from 'features/ui/layouts';
import type { LastArticles } from 'queries/article/article';
import { AuthorContent, AuthorHeader } from 'features/home';
import { Container } from 'features/home/styles';

interface HomeProps {
  lastArticles?: LastArticles;
  lastFm: any;
  weather: any;
}

const Home: NextPage<HomeProps> = ({ lastFm, weather }: any) => (
  <>
    <SEO
      title="Mauricio Witter | Software Engineer"
      content="website"
      url="https://rwietter.xyz"
      description="This blog is about my journey as a Software Engineer. Here do you find my thoughts, ideas, and experiences. I hope you enjoy it."
      image="https://res.cloudinary.com/ddwnioveu/image/upload/v1651191166/profile/wallhaven-dpo7wm_1366x768_mdztjw.png"
    />
    <ContentLayout layout="small">
      <Container>
        <AuthorHeader />
        <AuthorContent lastFm={lastFm} weather={weather} />
        {/* <LastPosts lastArticles={lastArticles} /> */}
      </Container>
    </ContentLayout>
  </>
);

const USERNAME = process.env.LASTFM_USERNAME!;
const API_KEY = process.env.LASTFM_API_KEY!;
const API_LAST_FM = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;
const fetcherLastFm = () => fetch(API_LAST_FM).then((res) => res.json());

const API_WEATHER = `https://dataservice.accuweather.com/currentconditions/v1/${process.env.ACCUWEATHER_CITY_ID}?apikey=${process.env.ACCUWEATHER_API_KEY}`;
const fetcherWeather = () => fetch(API_WEATHER).then((res) => res.json());

export const getStaticProps: GetStaticProps = async () => {
  // const data = await apolloClient.query({
  //   query: LAST_ARTICLES_QUERY,
  // });

  const lastFm = await fetcherLastFm();
  const weather = await fetcherWeather();

  return {
    props: {
      // lastArticles: data.data.articles,
      lastFm,
      weather,
    },
    revalidate: 60,
  };
};

export default Home;
