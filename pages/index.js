import Hero from '../components/layout/Hero/Hero';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import { getFeaturedFilm } from './api/getFeaturedFilm';
import { getPopularFilms } from './api/getPopularFilms';

const Home = props => {
  const { featuredApiFilm, popularApiFilms } = props;

  const featuredFilm = featuredApiFilm.find(film => film.title === 'Scream');
  const popularFilms = popularApiFilms.slice(0, 4);

  return (
    <MainLayout
      description="Liteflix is a technical challenge for Litebox.ai"
      title="Liteflix | Home"
    >
      <Hero
        featuredFilm={featuredFilm.title}
        urlImage={featuredFilm.backdrop_path}
        popularFilms={popularFilms}
      />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const featuredApiFilm = await getFeaturedFilm();
  const popularApiFilms = await getPopularFilms();

  return {
    props: {
      featuredApiFilm: featuredApiFilm.results,
      popularApiFilms: popularApiFilms.results,
    },
  };
}

export default Home;
