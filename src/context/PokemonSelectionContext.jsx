import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllPokemons } from '../services/pokemonService';
import { SettingsContext } from './SettingsContext';
import { startBattle } from '../services/battleService';

export const PokemonSelectionContext = createContext(null);

export function PokemonSelectionProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = useContext(SettingsContext);
  const userLang = userData?.language || 'english';

  const parseQueryParams = (search) => {
    const params = new URLSearchParams(search);
    return {
      searchTerm: params.get('search') || '',
      selectedType: params.get('type') || 'All',
      sortKey: params.get('sortKey') || 'none',
      sortDirection: params.get('sortDirection') || 'asc',
      selectedId: params.get('selectedId') ? parseInt(params.get('selectedId'), 10) : null,
      currentPage: params.get('page') ? parseInt(params.get('page'), 10) : 1,
    };
  };

  const initialParams = parseQueryParams(location.search);

  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialParams.searchTerm);
  const [selectedType, setSelectedType] = useState(initialParams.selectedType);
  const [selectedId, setSelectedId] = useState(initialParams.selectedId);
  const [sortKey, setSortKey] = useState(initialParams.sortKey);
  const [sortDirection, setSortDirection] = useState(initialParams.sortDirection);
  const [currentPage, setCurrentPage] = useState(initialParams.currentPage);
  const [pageSize, setPageSize] = useState(50);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateURL = () => {
    const params = new URLSearchParams();

    if (searchTerm) params.set('search', searchTerm);
    if (selectedType && selectedType !== 'All') params.set('type', selectedType);
    if (sortKey && sortKey !== 'none') {
      params.set('sortKey', sortKey);
      params.set('sortDirection', sortDirection);
    }

    if (currentPage !== 1) params.set('page', currentPage);

    navigate(`?${params.toString()}`, { replace: true });
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (searchTerm) params.append('search', searchTerm);
        if (selectedType && selectedType !== 'All') params.append('type', selectedType);
        if (sortKey && sortKey !== 'none') {
          params.append('sortKey', sortKey);
          params.append('sortDirection', sortDirection);
        }
        params.append('page', currentPage);
        params.append('searchLang', userLang);

        if (selectedId) params.append('selectedId', selectedId);
        const userId = localStorage.getItem("userId")

        const data = await getAllPokemons(params.toString(), userId);

        setPokemons(data.pokemons);
        setTotalPokemons(data.pagination.total);
        setPageSize(data.pagination.limit);
      } catch (err) {
        console.error(err);
        setError('Failed to load pokemons');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [searchTerm, selectedType, sortKey, sortDirection, currentPage]);

  useEffect(() => {
    updateURL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, selectedType, sortKey, sortDirection, currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      const params = parseQueryParams(window.location.search);
      setSearchTerm(params.searchTerm);
      setSelectedType(params.selectedType);
      setSortKey(params.sortKey);
      setSortDirection(params.sortDirection);
      setCurrentPage(params.currentPage);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handlers
  const handleSearchChange = (val) => setSearchTerm(val);
  const handleTypeChange = (val) => setSelectedType(val);
  const handleSortKeyChange = (val) => setSortKey(val);
  const handleSortDirectionChange = (val) => setSortDirection(val);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('All');
    setSortKey('none');
    setSortDirection('asc');
    setCurrentPage(1);
  };

  const selectPokemon = (id) => {
    if (selectedId === id) setSelectedId(null);
    else setSelectedId(id);
  };

  async function doStartBattle() {
    if (!selectedId) return null;
    try {
      setLoading(true);
      const userId = localStorage.getItem("userId")
      const battle = await startBattle(selectedId, userId);
      return battle;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  const filteredPokemons = pokemons;

  const value = {
    pokemons,
    filteredPokemons,
    searchTerm,
    selectedType,
    selectedId,
    sortKey,
    sortDirection,
    currentPage,
    pageSize,
    totalPokemons,
    handleSearchChange,
    handleTypeChange,
    handleSortKeyChange,
    handleSortDirectionChange,
    handlePageChange,
    resetFilters,
    selectPokemon,
    doStartBattle,
    loading,
    error,
    userLang:userData.language,
  };

  return (
    <PokemonSelectionContext.Provider value={value}>
      {children}
    </PokemonSelectionContext.Provider>
  );
}
