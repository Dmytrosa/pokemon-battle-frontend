import React, { useContext } from 'react';
import { BattleContext } from '../../context/BattleContext';
import styles from './BattleLogs.module.css';

export default function BattleLogs() {
  const { battle } = useContext(BattleContext);
  if (!battle) return null;

  return (
    <div className={styles.logContainer}>
      {battle.logs.map((line, idx) => (
        <p key={idx} className={styles.logLine}>
          {line}
        </p>
      ))}
    </div>
  );
}
