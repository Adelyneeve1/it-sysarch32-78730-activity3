import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [lang, setLang] = useState('english');

  useEffect(() => {
    fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((el) => ({
          ...el,
          Stats: el.base,
          Name: el.name[lang],
        }));

        setPokemons(newData);
      });
  }, [lang]);

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <main>
      <div className="change_language">
        <button value="english" onClick={handleLanguageChange}>
          English
        </button>
        <button value="japanese" onClick={handleLanguageChange}>
          Japanese
        </button>
        <button value="chinese" onClick={handleLanguageChange}>
          Chinese
        </button>
        <button value="french" onClick={handleLanguageChange}>
          French
        </button>
      </div>

      <ul className="pokedex">
        {pokemons.map((el) => (
          <Pokemon key={el.id} {...el} />
        ))}
      </ul>
    </main>
  );
};

export default Pokedex;