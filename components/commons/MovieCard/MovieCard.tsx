import { FC } from 'react';
import Image from 'next/image';
import { CirclePlayIcon, StarIcon } from '../../icons';
import { MovieCardContainer } from './styles';
import { Movie } from '../../../interfaces';

const MovieCard: FC<Movie> = ({
  title,
  image,
  backdrop_path,
  vote_average,
  release_date,
  addedDate,
}) => {
  return (
    <MovieCardContainer>
      <Image
        className="film-image"
        src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : image}
        alt={title}
        layout="fill"
        loading="lazy"
      />

      <div className="front-side">
        <span className="front-side-icon">
          <CirclePlayIcon />
        </span>

        <h6 className="front-side-title">{title}</h6>
      </div>

      <div className="back-side">
        <div className="back-side-container-title">
          <span className="back-side-icon" />
          <h6 className="back-side-title">{title}</h6>
        </div>
        {vote_average && (
          <span className="back-side-average">
            <StarIcon /> {vote_average}
          </span>
        )}
        {release_date ? (
          <span className="back-side-year">{release_date.slice(0, 4)}</span>
        ) : (
          <span className="back-side-average">{`Añadido: ${addedDate}`}</span>
        )}
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
