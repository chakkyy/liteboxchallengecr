import React, { useState, useEffect, FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { LiteflixLogo } from '../icons';
import Step1 from './Step1';
import Step2 from './Step2';

interface Props {
  onHide: () => void;
}

const AddMyMovie: FC<Props> = ({ onHide }) => {
  const [loadedImage, setLoadedImage] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [step, setStep] = useState('step1');
  const [newMovie, setNewMovie] = useState({ image: '', title: '', addedDate: '' });
  const [failed, setFailed] = useState(false);

  const dropImage = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    const file = event.target.files[0];

    if (file !== null) {
      const fileType = file.type;
      const validExtension = ['image/jpeg', 'image/jpg', 'image/png'];

      if (validExtension.includes(fileType)) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = (event: ProgressEvent<FileReader>) => {
          setLoadedImage(true);
          setNewMovie({ ...newMovie, image: event?.target?.result as string });
          validateInputs();
        };
      } else {
        setFailed(true);
      }
    }
  };

  const handleTitleMovie = (event: React.BaseSyntheticEvent) => {
    setNewMovie({ ...newMovie, title: event.target.value });
  };

  const validateInputs = () => {
    if (newMovie.image != '' && newMovie.title != '') {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const handleRetryUpload = () => {
    setFailed(false);
    setLoadedImage(false);
  };

  const handleCancel = () => {
    setNewMovie({ image: '', title: '', addedDate: '' });
    setStep('step1');
    setLoadedImage(false);
    deleteLastItemInStorage();
  };

  const deleteLastItemInStorage = () => {
    const array = JSON.parse(localStorage.getItem('dataMovie') || '[]');
    const newArray = array.reverse().slice(0, array.length - 1);
    localStorage.setItem('dataMovie', JSON.stringify(newArray.reverse()));
  };

  const loadDataLocalStorage = () => {
    const date = new Date();
    const dataMovie = {
      ...newMovie,
      addedDate: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    };

    if (localStorage.getItem('dataMovie') !== null) {
      const getData = localStorage.getItem('dataMovie');
      const dataMovieLocalStorage = JSON.parse(getData as string);

      localStorage.setItem(
        'dataMovie',
        JSON.stringify([dataMovie, ...dataMovieLocalStorage])
      );
    } else {
      localStorage.setItem('dataMovie', JSON.stringify([dataMovie]));
    }
    setStep('step2');
  };

  useEffect(() => {
    validateInputs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMovie]);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          {step === 'step1' ? 'AGREGAR PELÍCULA' : <LiteflixLogo />}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {step === 'step1' ? (
          <Step1
            loadedImage={loadedImage}
            dropImage={dropImage}
            handleTitleMovie={handleTitleMovie}
            failed={failed}
            handleRetryUpload={handleRetryUpload}
          />
        ) : (
          <Step2 onCancel={handleCancel} titleMovie={newMovie.title} />
        )}
        <div className="container-btn-action">
          {step === 'step1' ? (
            <Button
              className="btn-action"
              disabled={disabledButton}
              onClick={() => {
                loadDataLocalStorage();
                setStep('step2');
              }}
            >
              SUBIR PELÍCULA
            </Button>
          ) : (
            <Button
              onClick={() => {
                onHide();
              }}
              className="btn-action message wow fadeIn"
              data-wow-delay="4s"
            >
              IR A HOME
            </Button>
          )}
        </div>
      </Modal.Body>
    </>
  );
};

export default AddMyMovie;
