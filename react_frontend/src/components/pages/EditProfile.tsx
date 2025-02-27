import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfileService from "../../Services/UserProfileService";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function EditProfile() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: "",
    address: "",
    birthDate: "",
    profilePictureUrl: "",
  });
  const { id } = useParams();

  const fetchUserProfile = async () => {
    try {
      if (id) {
        const profile = await UserProfileService.getUserProfileById(id);
        console.log(profile);
        setUserProfile(profile);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await UserProfileService.updateUserProfile(userProfile);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [id]);

  return (
    <>
      {userProfile && (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField label='ID' name='id' value={userProfile.id} disabled />
            <TextField
              label='Address'
              name='address'
              value={userProfile.address}
              onChange={handleInputChange}
            />
            <TextField
              label='Birthdate'
              name='birthDate'
              value={userProfile.birthDate}
              onChange={handleInputChange}
            />
            <TextField
              label='Profile Picture URL'
              name='profilePictureUrl'
              value={userProfile.profilePictureUrl}
              onChange={handleInputChange}
            />
            <Button type='submit' variant='contained' color='primary'>
              Save
            </Button>
          </FormControl>
        </form>
      )}
    </>
  );
}

interface UserProfile {
  id: string;
  address: string;
  birthDate: string;
  profilePictureUrl: string;
}
