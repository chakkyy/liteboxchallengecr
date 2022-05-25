import Hero from '../components/Hero/Hero';
import MainLayout from '../components/MainLayout';

const Home = props => {
  const dataFeaturedFilm = props.featuredFilm;
  const featuredFilm = dataFeaturedFilm.slice(-1);

  const dataPopularFilms = props.popularFilms;
  const popularFilms = dataPopularFilms.slice(0, 4);

  return (
    <MainLayout
      description="Liteflix is a technical challenge for Litebox.ai"
      title="Liteflix | Home"
    >
      <Hero
        featuredFilm={featuredFilm[0].title}
        urlImage={featuredFilm[0].backdrop_path}
      />
      {popularFilms.map(item => {
        console.log('--- Data Popular Films ---');
        console.log(item);
      })}
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const urlFeaturedFilm = `${process.env.NEXT_PUBLIC_FEATURED_API_URL}api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const urlPopularFilms = `${process.env.NEXT_PUBLIC_POPULAR_API_URL}api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const resFeaturedFilm = await fetch(urlFeaturedFilm);
  const dataFeaturedFilm = await resFeaturedFilm.json();

  const resPopularFilms = await fetch(urlPopularFilms);
  const dataPopularFilms = await resPopularFilms.json();

  return {
    props: {
      featuredFilm: dataFeaturedFilm.results,
      popularFilms: dataPopularFilms.results,
    },
  };
}

export default Home;
