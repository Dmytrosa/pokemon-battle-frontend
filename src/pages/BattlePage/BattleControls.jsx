// src/pages/BattlePage/BattleControls.jsx
import { useContext } from 'react';
import { BattleContext } from '../../context/BattleContext';
import styles from './BattleControls.module.css';

export default function BattleControls({ onLeave }) {
  const { battle, doPlayerAttack, doPlayerAbility, doSurrender } = useContext(BattleContext);
  if (!battle) return null;

  const isBattleFinished = battle.status === 'finished';
  const isPlayerTurn = battle.status === 'player_turn';
  const abilityName = battle.playerPokemon?.abilityName;

  const handleAttack = () => {
    if (!isPlayerTurn) return;
    doPlayerAttack();
  };

  const handleAbility = () => {
    if (!isPlayerTurn) return;
    if (!battle.playerPokemon.canUseAbility) return;
    doPlayerAbility();
  };

  const handleLeaveClick = () => {
    if (isBattleFinished) {
      onLeave?.();
    } else {
      const confirmLeave = window.confirm(
        'If you leave now, you will automatically lose. Are you sure?'
      );
      if (confirmLeave) {
        doSurrender().then(() => {
          onLeave?.();
        });
      }
    }
  };

  return (
    <div className={styles.controlsContainer}>
      {isBattleFinished ? (
        <div className={styles.finishedContainer}>
          <h3>Battle finished!</h3>
          <button onClick={handleLeaveClick} className={styles.backBtn}>
            Back to Selection
          </button>
        </div>
      ) : (
        <>
          <p className={styles.turnInfo}>
            Current Turn: {isPlayerTurn ? 'Player' : 'Computer'}
          </p>
          <button
            onClick={handleAttack}
            disabled={!isPlayerTurn}
            className={isPlayerTurn ? styles.attackBtn : styles.disabledBtn}
          >
            Attack
          </button>

          {abilityName && battle.playerPokemon.canUseAbility && (
            <button
              onClick={handleAbility}
              disabled={!isPlayerTurn}
              className={isPlayerTurn ? styles.abilityBtn : styles.disabledBtn}
            >
              {abilityName}
            </button>
          )}

          <div style={{ marginTop: '16px' }}>
            <button onClick={handleLeaveClick} className={styles.leaveBtn}>
              Leave Battle
            </button>
          </div>
        </>
      )}
    </div>
  );
}
