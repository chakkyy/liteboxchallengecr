import { useState } from 'react';
import Image from 'next/image';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import AddMyMovie from '../AddMyMovie/AddMyMovie';
import { BellIcon, LiteflixLogo, MenuIcon, MobileAddMovieIcon, PlusIcon } from '../icons';

const NavbarTop = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <span className="trigger-modal" onClick={handleShowModal}>
            <MobileAddMovieIcon />
          </span>

          <Navbar.Brand className="wow slideInUp">
            <LiteflixLogo />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link className="wow zoomIn" onClick={handleShowModal}>
              <PlusIcon /> AGREGAR PELÍCULA
            </Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link className="wow zoomIn" href="#">
              <MenuIcon />
            </Nav.Link>

            <Nav.Link href="#" className="wow zoomIn">
              <BellIcon />
            </Nav.Link>

            <Nav.Link className="wow zoomIn" href="#">
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
