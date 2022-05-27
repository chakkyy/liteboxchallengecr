import { useState, useEffect } from 'react';
import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap';

const AddMyMovie = () => {
  const [dragArea, setDragArea] = useState(false);
  const [loadImageDrop, setLoadImageDrop] = useState(false);

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
        };
      } else {
        console.log('Archivo no permitido');
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

  const loadDataLocalStorage = () => {
    const data = {
      image: imageMovie,
      title: titleMovie,
    };

    localStorage.setItem('dataMovie', JSON.stringify(data));
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>AGREGAR PELÍCULA</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div
          onDragEnter={event => handleDragEnter(event)}
          onDragLeave={event => handleDragLeave(event)}
          className={'container-drag-drop ' + (dragArea ? 'active' : '')}
        >
          <h6>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082Z"
                fill="white"
              />
              <path
                d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082"
                stroke="white"
              />
            </svg>{' '}
            {(() => {
              if (!loadImageDrop) {
                return (
                  <>
                    <span className="text-add-file">AGREGÁ UN ARCHIVO </span>
                    <span className="text-drag-file">O ARRASTRALO Y SOLTALO AQUÍ</span>
                  </>
                );
              } else {
                return <span className="text-drag-file">IMAGEN CARGADA</span>;
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
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={loadDataLocalStorage}>SUBIR PELÍCULA</Button>
      </Modal.Footer>
    </>
  );
};

export default AddMyMovie;
