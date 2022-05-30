import React, { useState, useEffect } from 'react';

const Step2 = ({ titleMovie }) => {
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
      <div>
        <p>Cargando {percentage}%</p>
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
};

export default Step2;
