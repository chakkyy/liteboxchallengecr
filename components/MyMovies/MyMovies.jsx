import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Row } from 'react-bootstrap';

const MyMovies = () => {
  const [dataLocalStorage, setDataLocalStorage] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('dataMovie') !== null) {
      const getData = localStorage.getItem('dataMovie');
      const dataMovieLocalStorage = JSON.parse(getData);

      setDataLocalStorage([dataMovieLocalStorage]);
    }
    setShowData(true);
  }, [showData]);

  const dataDone = () => {
    if (showData) {
      return (
        <>
          {dataLocalStorage.map((movie, index) => (
            <Row key={index} className="mb-4 wow zoomIn">
              <article className="film-container">
                <Image
                  className="film-image"
                  src={movie.image}
                  alt={movie.title}
                  layout="fill"
                />

                <div className="front-side">
                  <span className="front-side-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="19.5"
                        fill="#242424"
                        fillOpacity="0.5"
                        stroke="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.6484 20.2701L16 13V27L26.6484 20.2701Z"
                        stroke="white"
                      />
                    </svg>
                  </span>

                  <h6 className="front-side-title">{movie.title}</h6>
                </div>
                <div className="back-side"></div>
              </article>
            </Row>
          ))}
        </>
      );
    }
  };

  return <>{dataDone()}</>;
};

export default MyMovies;
