import MovieCard from '../commons/MovieCard/MovieCard';

const PopularFilms = ({ popularFilms }) => {
  return (
    <>
      {popularFilms.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          backdrop_path={movie.backdrop_path}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
        />
      ))}
    </>
  );
};

export default PopularFilms;
