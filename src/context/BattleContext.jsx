import React, { createContext, useState, useEffect, useCallback } from 'react';
import {
  getBattleState,
  playerAttack,
  playerAbilityAttack,
  surrenderBattle
} from '../services/battleService';

export const BattleContext = createContext(null);

export function BattleProvider({ battleId, children, onError, onLoadingChange }) {
  const [battle, setBattle] = useState(null);

  useEffect(() => {
    if (!battleId) return;

    const timer = setTimeout(async () => {
      try {
        onLoadingChange?.(true);
        const data = await getBattleState(battleId);

        const result = data.playerPokemon.profile.ability?.find(item => item[1] === "true");

        const abilityName = result ? result[0] : null;
        data.playerPokemon.canUseAbility = true
        data.playerPokemon.abilityName = abilityName
        setBattle(data);
        onLoadingChange?.(false);
      } catch (err) {
        console.error(err);
        onError?.('Failed to load battle');
        onLoadingChange?.(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [battleId, onError, onLoadingChange]);

  const doPlayerAttack = useCallback(async () => {
    if (!battle) return;
    try {
      onLoadingChange?.(true);
      const updated = await playerAttack(battleId);

      setTimeout(() => {
        setBattle(updated);
        onLoadingChange?.(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      onError?.(err.message);
      onLoadingChange?.(false);
    }
  }, [battle, battleId, onError, onLoadingChange]);

  const doPlayerAbility = useCallback(async () => {
    if (!battle) return;
    try {
      onLoadingChange?.(true);
      const updated = await playerAbilityAttack(battleId);

      setTimeout(() => {
        updated.playerPokemon.canUseAbility = false
        setBattle(updated);
        onLoadingChange?.(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      onError?.(err.message);
      onLoadingChange?.(false);
    }
  }, [battle, battleId, onError, onLoadingChange]);

  const doSurrender = useCallback(async () => {
    if (!battle) return;
    try {
      onLoadingChange?.(true);
      const updated = await surrenderBattle(battleId);

      setTimeout(() => {
        setBattle(updated);
        onLoadingChange?.(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      onError?.('Failed to surrender');
      onLoadingChange?.(false);
    }
  }, [battle, battleId, onError, onLoadingChange]);

  const value = {
    battle,
    setBattle,
    doPlayerAttack,
    doPlayerAbility,
    doSurrender
  };

  return (
    <BattleContext.Provider value={value}>
      {children}
    </BattleContext.Provider>
  );
}
