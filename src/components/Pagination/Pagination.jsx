import React, { useContext } from 'react';
import { PokemonSelectionContext } from '../../context/PokemonSelectionContext';
import styles from './Pagination.module.css';

const Pagination = () => {
    const {
        currentPage,
        pageSize,
        totalPokemons,
        handlePageChange,
    } = useContext(PokemonSelectionContext);

    const totalPages = Math.ceil(totalPokemons / pageSize);

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const handlePageInput = (e) => {
        const page = Number(e.target.value);
        if (page >= 1 && page <= totalPages) {
            handlePageChange(page);
        }
    };

    return (
        <div className={styles.pagination}>
            <button onClick={handlePrevious} disabled={currentPage === 1}>
            {`<`}
            </button>
            <span>
                Page{' '}
                <input
                    type="number"
                    value={currentPage}
                    onChange={handlePageInput}
                    min="1"
                    max={totalPages}
                />{' '}
                {`/`} {totalPages}
            </span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
                {`>`}
            </button>
        </div>
    );
};

export default Pagination;
