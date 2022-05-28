import { useState, useEffect } from 'react';
import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap';
import { ClipIcon, LiteflixLogo } from '../icons';

const AddMyMovie = ({ onHide }) => {
  const [dragArea, setDragArea] = useState(false);
  const [loadImageDrop, setLoadImageDrop] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [view_1, setView_1] = useState(true);
  const [view_2, setView_2] = useState(false);

  const [imageMovie, setImageMovie] = useState('');
  const [titleMovie, setTitleMovie] = useState('');

  const dropImage = event => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file !== undefined) {
      const fileType = file.type;
      const validExtension = ['image/jpeg', 'image/jpg', 'image/png'];

      if (validExtension.includes(fileType)) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = event => {
          setDragArea(true);
          setLoadImageDrop(true);
          setImageMovie(event.target.result);
          validateInputs();
        };
      } else {
        console.log('File not allowed');
      }
    }
  };

  const handleDragEnter = event => {
    event.preventDefault();
    setDragArea(true);
  };

  const handleDragLeave = event => {
    event.preventDefault();
    setDragArea(false);
  };

  const handleTitleMovie = event => {
    setTitleMovie(event.target.value);
  };

  const validateInputs = () => {
    if (imageMovie != '' && titleMovie != '') {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const loadDataLocalStorage = () => {
    if (localStorage.getItem('dataMovie') !== null) {
      const getData = localStorage.getItem('dataMovie');
      const dataMovieLocalStorage = JSON.parse(getData);

      const dataMovie = {
        image: imageMovie,
        title: titleMovie,
      };

      localStorage.setItem(
        'dataMovie',
        JSON.stringify([...dataMovieLocalStorage, dataMovie])
      );
      setView_1(false);
    } else {
      const dataMovie = {
        image: imageMovie,
        title: titleMovie,
      };

      localStorage.setItem('dataMovie', JSON.stringify([dataMovie]));
      setView_1(false);
    }
  };

  useEffect(() => {
    validateInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleMovie, imageMovie, view_1]);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          {(() => {
            if (!view_2) {
              return 'AGREGAR PELÍCULA';
            } else {
              return <LiteflixLogo />;
            }
          })()}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {(() => {
          if (view_1) {
            return (
              <>
                <div
                  onDragEnter={event => handleDragEnter(event)}
                  onDragLeave={event => handleDragLeave(event)}
                  className={'container-drag-drop ' + (dragArea ? 'active' : '')}
                >
                  <h6>
                    <ClipIcon />{' '}
                    {(() => {
                      if (!loadImageDrop) {
                        return (
                          <>
                            <span className="text-add-file">AGREGÁ UN ARCHIVO </span>
                            <span className="text-drag-file">
                              O ARRASTRALO Y SOLTALO AQUÍ
                            </span>
                          </>
                        );
                      } else {
                        return <span className="text-add-file">IMAGEN CARGADA</span>;
                      }
                    })()}
                  </h6>

                  <InputGroup className="mb-3 drop-image">
                    <FormControl
                      type="file"
                      multiple
                      onChange={event => {
                        dropImage(event);
                      }}
                    />
                  </InputGroup>
                </div>

                <InputGroup className="mb-3 input-title">
                  <FormControl
                    placeholder="TÍTULO"
                    onChange={event => {
                      handleTitleMovie(event);
                    }}
                  />
                </InputGroup>
              </>
            );
          }

          if (view_2) {
            return (
              <div className="modal-view-2">
                <div>
                  <div className="loader">
                    <div className="loader-background">
                      <div className="loader-fill"></div>
                    </div>
                  </div>

                  <div className="message wow fadeIn" data-wow-delay="4s">
                    <h4>¡FELICITACIONES!</h4>
                    <p>{titleMovie} FUE CORRECTAMENTE SUBIDA.</p>
                  </div>
                </div>
              </div>
            );
          }
        })()}

        <div className="container-btn-action">
          {(() => {
            if (!view_2) {
              return (
                <Button
                  className="btn-action"
                  disabled={disabledButton}
                  onClick={() => {
                    loadDataLocalStorage();
                    setView_2(true);
                    setTimeout(() => {
                      setDisabledButton(true);
                    }, 100);
                  }}
                >
                  SUBIR PELÍCULA
                </Button>
              );
            } else {
              return (
                <Button
                  onClick={() => {
                    onHide();
                  }}
                  className="btn-action"
                >
                  IR A HOME
                </Button>
              );
            }
          })()}
        </div>
      </Modal.Body>
    </>
  );
};

export default AddMyMovie;
