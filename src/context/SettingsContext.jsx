import React, { createContext, useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/userService';

export const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {

    const [userData, setUserData] = useState({});
    const [editData, setEditData] = useState(userData || {});
    const [isEditing, setIsEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const [errorUser, setErrorUser] = useState(null);


    useEffect(() => {
        const fetchProfile = async () => {

            try {
                setLoadingUser(true);
                const userId = localStorage.getItem("userId")
                const profile = await getUserProfile(userId);
                const wins = profile.wins;

                let skillLevel;

                if (wins <= 3) {
                    skillLevel = 1;
                } else if (wins <= 5) {
                    skillLevel = 2;
                } else {
                    skillLevel = 3;
                }

                profile.skillLevel = skillLevel;
                setUserData(profile);
                setLoadingUser(false);
            } catch (err) {
                setErrorUser('Failed to load user data');
                setLoadingUser(false);
            }
        }
        fetchProfile();
    }, []);

    useEffect(() => {
        if (userData) {
            setEditData(userData);
        }
    }, [userData]);

    const updateUserData = (newData) => {
        setUserData(newData);
    };


    function handleEdit() {
        setEditData({ ...userData });
        setIsEditing(true);
        setMessage(null);
        setError(null);
    }

    function handleCancel() {
        setEditData({ ...userData });
        setIsEditing(false);
        setMessage(null);
        setError(null);
    }

    function handleChange(name, value) {
        setEditData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSave() {
        try {
            setSaving(true);
            setMessage(null);
            setError(null);

            const updates = {
                username: editData.username,
                favoritePokemon: editData.favoritePokemon,
                language: editData.language,
            };
            const userId = localStorage.getItem("userId")
            updates.userId = userId
            const updatedProfile = await updateUserProfile(updates);
            const { address, nonce, id, ...profileToUpdated } = updatedProfile.user
            let skillLevel;
            const wins = updatedProfile.user
            if (wins <= 2) {
                skillLevel = 1;
            } else if (wins <= 5) {
                skillLevel = 2;
            } else {
                skillLevel = 3;
            }
            profileToUpdated.skillLevel = skillLevel
            updateUserData(profileToUpdated);

            setEditData(updatedProfile);
            setIsEditing(false);
            setSaving(false);
            setMessage('Profile updated successfully!');
        } catch (err) {
            console.error(err);
            setError('Failed to save profile');
            setSaving(false);
        }
    }

    const value = {
        editData,
        isEditing,
        saving,
        error,
        message,
        handleEdit,
        handleCancel,
        handleChange,
        handleSave,
        userData,
        loadingUser,
        errorUser,
        updateUserData,
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
}
