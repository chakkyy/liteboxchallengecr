import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PopularFilms from '../PopularFilms/PopularFilms';
import MyMovies from '../MyMovies/MyMovies';

const Sidebar = props => {
  const [showPopularFilms, setShowPopularFilms] = useState(true);
  const [showMyMovies, setShowMyMovies] = useState(false);
  const [titleDropdown, setTitleDropdown] = useState('POPULARES');
  const [showDropdown, setShowDropdown] = useState(false);

  const [showCheckPopularFilms, setShowCheckPopularFilms] = useState(true);
  const [showCheckMyMovies, setShowCheckMyMovies] = useState(false);

  const handleShowPopularFilms = () => {
    setShowPopularFilms(true);
    setShowMyMovies(false);
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
    setShowMyMovies(true);
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
    <Container className="p-3">
      <Row className="mt-4 mb-4">
        <div className="dropdown-section wow zoomIn">
          <div
            aria-label="Dropdown closed"
            className="dropdown-movies"
            onClick={handleDropdown}
          >
            <span className="dropdown-title-left">VER: </span>
            <span
              aria-label={`actual dropdown value ${titleDropdown}`}
              className="dropdown-title-right"
            >
              {titleDropdown}
            </span>
            <span className="dropdown-chevron-down">
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L6.54557 6.54557L12.0911 1" stroke="white" strokeWidth="2" />
              </svg>
            </span>
          </div>

          <ul className={'dropdown-options ' + (showDropdown ? 'active' : '')}>
            <li
              aria-label="select popular movies"
              className={showCheckPopularFilms ? 'active' : ''}
              onClick={handleShowPopularFilms}
            >
              POPULARES
            </li>
            <li
              aria-label="select my movies"
              className={showCheckMyMovies ? 'active' : ''}
              onClick={handleShowMyMovies}
            >
              MIS PELÍCULAS
            </li>
          </ul>
        </div>
      </Row>

      <div className={'popular-movies ' + (showPopularFilms ? 'active' : '')}>
        <PopularFilms popularFilms={props.popularFilms} />
      </div>

      {(() => {
        if (showMyMovies) {
          return (
            <div className={'my-movies ' + (showMyMovies ? 'active' : '')}>
              <MyMovies />
            </div>
          );
        }
      })()}
    </Container>
  );
};

export default Sidebar;
