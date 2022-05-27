import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Hero = props => {
  return (
    <div className="hero">
      <Image
        className="hero-featured-image"
        src={'https://image.tmdb.org/t/p/original' + props.urlImage}
        alt="hero-featured-image"
        layout="fill"
      />

      <div className="hero-overlay"></div>

      <Container className="hero-container">
        <Row>
          <Col md={8} lg={9} className="align-self-end">
            <section className="hero-content">
              <h6 className="wow fadeInDown">
                ORIGINAL DE <strong>LITEFLIX</strong>
              </h6>
              <h1 className="hero-content-title wow fadeInUp">{props.featuredFilm}</h1>

              <div className="hero-container-buttons">
                <Button className="btn-primary wow slideInUp">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9423 8.2363L2.625 1.875V14.125L11.9423 8.2363Z"
                      stroke="white"
                    />
                  </svg>{' '}
                  Reproducir
                </Button>

                <Button className="btn-secondary wow slideInUp">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.5 0V14" stroke="white" />
                    <path d="M14.5 7L0.5 7" stroke="white" />
                  </svg>{' '}
                  Mi Lista
                </Button>
              </div>
            </section>
          </Col>

          <Col md={4} lg={3}>
            <section className="list-films">
              <Sidebar popularFilms={props.popularFilms} />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
