import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BattleProvider } from '../../context/BattleContext';
import BattleArena from './BattleArena';
import BattleLogs from './BattleLogs';
import BattleControls from './BattleControls';

import styles from './BattlePage.module.css';

export default function BattlePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [battleId, setBattleId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { battleId: stateBattleId } = location.state || {};
    if (!stateBattleId) {
      navigate('/pokemon-selection');
      return;
    }
    setBattleId(stateBattleId);
  }, [location.state, navigate]);

  const [isBattleOngoing, setIsBattleOngoing] = useState(true);
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isBattleOngoing) {
        e.preventDefault();
        e.returnValue = 'If you leave the battle now, you will automatically lose!';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isBattleOngoing]);

  const handleLeave = useCallback(() => {
    navigate('/pokemon-selection');
  }, [navigate]);

  if (!battleId) {
    return null; 
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pokémon Battle</h2>

      <BattleProvider
        battleId={battleId}
        onError={setError}
        onLoadingChange={setLoading}
      >
        {error && (
          <div className={styles.errorBlock}>
            <p>Error: {error}</p>
          </div>
        )}
        {loading && <div className={styles.loading}>Loading...</div>}

        <BattleArena />
        <BattleLogs />

        <BattleControls onLeave={handleLeave} />
      </BattleProvider>
    </div>
  );
}
