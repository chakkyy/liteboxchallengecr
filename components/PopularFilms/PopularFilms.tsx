import { FC } from 'react';
import { Movie } from '../../interfaces';
import MovieCard from '../commons/MovieCard/MovieCard';

interface Props {
  popularFilms: Movie[];
}

const PopularFilms: FC<Props> = ({ popularFilms }) => {
  return (
    <>
      {popularFilms.map((movie, index) => (
        <MovieCard
          key={index}
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
