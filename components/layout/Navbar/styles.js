import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export const LiteNavbar = styled(Navbar)`
  position: absolute;
  width: 100%;
  top: 32px;
  z-index: 999;
  background-color: transparent !important;

  .trigger-modal {
    cursor: pointer;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  .nav-link {
    color: #fff !important;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 4px;
    outline: none !important;
  }

  .ml-auto.navbar-nav {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-link {
      margin-left: 12px;
    }
  }

  @media (max-width: 767px) {
    top: 24px;
  }

  @media (max-width: 1023px) {
    .navbar-brand {
      position: absolute;
      left: calc(50% - 55.5px);
    }
    .me-auto.navbar-nav .nav-link:nth-child(1) {
      display: none !important;
    }
    .nav-link:nth-child(1),
    .nav-link:nth-child(2) {
      display: none !important;
    }
  }
`;
