import { useState, useEffect } from 'react';
import MovieCard from '../commons/MovieCard/MovieCard';

const MyMovies = () => {
  const [dataLocalStorage, setDataLocalStorage] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('dataMovie') !== null) {
      const getData = localStorage.getItem('dataMovie');
      const dataMovieLocalStorage = JSON.parse(getData);

      setDataLocalStorage(dataMovieLocalStorage);
    }
    setShowData(true);
  }, [showData, dataLocalStorage]);

  const dataDone = () => {
    if (showData) {
      return (
        <>
          {dataLocalStorage.map((movie, index) => (
            <MovieCard key={index} title={movie.title} image={movie.image} />
          ))}
        </>
      );
    }
  };

  return <>{dataDone()}</>;
};

export default MyMovies;
