import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import {useAxios} from '../hooks/useAxios';
import {PokemonProvider} from '../contexts/PokemonContext';
import Pokeman from './Pokeman';

function App() {
  const [state, setUrl] = useAxios('https://pokeapi.co/api/v2/pokemon/1/');

  return (
    <PokemonProvider value={{state, setUrl}}>
      <Route exact path='/' component={Pokeman} />
    </PokemonProvider>
  )
}

export default App;
