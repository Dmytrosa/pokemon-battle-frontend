import React, { useContext } from 'react';
import { BattleContext } from '../../context/BattleContext';
import styles from './BattleArena.module.css';
import { SettingsContext } from '../../context/SettingsContext';

export default function BattleArena() {
  const { battle } = useContext(BattleContext);
  const { userData } = useContext(SettingsContext);
  const userLang = userData?.language || 'english';

  if (!battle) return null;

  const { playerPokemon, enemyPokemon, playerCurrentHP, enemyCurrentHP } = battle;
  debugger
  
  return (
    <div className={styles.arena}>
      <div className={styles.side}>
        <h3 className={styles.name}>{playerPokemon.name?.[userLang]}</h3>
        <img src={playerPokemon.image.hires} alt={playerPokemon.name?.[userLang]} className={styles.image} />
        <div className={styles.hpBarContainer}>
          <div
            className={styles.hpBar}
            style={{ width: `${(playerCurrentHP / playerPokemon.base.HP) * 100}%` }}
          />
        </div>
        <p>{`HP: ${playerCurrentHP} / ${playerPokemon.base.HP}`}</p>
        <p>Attack: {playerPokemon.base.Attack}</p>
        <p>Defense: {playerPokemon.base.Defense}</p>
        <p>Speed: {playerPokemon.base.Speed}</p>
      </div>

      <div className={styles.vs}>VS</div>

      <div className={styles.side}>
        <h3 className={styles.name}>{enemyPokemon.name?.[userLang]}</h3>
        <img src={enemyPokemon.image.hires} alt={enemyPokemon.name?.[userLang]} className={styles.image} />
        <div className={styles.hpBarContainer}>
          <div
            className={`${styles.hpBar} ${styles.enemyHp}`}
            style={{ width: `${(enemyCurrentHP / enemyPokemon.base.HP) * 100}%` }}
          />
        </div>
        <p>{`HP: ${enemyCurrentHP} / ${enemyPokemon.base.HP}`}</p>
        <p>Attack: {enemyPokemon.base.Attack}</p>
        <p>Defense: {enemyPokemon.base.Defense}</p>
        <p>Speed: {enemyPokemon.base.Speed}</p>
      </div>
    </div>
  );
}
