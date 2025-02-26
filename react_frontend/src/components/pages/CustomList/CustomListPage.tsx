import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import CustomListService from '../../../Services/CustomListService';

interface ListEntry {
    id: string;
    newTitle: string;
    newText: string;
}

const CustomListPage = () => {
    const [listEntries, setListEntries] = useState<ListEntry[]>([]);

    useEffect(() => {
        const fetchListEntries = async () => {
            const entries = await CustomListService.getListEntries();
            setListEntries(entries);
        };
        fetchListEntries();
    }, []);

    const handleAddEntry = async () => {
        const newEntry = { newTitle: "New Entry", newText: "This is a new entry" };
        await CustomListService.addListEntry(newEntry);
        const updatedEntries = await CustomListService.getListEntries();
        setListEntries(updatedEntries);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h4">Updated List Title</Typography>
            <List>
                {listEntries.map((entry) => (
                    <ListItem key={entry.id}>
                        <ListItemText primary={entry.newTitle} secondary={entry.newText} />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" style={{ marginTop: 10 }} onClick={handleAddEntry}>
                Add New Entry
            </Button>
        </Box>
    );
};

export default CustomListPage;