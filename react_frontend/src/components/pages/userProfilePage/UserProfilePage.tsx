import { useEffect, useState } from "react";
import UserProfileService from "../../../Services/UserProfileService";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import { MenuItem, Select } from "@mui/material";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const [userProfilesCount, setUserProfilesCount] = useState<number>(0);
  const [userProfiles, setUserProfiles] = useState([]);
  const [pageable, setPageable] = useState<Pageable>({
    size: 10,
    page: 0,
    sorting: "id",
    orderBy: "asc",
  });
  const filterableFields = ["id", "address", "birthdate", "profilePictureUrl"];
  const orderByOptions = ["asc", "desc"];

  const fetchPageSize = async () => {
    try {
      const allProfiles = await UserProfileService.getAllUserProfiles();
      setUserProfilesCount(allProfiles.length);
    } catch (error) {
      console.error("Error fetching user profiles:", error);
    }
  };

  const fetchData = async (pageable: Pageable) => {
    try {
      const paginatedProfiles = await UserProfileService.getAllUserProfiles(
        pageable.size,
        pageable.page,
        pageable.sorting,
        pageable.orderBy
      );
      setUserProfiles(paginatedProfiles);
    } catch (error) {
      console.error("Error fetching user profiles:", error);
    }
  };

  useEffect(() => {
    fetchPageSize();
  }, []);

  useEffect(() => {
    fetchData(pageable);
  }, [pageable]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPageable((prev) => {
      const updatedPageable = { ...prev, page: newPage };
      return updatedPageable;
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageable((prev) => {
      const updatedPageable = {
        ...prev,
        size: parseInt(event.target.value, 10),
        page: 0,
      };
      return updatedPageable;
    });
  };

  function handleEdit(id: string) {
    navigate("/Edit-Profile/" + id);
  }

  const handleSortChange = (field: string) => {
    setPageable((prev) => {
      const updatedPageable = { ...prev, sorting: field };
      return updatedPageable;
    });
  };
  return (
    <>
      <h1>User Profiles</h1>
      <Select
        value={pageable.sorting}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        {filterableFields.map((key) => (
          <MenuItem key={key} value={key}>
            Sort by {key}
          </MenuItem>
        ))}
      </Select>
      <Select
        value={pageable.orderBy}
        onChange={(e) =>
          setPageable((prev) => {
            const updatedPageable = { ...prev, orderBy: e.target.value };
            return updatedPageable;
          })
        }
      >
        {orderByOptions.map((key) => (
          <MenuItem key={key} value={key}>
            Order by {key}
          </MenuItem>
        ))}
      </Select>
      {userProfiles.map(
        (profile: {
          address: string;
          age: number;
          birthdate: string;
          profilePictureUrl: string;
          id: string;
        }) => (
          <div key={profile.profilePictureUrl}>
            <img
              src={profile.profilePictureUrl}
              alt={profile.profilePictureUrl}
            />
            <p>Address: {profile.address}</p>
            <p>Age: {profile.age}</p>
            <p>Birthdate: {profile.birthdate}</p>
            <Button
              size='small'
              color='primary'
              variant='contained'
              onClick={() => handleEdit(profile.id)}
            >
              Edit
            </Button>
          </div>
        )
      )}
      <TablePagination
        component='div'
        count={userProfilesCount}
        page={pageable.page}
        onPageChange={handleChangePage}
        rowsPerPage={pageable.size}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

interface Pageable {
  size: number;
  page: number;
  sorting: string;
  orderBy: string;
}
