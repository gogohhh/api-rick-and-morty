import React, {useEffect, useState} from 'react';
import Header from './components/Header.jsx';
import Characters from './components/Characters.jsx';


function App() {

  const [characters, setCharacters] = useState([]);

  const url = 'https://rickandmortyapi.com/api/character'

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error: ', error))
  };

  useEffect(() => {
    fetchCharacters(url);
  }, [])

  return (
    <div>
      <Header brand="Rick and Morty App"/>

      <Characters characters={characters}/>
    </div>
  );
}

export default App;
