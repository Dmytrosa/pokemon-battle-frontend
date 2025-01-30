import React, { useContext } from 'react';
import { PokemonSelectionContext } from '../../context/PokemonSelectionContext';
import PokemonCard from './PokemonCard';
import styles from './PokemonGrid.module.css';

export default function PokemonGrid() {
  const { filteredPokemons, selectedId, selectPokemon } = useContext(PokemonSelectionContext);

  return (
    <div className={styles.grid}>
      {filteredPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isSelected={selectedId === pokemon._id}
          onSelect={() => selectPokemon(pokemon._id)}
        />
      ))}
    </div>
  );
}
