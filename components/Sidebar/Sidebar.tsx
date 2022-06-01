import { useState, FC } from 'react';
import { Row } from 'react-bootstrap';
import PopularFilms from '../PopularFilms/PopularFilms';
import MyMovies from '../MyMovies/MyMovies';
import { ChevronDownIcon } from '../icons';
import { LiteSidebar } from './styles';
import { Movie } from '../../interfaces';

interface Props {
  popularFilms: Movie[];
}

const Sidebar: FC<Props> = ({ popularFilms }) => {
  const [showPopularFilms, setShowPopularFilms] = useState(true);
  const [titleDropdown, setTitleDropdown] = useState('POPULARES');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCheckPopularFilms, setShowCheckPopularFilms] = useState(true);
  const [showCheckMyMovies, setShowCheckMyMovies] = useState(false);

  const handleShowPopularFilms = () => {
    setShowPopularFilms(true);
    setTitleDropdown('POPULARES');
    setShowDropdown(false);
    setShowCheckMyMovies(false);

    if (!showCheckPopularFilms) {
      setShowCheckPopularFilms(true);
    } else {
      setShowCheckPopularFilms(false);
    }
  };

  const handleShowMyMovies = () => {
    setShowPopularFilms(false);
    setTitleDropdown('MIS PELÍCULAS');
    setShowDropdown(false);
    setShowCheckPopularFilms(false);

    if (!showCheckMyMovies) {
      setShowCheckMyMovies(true);
    } else {
      setShowCheckMyMovies(false);
    }
  };

  const handleDropdown = () => {
    if (!showDropdown) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  return (
    <LiteSidebar>
      <Row className="mt-4 mb-4">
        <div className="dropdown-section wow zoomIn">
          <div className="dropdown-movies" onClick={handleDropdown}>
            <span className="dropdown-title-left">VER: </span>
            <span className="dropdown-title-right">{titleDropdown}</span>
            <span className="dropdown-chevron-down">
              <ChevronDownIcon />
            </span>
          </div>

          <ul className={'dropdown-options ' + (showDropdown ? 'active' : '')}>
            <li
              className={showCheckPopularFilms ? 'active' : ''}
              onClick={handleShowPopularFilms}
            >
              POPULARES
            </li>
            <li
              className={showCheckMyMovies ? 'active' : ''}
              onClick={handleShowMyMovies}
            >
              MIS PELÍCULAS
            </li>
          </ul>
        </div>
      </Row>
      {showPopularFilms ? (
        <div className="popular-movies active">
          <PopularFilms popularFilms={popularFilms} />
        </div>
      ) : (
        <div className="my-movies active">
          <MyMovies />
        </div>
      )}
    </LiteSidebar>
  );
};

export default Sidebar;
