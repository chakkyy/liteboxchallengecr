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
  const [imageMovie, setImageMovie] = useState('');
  const [titleMovie, setTitleMovie] = useState('');
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
          setImageMovie(event?.target?.result as string);
          validateInputs();
        };
      } else {
        setFailed(true);
      }
    }
  };

  const handleTitleMovie = (event: React.BaseSyntheticEvent) => {
    console.log('🚀 ~ file: AddMyMovie.tsx ~ line 40 ~ handleTitleMovie ~ event', event);
    setTitleMovie(event.target.value);
  };

  const validateInputs = () => {
    if (imageMovie != '' && titleMovie != '') {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  const handleRetryUpload = () => {
    setFailed(false);
    setLoadedImage(false);
  };

  const loadDataLocalStorage = () => {
    let date = new Date();
    const dataMovie = {
      image: imageMovie,
      title: titleMovie,
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
  }, [titleMovie, imageMovie, Step1]);

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
          <Step2 titleMovie={titleMovie} />
        )}
        <div className="container-btn-action">
          {step === 'step1' ? (
            <Button
              className="btn-action"
              disabled={disabledButton}
              onClick={() => {
                loadDataLocalStorage();
                setStep('step2');
                setTimeout(() => {
                  setDisabledButton(true);
                }, 100);
              }}
            >
              SUBIR PELÍCULA
            </Button>
          ) : (
            <Button
              onClick={() => {
                onHide();
              }}
              className="btn-action"
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
