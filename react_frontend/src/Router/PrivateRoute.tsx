import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import * as jwt from 'jsonwebtoken';
import ActiveUserContext from '../Contexts/ActiveUserContext';
import AuthorityService from '../Services/AuthorityService';
import { Button } from '@mui/material';
import authorities from '../config/Authorities';

interface Props {
  requiredAuths: authorities[];
  children: React.ReactElement;
}

type JWTType = {
  iss: string;
  exp: number;
};

const PrivateRoute: React.FC<Props> = ({ requiredAuths, children }) => {
  const activeUserContext = useContext(ActiveUserContext);

  const isLoggedIn = () => {
    let tokenString = localStorage.getItem('token');
    if (!tokenString) {
      console.error('no token found');
      return false;
    }
    tokenString = tokenString.replace('Bearer ', '');
    const token: JWTType = jwt.decode(tokenString) as JWTType;
    if (!token || !token.exp || token.exp < Date.now() / 1000) {
      return false;
    }
    return true;
  };

  if (!isLoggedIn()) {
    activeUserContext.logout();
    return <Navigate to='/login' replace={true} />;
  }

  const hasNeededAuthorities =
      requiredAuths.length === 0 ||
      requiredAuths.every(AuthorityService.hasAuthority);

  if (!hasNeededAuthorities) {
    return <Navigate to='/unauthorized' replace={true} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;