import { useState, useEffect } from 'react';
import { Movie } from '../../interfaces';
import MovieCard from '../commons/MovieCard/MovieCard';
import { EmptyMovies } from './styles';

const MyMovies = () => {
  const [dataLocalStorage, setDataLocalStorage] = useState<Array<Movie>>([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('dataMovie') !== null) {
      const getData = localStorage.getItem('dataMovie');
      const dataMovieLocalStorage = JSON.parse(getData as string);
      setDataLocalStorage(dataMovieLocalStorage);
    }
    setShowData(true);
  }, [showData]);

  const dataDone = () => {
    if (showData) {
      return (
        <>
          {dataLocalStorage.length > 0 ? (
            dataLocalStorage
              .slice(0, 4)
              .map((movie, index) => (
                <MovieCard
                  key={index}
                  title={movie.title}
                  image={movie.image}
                  addedDate={movie.addedDate}
                />
              ))
          ) : (
            <EmptyMovies>
              <h5>Ups! No encontramos nada</h5>
              <p>Agregue una película para poder visualizarla aquí.</p>
            </EmptyMovies>
          )}
        </>
      );
    }
  };

  return <>{dataDone()}</>;
};

export default MyMovies;
