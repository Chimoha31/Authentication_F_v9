import React from 'react';
import {Navigate} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
  const {user} = UserAuth();

  // userが存在しなかったら、
  if(!user) {
    return <Navigate to="/" />
  }
  // userが存在したら、
  return children
}

export default ProtectedRoute

