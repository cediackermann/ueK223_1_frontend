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

  updateUserProfile: async (profileData: {
    name: string;
    address: string;
    birthdate: string;
  }) => {
    try {
      const response = await api.put("/user/profile", profileData);
      return response.data;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  },

  // Neue Methode: Alle UserProfiles abrufen (nur für Admins)
  getAllUserProfiles: async (
    size?: number,
    page?: number,
    sorting?: string,
    orderBy?: string
  ) => {
    try {
      let url = "/userprofile";
      if (
        size !== undefined &&
        page !== undefined &&
        sorting !== undefined &&
        orderBy !== undefined
      ) {
        url += `?size=${size}&page=${page}&sort=${sorting},${orderBy}`;
      }
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching all user profiles:", error);
      throw error;
    }
  },

  // Neue Methode: Einzelnes UserProfile abrufen (Admin-Zugriff)
  getUserProfileById: async (userId: string) => {
    try {
      const response = await api.get(`/userprofile/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile by ID:", error);
      throw error;
    }
  },

  // Neue Methode: UserProfile löschen (Admin-Zugriff)
  deleteUserProfile: async (userId: string) => {
    try {
      await api.delete(`/userprofile/${userId}`);
    } catch (error) {
      console.error("Error deleting user profile:", error);
      throw error;
    }
  },
};

export default UserProfileService;
