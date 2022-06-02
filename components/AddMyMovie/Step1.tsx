import React, { FC } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { ClipIcon } from '../icons';
import { FailedUploadContainer } from './styles';

interface Props {
  loadedImage: boolean;
  failed: boolean;
  dropImage: (event: React.BaseSyntheticEvent) => void;
  handleTitleMovie: (event: React.BaseSyntheticEvent) => void;
  handleRetryUpload: (event: React.MouseEvent<HTMLElement>) => void;
}

const Step1: FC<Props> = ({
  loadedImage,
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
            <strong>¡Error!</strong> No se pudo cargar la pelicula
          </p>
          <div className="error-fill" />
          <button className="retry-button" onClick={handleRetryUpload}>
            Reintentar
          </button>
        </FailedUploadContainer>
      ) : (
        <div className={'container-drag-drop ' + (loadedImage ? 'active' : '')}>
          <h6>
            <ClipIcon />{' '}
            {loadedImage ? (
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
