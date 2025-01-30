import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import styles from './SettingsPage.module.css';

export default function SettingsPage() {
  const {
    userData,
    editData,
    isEditing,
    loading,
    saving,
    error,
    message,
    handleEdit,
    handleCancel,
    handleChange,
    handleSave,
  } = useContext(SettingsContext);

  if (loading) {
    return <div className={styles.loading}>Loading user profile...</div>;
  }
  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  const { username, wins, losses, favoritePokemon, language, skillLevel } = userData;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Settings</h2>

      {message && <div className={styles.successMsg}>{message}</div>}
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.card}>
        {isEditing ? (
          <>
            {/* Edit mode */}
            <div className={styles.fieldRow}>
              <label className={styles.label}>Name:</label>
              <input
                type="text"
                name="username"
                value={editData.username}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={styles.input}
              />
            </div>

            {/* Wins & Losses - readOnly */}
            <div className={styles.fieldRow}>
              <label className={styles.label}>Wins:</label>
              <span className={styles.readonlyValue}>{wins}</span>
            </div>
            <div className={styles.fieldRow}>
              <label className={styles.label}>Losses:</label>
              <span className={styles.readonlyValue}>{losses}</span>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.label}>Favorite Pokemon:</label>
              <input
                type="text"
                name="favoritePokemon"
                value={editData.favoritePokemon}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.label}>Language:</label>
              <select
                name="language"
                value={editData.language}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={styles.select}
              >
                <option value="english">English</option>
                <option value="japanese">Japanese</option>
                <option value="chinese">Chinese</option>
                <option value="french">French</option>
              </select>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.label}>Skill Level (1-3):</label>
              <span className={styles.readonlyValue}>{skillLevel}</span>
            </div>

            <div className={styles.buttonRow}>
              <button onClick={handleCancel} className={styles.cancelBtn}>
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className={saving ? styles.saveBtnDisabled : styles.saveBtn}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* View mode */}
            <div className={styles.fieldRow}>
              <label className={styles.label}>Name:</label>
              <span className={styles.readonlyValue}>{username}</span>
            </div>


            <div className={styles.fieldRow}>
              <label className={styles.label}>Wins:</label>
              <span className={styles.readonlyValue}>{wins}</span>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.label}>Losses:</label>
              <span className={styles.readonlyValue}>{losses}</span>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.label}>Favorite Pokemon:</label>
              <span className={styles.readonlyValue}>{favoritePokemon}</span>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.label}>Language:</label>
              <span className={styles.readonlyValue}>{language}</span>
            </div>

            <div className={styles.fieldRow}>
              <label className={styles.label}>Skill Level (1-3):</label>
              <span className={styles.readonlyValue}>{skillLevel}</span>
            </div>

            <div className={styles.buttonRow}>
              <button onClick={handleEdit} className={styles.editBtn}>
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
