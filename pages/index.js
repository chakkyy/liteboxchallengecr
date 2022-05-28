import Hero from '../components/Hero/Hero';
import MainLayout from '../components/MainLayout/MainLayout';

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
  const urlFeaturedFilm = `${process.env.NEXT_PUBLIC_FEATURED_API_URL}api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const resFeaturedFilm = await fetch(urlFeaturedFilm);
  const dataFeaturedFilm = await resFeaturedFilm.json();

  const urlPopularFilms = `${process.env.NEXT_PUBLIC_POPULAR_API_URL}api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const resPopularFilms = await fetch(urlPopularFilms);
  const dataPopularFilms = await resPopularFilms.json();

  return {
    props: {
      featuredApiFilm: dataFeaturedFilm.results,
      popularApiFilms: dataPopularFilms.results,
    },
  };
}

export default Home;
