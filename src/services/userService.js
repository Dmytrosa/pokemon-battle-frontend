import api from './api';


export async function getUserProfile(userId) {
    const res = await api.get('/api/settings/profile', {
        params: {
            userId: userId 
        }
    });
    return res.data;
}

export async function updateUserProfile(updates) {
    const res = await api.patch(`/api/settings/profile`, updates);
    return res.data;
}
