import { FC } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import { PlayIcon, PlusIcon } from '../../icons';
import { LiteHero } from './styles';
import { Movie } from '../../../interfaces';

interface Props {
  featuredFilm?: Movie;
  popularFilms: Movie[];
}

const Hero: FC<Props> = ({ featuredFilm, popularFilms }) => {
  return (
    <LiteHero>
      <Image
        className="hero-featured-image"
        src={'https://image.tmdb.org/t/p/original' + featuredFilm?.backdrop_path}
        alt="hero-featured-image"
        layout="fill"
        loading="lazy"
      />

      <div className="hero-overlay"></div>

      <Container className="hero-container">
        <Row>
          <Col md={8} lg={9} className="align-self-end">
            <section className="hero-content">
              <h6 className="wow fadeInDown">
                ORIGINAL DE <strong>LITEFLIX</strong>
              </h6>
              <h1 className="hero-content-title wow fadeInUp">{featuredFilm?.title}</h1>

              <div className="hero-container-buttons">
                <Button className="btn-primary wow slideInUp">
                  <PlayIcon /> Reproducir
                </Button>

                <Button className="btn-secondary wow slideInUp">
                  <PlusIcon /> Mi Lista
                </Button>
              </div>
            </section>
          </Col>

          <Col md={4} lg={3}>
            <section className="list-films">
              <Sidebar popularFilms={popularFilms} />
            </section>
          </Col>
        </Row>
      </Container>
    </LiteHero>
  );
};

export default Hero;
