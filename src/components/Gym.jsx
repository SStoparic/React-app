import React, { useState, useEffect } from 'react';

function Gym({ gym, dodaj, izbaci, mod }) {

  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setIsClicked(true);
    if (mod === 1) {
      dodaj(gym.id); // Dodaj teretanu u favorite
      setMessage('Added to favorites');
      setTimeout(() => {
        setIsClicked(false);
        setMessage('');
      }, 1500); // Ukloni poruku nakon 1.5 sekunde
    } else {
      setMessage('Removed from favorites');
      setTimeout(() => {
        izbaci(gym.id); // Ukloni teretanu iz favorita nakon što se prikaže poruka
      }, 1500); // Ukloni teretanu iz favorita nakon 1.5 sekunde
    }
  };

  useEffect(() => {
    if (isClicked) {
      const timeout = setTimeout(() => {
        setIsClicked(false);
        setMessage('');
      }, 1500); // Prikaz poruke 2 sekunde, a zatim se resetuje stanje
      return () => clearTimeout(timeout);
    }
  }, [isClicked]);

  return (
    <div className="card">
      <img src={gym.slika} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{gym.naziv}</h5>
        <p className="card-text">
          ADDRESS: {gym.adresa} <br />
          MONTHLY PRICE: {gym.cena + 'din'} <br />
          SIZE OF GYM: {gym.povrsina + 'm2'}
        </p>

        <button className={mod === 1 ? 'btnDodaj' : 'btnIzbaci'} onClick={handleClick}>
          {mod === 1 ? 'ADD TO FAVORITES' : 'REMOVE FROM FAVORITES'}
        </button>

        {isClicked && <p style={{ color: 'white', marginLeft: '10px' }}>{message}</p>}
      </div>
    </div>
  );
}

export default Gym;