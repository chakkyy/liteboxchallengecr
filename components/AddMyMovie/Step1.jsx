import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { ClipIcon } from '../icons';
import { FailedUploadContainer } from './styles';

const Step1 = ({
  handleDragEnter,
  handleDragLeave,
  dragArea,
  loadImageDrop,
  dropImage,
  handleTitleMovie,
  failed,
  handleRetryUpload,
}) => {
  return (
    <>
      {failed ? (
        <FailedUploadContainer>
          <p>
            <strong>Error!</strong> Tipo de archivo no permitido, la imagen debe ser
            formato jpg o png.
          </p>
          <div className="error-fill" />
          <button className="retry-button" onClick={handleRetryUpload}>
            Reintentar
          </button>
        </FailedUploadContainer>
      ) : (
        <div
          onDragEnter={event => handleDragEnter(event)}
          onDragLeave={event => handleDragLeave(event)}
          className={'container-drag-drop ' + (dragArea ? 'active' : '')}
        >
          <h6>
            <ClipIcon />{' '}
            {loadImageDrop ? (
              <span className="text-add-file">IMAGEN CARGADA</span>
            ) : (
              <>
                <span className="text-add-file">AGREGÁ UN ARCHIVO </span>
                <span className="text-drag-file">O ARRASTRALO Y SOLTALO AQUÍ</span>
              </>
            )}
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
      )}
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
};

export default Step1;
