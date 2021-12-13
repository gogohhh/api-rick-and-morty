import React, {useEffect, useState} from 'react';
import Header from './components/Header.jsx';
import Characters from './components/Characters.jsx';
import Paginacion from './components/Paginacion.jsx';


function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = 'https://rickandmortyapi.com/api/character'

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.error('Error: ', error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(url);
  }, [])

  return (
    <div>
      <Header brand="Rick and Morty App"/>
      <Paginacion prev={info.prev} next={info.prev} onPrevious={onPrevious} onNext={onNext} />
      <Characters characters={characters}/>

    </div>
  );
}

export default App;
