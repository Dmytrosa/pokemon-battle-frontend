import api from './api';

export async function getAllPokemons(queryParams, userId) {
  // GET /api/pokemons
  const res = await api.post(`/api/pokemon?${queryParams}`, {userId});
  return res.data;
}
