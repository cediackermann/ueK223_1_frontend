import { useEffect, useState } from "react";
import UserProfileService from "../../../Services/UserProfileService";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const [userProfiles, setUserProfiles] = useState([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageable, setPageable] = useState<Pageable>({
    limit: 10,
    offset: 0,
    sorting: "id,asc",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProfiles = await UserProfileService.getAllUserProfiles();
        setPageCount(Math.ceil(allProfiles.length / pageable.limit));

        const paginatedProfiles = await UserProfileService.getAllUserProfiles(
          pageable.limit,
          pageable.offset,
          pageable.sorting
        );
        setUserProfiles(paginatedProfiles);
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };

    fetchData();
  }, [pageable]);

  function handleEdit(id: any): void {
    nagigate("");
  }
  return (
    <>
      <h1>User Profiles</h1>
      {userProfiles.map(
        (profile: {
          address: string;
          age: number;
          birthdate: string;
          profilePictureUrl: string;
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
              onClick={() => handleEdit(user.id)}
            >
              Edit
            </Button>
          </div>
        )
      )}
      <Pagination count={pageCount} />
    </>
  );
}

interface Pageable {
  limit: number;
  offset: number;
  sorting: string;
}
function nagigate(arg0: string) {
  throw new Error("Function not implemented.");
}
