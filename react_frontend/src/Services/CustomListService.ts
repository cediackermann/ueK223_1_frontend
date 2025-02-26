import api from "../config/Api";

const CustomListService = {
    getListEntries: async () => {
        try {
            const response = await api.get("/user/list");
            return response.data.map((entry: any) => ({
                id: String(entry.id), // Ensure ID is always treated as a string
                newTitle: entry.title,
                newText: entry.text
            }));
        } catch (error) {
            console.error("Error fetching list entries:", error);
            return [];
        }
    },

    addListEntry: async (entry: { newTitle: string; newText: string }) => {
        try {
            const response = await api.post("/user/list", entry);
            return response.data;
        } catch (error) {
            console.error("Error adding new list entry:", error);
        }
    },
};

export default CustomListService;