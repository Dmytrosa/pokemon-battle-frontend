import React, { useContext } from 'react';
import { PokemonSelectionContext } from '../../context/PokemonSelectionContext';
import styles from './FilterBar.module.css';

export default function FilterBar({ onStartBattle }) {
  const {
    searchTerm, selectedType, sortKey, sortDirection, selectedId,
    handleSearchChange, handleTypeChange, handleSortKeyChange, handleSortDirectionChange,
    resetFilters,
    filteredPokemons
  } = useContext(PokemonSelectionContext);

  const allTypes = ['All'];
  filteredPokemons.forEach((p) => {
    if (p.type) {
      p.type.forEach((t) => {
        if (!allTypes.includes(t)) {
          allTypes.push(t);
        }
      });
    }
  });

  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
        className={styles.input}
      />

      <select
        value={selectedType}
        onChange={(e) => handleTypeChange(e.target.value)}
        className={styles.select}
      >
        {allTypes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <select
        value={sortKey}
        onChange={(e) => handleSortKeyChange(e.target.value)}
        className={styles.select}
      >
        <option value="none">Sort: None</option>
        <option value="HP">Sort by HP</option>
        <option value="Attack">Sort by Attack</option>
        <option value="Defense">Sort by Defense</option>
        <option value="Speed">Sort by Speed</option>
      </select>

      <select
        value={sortDirection}
        onChange={(e) => handleSortDirectionChange(e.target.value)}
        className={styles.select}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <button onClick={resetFilters} className={styles.resetBtn}>
        Reset
      </button>

      <button
        className={selectedId ? styles.startBtn : styles.startBtnDisabled}
        onClick={onStartBattle}
        disabled={!selectedId}
      >
        Start Battle
      </button>
    </div>
  );
}
