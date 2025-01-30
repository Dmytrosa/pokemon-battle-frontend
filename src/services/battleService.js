import api from './api';


export async function getBattleState(battleId) {
  // GET /api/battles/:battleId
  const res = await api.get(`/api/battle/${battleId}`);
  return res.data; // { status, player, enemy, logs, ...}
} 

export async function startBattle(selectedPokemonId, userId) {
  // POST /api/battles { playerPokemonId: selectedPokemonId }
  const res = await api.post('/api/battle/create', {
    playerPokemonId: selectedPokemonId,
    userId,
  });
  return res.data; // { battleId, ... }
}



export async function playerAttack(battleId) {
  // POST /api/battles/:battleId/action
  const res = await api.post(`/api/battle/${battleId}/action`, { action: 'attack' });
  return res.data;
}


export async function autoAttack(battleId) {
  // POST /api/battles/:battleId/action
  const res = await api.post(`/api/battle/${battleId}/auto-attack`);
  return res.data;
}


export async function playerAbilityAttack(battleId) {
  const res = await api.post(`/api/battle/${battleId}/action`, { action: 'ability' });
  return res.data;
}

export async function computerAttack(battleId) {
  const res = await api.post(`/api/battle/${battleId}/auto-attack`);
  return res.data;
}

export async function surrenderBattle(battleId) {
  // POST /api/battles/:battleId/surrender
  const res = await api.post(`/api/battle/${battleId}/surrender`);
  return res.data;
}
