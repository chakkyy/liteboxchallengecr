import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = props => {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.heroFeaturedImage}
        src={'https://image.tmdb.org/t/p/original' + props.urlImage}
        layout="fill"
        alt="hero-featured-image"
      />
      <div className="hero-overlay"></div>

      <section className="hero-content">
        <h1 className="hero-title">{props.featuredFilm}</h1>
      </section>
    </div>
  );
};

export default Hero;
