import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { useForm } from '../hooks/useForm';

import './pokemon.css'

function Pokeman () {
  const callback = () => {
    console.log(values);
    setUrl(`https://pokeapi.co/api/v2/pokemon/${values.number}/`);
  }

  const { state, setUrl } = useContext(PokemonContext);
  const [values, handleChange, handleSubmit] = useForm({number: ''}, callback);

  return (
    <>
      <h1>{state.data.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='number'
          value={values.number}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default Pokeman;
