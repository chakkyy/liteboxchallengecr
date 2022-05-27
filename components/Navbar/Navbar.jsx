import { useState } from 'react';
import Image from 'next/image';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import AddMyMovie from '../AddMyMovie/AddMyMovie';

const NavbarTop = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <span className="trigger-modal" onClick={handleShowModal}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="white" />
              <path d="M18.0001 10.4516V25.5484" stroke="white" strokeLinecap="square" />
              <path d="M25.5483 18L10.4516 18" stroke="white" strokeLinecap="square" />
            </svg>
          </span>

          <Navbar.Brand className="wow slideInUp" aria-label="Liteflix logo">
            <svg
              width="111"
              height="24"
              viewBox="0 0 111 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.36 24H10.254V20.6H4.1V0.199998H0.36V24ZM15.8815 24H19.6215V0.199998H15.8815V24ZM25.2681 3.6H29.1781V24H32.9181V3.6H36.8281V0.199998H25.2681V3.6ZM46.2152 3.6H52.6752V0.199998H42.4752V24H52.6752V20.6H46.2152V13.63H51.3492V10.23H46.2152V3.6ZM60.5568 11.794V1.628H68.0368V0.199998H58.9928V24H60.5568V13.222H66.7108V11.794H60.5568ZM83.4587 24V22.572H75.9787V0.199998H74.4147V24H83.4587ZM89.8034 0.199998V24H91.3674V0.199998H89.8034ZM108.967 24H110.633L105.295 11.658L110.293 0.199998H108.797L104.275 10.434L99.7866 0.199998H98.1546L103.153 11.658L97.7806 24H99.3106L104.139 12.916L108.967 24Z"
                fill="#64EEBC"
              />
            </svg>
          </Navbar.Brand>

          <Nav className="me-auto">
            <ul>
              <li>
                <Nav.Link
                  aria-label="Agregar pelicula"
                  className="wow zoomIn"
                  onClick={handleShowModal}
                >
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
                  AGREGAR PELÍCULA
                </Nav.Link>
              </li>
            </ul>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link className="wow zoomIn" href="#" aria-label="hamburger menu">
              <svg
                width="27"
                height="14"
                viewBox="0 0 27 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H27" stroke="white" />
                <path d="M0 7H27" stroke="white" />
                <path d="M10 13H27" stroke="white" />
              </svg>
            </Nav.Link>

            <Nav.Link href="#" aria-label="notifications bell" className="wow zoomIn">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8 8.66661C20.8 6.69643 19.9783 4.80694 18.5155 3.41382C17.0527 2.02069 15.0687 1.23804 13 1.23804C10.9314 1.23804 8.9474 2.02069 7.48462 3.41382C6.02183 4.80694 5.20005 6.69643 5.20005 8.66661C5.20005 17.3333 1.30005 19.8095 1.30005 19.8095H24.7C24.7 19.8095 20.8 17.3333 20.8 8.66661Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.249 23.5238C15.0204 23.899 14.6924 24.2105 14.2977 24.427C13.903 24.6435 13.4555 24.7575 13 24.7575C12.5445 24.7575 12.097 24.6435 11.7023 24.427C11.3076 24.2105 10.9795 23.899 10.751 23.5238"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="20.5" cy="5.5" r="4.5" fill="#64EEBC" />
              </svg>
            </Nav.Link>

            <Nav.Link className="wow zoomIn" href="#" aria-label="user profile settings">
              <Image
                src="/assets/icons/userIcon.png"
                alt="icon-perfil"
                width={40}
                height={40}
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal
        size="lg"
        className="wow slideInUp"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={handleCloseModal}
      >
        <AddMyMovie onHide={handleCloseModal} />
      </Modal>
    </>
  );
};

export default NavbarTop;
