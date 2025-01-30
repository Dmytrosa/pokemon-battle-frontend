import React, { useContext } from 'react';
import styles from './PokemonCard.module.css';
import { PokemonSelectionContext } from '../../context/PokemonSelectionContext';

const TYPE_STYLES = {
    Grass: { bg: '#DEFDE0', text: '#000' },
    Fire: { bg: '#FDDFDF', text: '#000' },
    Water: { bg: '#DEF3FD', text: '#000' },
    Bug: { bg: '#F8D5A3', text: '#000' },
    Normal: { bg: '#F5F5F5', text: '#000' },
    Poison: { bg: '#70559b', text: '#fff' },
    Electric: { bg: '#FCF7DE', text: '#000' },
    Ground: { bg: '#f4e7da', text: '#000' },
    Rock: { bg: '#d5d5d4', text: '#000' },
    Ghost: { bg: '#70559b', text: '#fff' },
    Psychic: { bg: '#eaeda1', text: '#000' },
    Fighting: { bg: '#E6E0D4', text: '#000' },
    Flying: { bg: '#F5F5F5', text: '#000' },
    Dragon: { bg: '#97b3e6', text: '#000' },
    Fairy: { bg: '#fceaff', text: '#000' },
    default: { bg: '#fff', text: '#000' },
};

// отримати стиль за першим типом
function getStyleByTypes(types = []) {
  if (types.length > 0) {
    const primaryType = types[0];
    return TYPE_STYLES[primaryType] || TYPE_STYLES.default;
  }
  return TYPE_STYLES.default;
}

export default function PokemonCard({ pokemon, isSelected, onSelect }) {
  const { id, name, type, base, image } = pokemon;
  const { userLang  } = useContext(PokemonSelectionContext);

  const { bg, text } = getStyleByTypes(type || []);
  const cardStyle = {
    backgroundColor: bg,
    color: text,
    transform: isSelected ? 'scale(1.05)' : 'scale(1)',
    borderColor: isSelected ? '#333' : '#ccc',
  };

  const hp = base?.HP ?? 0;
  const atk = base?.Attack ?? 0;
  const def = base?.Defense ?? 0;
  const spd = base?.Speed ?? 0;
  return (
    <div className={styles.card} style={cardStyle} onClick={onSelect}>
      <img
        src={image?.hires || image?.thumbnail}
        alt={name?.[userLang] || '???'}
        className={styles.image}
      />
      <h3 className={styles.name}>{name?.[userLang]}</h3>
      <p className={styles.type}>Type: {type?.join(', ')}</p>
      <div className={styles.stats}>
        <p>HP: {hp}</p>
        <p>Attack: {atk}</p>
        <p>Defense: {def}</p>
        <p>Speed: {spd}</p>
      </div>
    </div>
  );
}
