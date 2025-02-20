import { Route, Routes } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute';
import HomePage from '../components/pages/HomePage';
import UserTable from '../components/pages/UserPage/UserTable';
import UserPage from '../components/pages/UserPage/UserPage';
import AdminPage from '../components/pages/adminPage/AdminPage';
import authorities from '../config/Authorities';
import UserDashboard from "../components/pages/UserDashboard";

/**
 * Router component renders a route switch with all available pages
 */
const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/login'} element={<LoginPage />} />

            <Route
                path={'/users'}
                element={
                    <PrivateRoute requiredAuths={[]}>
                        <UserTable />
                    </PrivateRoute>
                }
            />
            <Route
                path={'/dashboard'}
                element={
                    <PrivateRoute requiredAuths={[]}>
                        <UserDashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path='/useredit'
                element={
                    <PrivateRoute requiredAuths={[authorities.USER_DEACTIVATE, authorities.USER_CREATE]}>
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
                path={'/admin'}
                element={
                    <PrivateRoute requiredAuths={[authorities.USER_CREATE]}>
                        <AdminPage />
                    </PrivateRoute>
                }
            />
            <Route path='*' element={<div>Not Found</div>} />
        </Routes>
    );
};

export default Router;
