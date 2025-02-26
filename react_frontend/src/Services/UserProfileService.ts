import api from "../config/Api";

const UserProfileService = {
    getUserProfile: async () => {
        try {
            const response = await api.get("/user/profile");
            return response.data;
        } catch (error) {
            console.error("Error fetching user profile:", error);
            return null;
        }
    },

    updateUserProfile: async (profileData: { name: string; address: string; birthdate: string }) => {
        try {
            const response = await api.put("/user/profile", profileData);
            return response.data;
        } catch (error) {
            console.error("Error updating user profile:", error);
            throw error;
        }
    }
};

export default UserProfileService;
