import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../components/pages/HomePage";
import UserTable from "../components/pages/UserPage/UserTable";
import UserPage from "../components/pages/UserPage/UserPage";
import AdminPage from "../components/pages/adminPage/AdminPage";
import authorities from "../config/Authorities";
import UserDashboard from "../components/pages/UserDashboard/UserDashboard";
import CustomListPage from "../components/pages/EditProfile";
import UserProfile from "../components/pages/UserProfile/UserProfile";
import UserProfilePage from "../components/pages/userProfilePage/UserProfilePage";

/**
 * Router component renders a route switch with all available pages
 */
const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/login"} element={<LoginPage />} />

      <Route
        path={"/userProfiles"}
        element={
          <PrivateRoute requiredAuths={[authorities.USER_READ]}>
            <UserProfilePage />
          </PrivateRoute>
        }
      />

      <Route
        path={"/users"}
        element={
          <PrivateRoute requiredAuths={[]}>
            <UserTable />
          </PrivateRoute>
        }
      />
      <Route
        path={"/dashboard"}
        element={
          <PrivateRoute requiredAuths={[]}>
            <UserDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path={"/profile"}
        element={
          <PrivateRoute requiredAuths={[authorities.PROFILE_EDIT]}>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route
        path={"/Edit-Profile/:id"}
        element={
          <PrivateRoute requiredAuths={[authorities.LIST_MANAGE]}>
            <CustomListPage />
          </PrivateRoute>
        }
      />
      <Route
        path='/useredit'
        element={
          <PrivateRoute
            requiredAuths={[
              authorities.USER_DEACTIVATE,
              authorities.USER_CREATE,
            ]}
          >
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route
        path='/useredit/:userId'
        element={
          <PrivateRoute requiredAuths={[authorities.USER_READ]}>
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route
        path={"/admin"}
        element={
          <PrivateRoute requiredAuths={[authorities.USER_CREATE]}>
            <AdminPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Router;
