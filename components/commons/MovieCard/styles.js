import styled from 'styled-components';

export const MovieCardContainer = styled.article.attrs(() => ({
  className: 'row mb-4 wow zoomIn',
}))`
  position: relative;
  height: 140px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    .film-image {
      transform: scale(1.2);
    }
    .front-side {
      display: none;
    }
    .back-side {
      display: block;
      animation: fadeIn 0.5s ease-in-out;
    }
  }

  .film-image {
    object-fit: cover;
    object-position: center;
    transition: all 1s ease-in-out;
  }

  .front-side {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;

    .front-side-icon {
      position: absolute;
      top: calc(50% - 20px);
      left: calc(50% - 20px);
    }
    h6 {
      color: #fff;
      text-align: center;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 4px;
      margin-top: 85px;
    }
  }

  .back-side {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    background: rgba(36, 36, 36, 0.7);
    display: none;
    .back-side-container-title {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .back-side-title {
      color: #fff;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 4px;
      width: calc(100% - 24px);
      padding-left: 10px;
      margin-bottom: 0;
    }

    .back-side-average {
      position: absolute;
      left: 15px;
      bottom: 15px;
      color: #fff;
      font-weight: normal;
      font-size: 14px;
      line-height: 12px;
      letter-spacing: 2px;
    }

    .back-side-year {
      position: absolute;
      right: 15px;
      bottom: 15px;
      color: #fff;
      font-weight: normal;
      font-size: 14px;
      line-height: 12px;
      letter-spacing: 2px;
    }
    .back-side-icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      background-image: url('assets/icons/play-circle.svg');
      background-size: cover;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-image: url('assets/icons/play-hover.svg');
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .front-side h6 {
      font-size: 12px;
      line-height: 12px;
      margin-top: 90px;
    }

    .back-side .back-side-title {
      font-size: 12px;
    }
  }
`;
