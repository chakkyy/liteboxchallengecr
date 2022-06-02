import { Movie } from '../../interfaces';
import MovieCard from '../commons/MovieCard/MovieCard';
import { EmptyMovies } from './styles';

const MyMovies = () => {
  const getData = localStorage.getItem('dataMovie');
  const dataParsed = JSON.parse(getData as string);

  const showMovies = () => {
    return dataParsed
      .slice(0, 4)
      .map((movie: Movie, index: number) => (
        <MovieCard
          key={index}
          title={movie.title}
          image={movie.image}
          addedDate={movie.addedDate}
        />
      ));
  };

  return (
    <>
      {dataParsed?.length > 0 ? (
        showMovies()
      ) : (
        <EmptyMovies>
          <h5>Ups! No encontramos nada</h5>
          <p>Agregue una película para poder visualizarla aquí.</p>
        </EmptyMovies>
      )}
    </>
  );
};

export default MyMovies;
