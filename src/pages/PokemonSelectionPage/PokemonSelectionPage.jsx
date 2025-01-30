import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonSelectionContext } from '../../context/PokemonSelectionContext';

import FilterBar from './FilterBar';
import PokemonGrid from './PokemonGrid';
import Pagination from '../../components/Pagination/Pagination';
import styles from './PokemonSelectionPage.module.css';

export default function PokemonSelectionPage() {
    const {
        selectedId,
        doStartBattle,
        loading,
        error,
    } = useContext(PokemonSelectionContext);

    const navigate = useNavigate();

    async function handleStartBattle() {
        if (!selectedId) return;
        const battle = await doStartBattle();
        if (battle && battle.id) {
            navigate('/battle', { state: { battleId: battle.id} });
        }
    }

    if (loading) {
        return <div className={styles.loading}>Loading pokemons...</div>;
    }
    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }
    return (
        <div className={styles.container}>
            <div style={{ display: 'flex', gap: "40px" }}>
                <h2 className={styles.title}>Choose Your Pokémon</h2>
                <h2
                    className={styles.info}
                    title="Reach 3 and 6 wins to unlock the 2nd and 3rd levels of Pokémon evolution, respectively"
                >
                    i
                </h2>            </div>
            <FilterBar onStartBattle={handleStartBattle} />

            <PokemonGrid />

            <Pagination />

        </div>
    );
}
