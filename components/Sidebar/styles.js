import styled, { keyframes } from 'styled-components';
import { Container } from 'react-bootstrap';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LiteSidebar = styled(Container).attrs(() => ({
  className: 'p-3',
}))`
  ul {
    list-style: none;
  }

  .dropdown-section {
    position: relative;
  }

  .dropdown-movies {
    text-align: center;
    color: #fff;
    cursor: pointer;

    .dropdown-title-left,
    .dropdown-title-right {
      font-size: 18px;
      line-height: 18px;
      letter-spacing: 4px;

      @media (min-width: 768px) and (max-width: 1200px) {
        font-size: 14px;
        line-height: 14px;
      }
    }

    .dropdown-title-right {
      padding-right: 10px;
      font-weight: bold;
    }
  }

  .dropdown-chevron-down {
    position: absolute;
    right: 15px;
  }

  .dropdown-options {
    background-color: #242424;
    position: absolute;
    left: -20px;
    right: 0;
    top: 30px;
    z-index: 999;
    padding: 10px 20px;
    color: #fff;
    display: none;

    &:after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #242424;
      transform: rotate(45deg);
      top: -5px;
      right: 15px;
    }

    li {
      font-size: 16px;
      line-height: 2.1em;
      letter-spacing: 4px;
      cursor: pointer;
      position: relative;
    }

    li.active {
      font-weight: bold;

      &:after {
        content: '';
        background-image: url('assets/icons/check.svg');
        background-size: cover;
        width: 12px;
        height: 10px;
        position: absolute;
        right: 0;
        top: 7px;
      }
    }

    @media (max-width: 767px) {
      left: 0;
    }
  }

  .dropdown-options.active {
    display: block;
    animation: ${fadeIn} 0.3s ease-in-out;
  }

  .popular-movies,
  .my-movies {
    display: none;
  }

  .popular-movies.active,
  .my-movies.active {
    display: block;
    animation: fadeIn 0.5s ease-in-out;
  }
`;
