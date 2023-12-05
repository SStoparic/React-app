import React, { useState, useEffect } from 'react';
import useCounter from '../customHooks/useCounter';

function Gym({ gym, dodaj, izbaci, mod }) {
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState('');

  const [count, setCount, increaseCount] = useCounter(0); // Promenjeno korišćenje custom hooka

  const handleClick = () => {
    setIsClicked(true);

    if (mod === 1) {
      increaseCount(); // Povećaj broj klikova na dugme
      dodaj(gym.id); // Dodaj teretanu u favorite
      setCount(count + 1); // Ažuriraj vrednost broja klikova
      setMessage(`Added to favorites. Clicks: ${count + 1}`); // Ažuriraj poruku
    } else {
      izbaci(gym.id); // Ukloni teretanu iz favorita
      setMessage('Removed from favorites');
    }

    setTimeout(() => {
      setIsClicked(false);
      setMessage('');
    }, 1500); // Ukloni poruku nakon 1.5 sekunde
  };

  useEffect(() => {
    if (isClicked && mod !== 1) {
      setMessage('Removed from favorites'); // Postavi poruku o izbacivanju
      const timeout = setTimeout(() => {
        setIsClicked(false);
        setMessage('');
      }, 1500); // Prikaz poruke 1.5 sekundi, a zatim se resetuje stanje
      return () => clearTimeout(timeout);
    }
  }, [isClicked, mod, izbaci]);

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