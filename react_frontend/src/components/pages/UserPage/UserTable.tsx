// src/components/pages/UserPage/UserTable.tsx
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { User } from '../../../types/models/User.model';
import UserService from '../../../Services/UserService';
import { useNavigate } from 'react-router-dom';
import {Box} from "@mui/material";

const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleAdd = () => {
    navigate('../useredit/');
  };

  const handleEdit = (id: string) => {
    navigate('../useredit/' + id);
  };

  const handleDelete = (id: string) => {
    UserService.deleteUser(id);
  };

  return (
      <Box>
        {users.map((user) => (
            <div key={user.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  {user.firstName} {user.lastName} {user.email}
                  <CardActions>
                    <Button
                        size='small'
                        color='primary'
                        variant='contained'
                        onClick={() => handleEdit(user.id)}
                    >
                      Edit
                    </Button>
                    <Button
                        size='small'
                        color='error'
                        variant='contained'
                        onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
        ))}
        <Button
            size='small'
            color='success'
            variant='contained'
            onClick={handleAdd}
        >
          Add
        </Button>
        <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#00d4ff',
              '&:hover': { backgroundColor: '#0f0fcf' },
            }}
            onClick={() => navigate(-1)}
            data-cy="go-back-button"
        >
          Go Back
        </Button>
      </Box>
  );
};

export default UserTable;