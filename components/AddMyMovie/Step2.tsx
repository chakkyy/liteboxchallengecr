import React, { useState, useEffect, FC } from 'react';

interface Props {
  titleMovie: string;
  onCancel: () => void;
}

const Step2: FC<Props> = ({ titleMovie, onCancel }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(oldPercentage => {
        const newPercentage = oldPercentage + 10;

        if (newPercentage === 100) {
          clearInterval(interval);
        }

        return newPercentage;
      });
    }, 400);
  }, []);

  return (
    <div className="modal-view-2">
      <div className="modal-view-2-container">
        <div className="loader">
          <p className="loader-percentage">Cargando {percentage}%</p>
          <div className="loader-background">
            <div className="loader-fill"></div>
          </div>
          <div className="cancel-button-container">
            <button className="cancel-button" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </div>

        <div className="message wow fadeIn" data-wow-delay="4s">
          <h4>¡FELICITACIONES!</h4>
          <p className="successful-loaded">{titleMovie} FUE CORRECTAMENTE SUBIDA.</p>
        </div>
      </div>
    </div>
  );
};

export default Step2;
