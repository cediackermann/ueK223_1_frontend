import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { User } from '../../../types/models/User.model';
import UserService from '../../../Services/UserService';
import { useNavigate } from 'react-router-dom';
import { MenuItem, Select, Typography } from '@mui/material';

const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [sortField, setSortField] = useState<string>('firstName');

  useEffect(() => {
    UserService.getAllUsers().then((data) => {
      if (Array.isArray(data.data)) {
        const usersWithRoles = data.data.map((user) => ({
          ...user,
          role: user.roles?.map((role: any) => role.name).join(', ') || 'DEFAULT',
          authorities: user.roles?.flatMap((role: any) => role.authorities?.map((auth: any) => auth.name))?.join(', ') || 'None',
        }));
        setUsers(usersWithRoles);
      }
    });
  }, []);

  const handleAdd = () => {
    navigate('../useredit/');
  };

  const handleEdit = (id: string) => {
    navigate('../useredit/' + id);
  };

  const handleDelete = (id: string) => {
    UserService.deleteUser(id).then(() => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    });
  };

  const handleSortChange = (field: string) => {
    setSortField(field);
    const sortedUsers = [...users].sort((a, b) => {
      const aValue = a[field as keyof User];
      const bValue = b[field as keyof User];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      }
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      }
      return 0;
    });
    setUsers(sortedUsers);
  };

  const filterableFields = ['id', 'firstName', 'lastName', 'email', 'role', 'authorities'];

  return (
      <>
        <Typography variant="h6">User List</Typography>
        {users.length > 0 && (
            <Select value={sortField} onChange={(e) => handleSortChange(e.target.value)}>
              {filterableFields.map((key) => (
                  <MenuItem key={key} value={key}>
                    Sort by {key}
                  </MenuItem>
              ))}
            </Select>
        )}

        {users.map((user) => (
            <div key={user.id}>
              <Card sx={{ minWidth: 275, marginTop: 2 }}>
                <CardContent>
                  {Object.entries(user)
                      .filter(([key]) => filterableFields.includes(key))
                      .map(([key, value]) => (
                          <Typography key={key} variant="body2">
                            {key}: {String(value)}
                          </Typography>
                      ))}
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
            sx={{ marginTop: 2 }}
        >
          Add
        </Button>
      </>
  );
};

export default UserTable;