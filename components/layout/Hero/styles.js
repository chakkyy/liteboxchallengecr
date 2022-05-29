import styled, { keyframes } from 'styled-components';

const heroAnimation = keyframes`
  0% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

export const LiteHero = styled.div`
  position: relative;
  background-color: #242424;
  height: 932px;

  .hero-featured-image {
    object-fit: cover;
    object-position: 50% 0;
    animation: ${heroAnimation} ease-in-out 5s;
  }

  .hero-overlay {
    position: absolute !important;
    bottom: -1px;
    height: 193px;
    width: 100%;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
  }

  .hero-container {
    padding-top: 152px;
  }

  .hero-content {
    position: relative;
    margin-bottom: 200px;

    h1 {
      font-weight: bold;
      font-size: calc(7em + 1vh);
      line-height: 1em;
      letter-spacing: 16px;
      text-transform: uppercase;
      color: #64eebc;
      word-break: break-word;
    }

    h6 {
      font-weight: normal;
      font-size: 20px;
      line-height: 20px;
      color: #fff;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    //.hero-content media
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-bottom: 150px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      h1 {
        font-size: calc(4em + 1vh);
      }
    }

    @media (max-width: 317px) {
      h1 {
        font-size: calc(2em + 1vh);
      }
    }
  }

  .hero-container-buttons {
    margin-top: 25px;

    .btn-primary,
    .btn-secondary {
      text-transform: uppercase;
      border-radius: 0;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 4px;
      color: #fff;
      width: 248px;
      height: 56px;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(0.95);
      }

      &:focus {
        box-shadow: none;
      }
    }

    .btn-primary {
      margin-right: 10px;
      background-color: #242424;
      border: none;
    }

    .btn-secondary {
      margin-left: 10px;
      background: rgba(36, 36, 36, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    //buttons media
    @media (max-width: 991px) {
      .btn-primary,
      .btn-secondary {
        margin: 0;
        width: 100%;
      }

      .btn-primary {
        margin-bottom: 10px;
      }
    }
  }

  //.hero media
  @media (max-width: 767px) {
    height: 585px;

    .hero-featured-image {
      object-position: 40% 0;
    }

    .hero-content {
      margin-top: 100px;
      margin-bottom: 0;

      h1 {
        font-size: calc(3em + 1vh);
        text-align: center;
        letter-spacing: 12px;
      }

      h6 {
        text-align: center;
      }
    }
  }

  .list-films {
    position: relative;
    min-height: 774px;
  }
`;
