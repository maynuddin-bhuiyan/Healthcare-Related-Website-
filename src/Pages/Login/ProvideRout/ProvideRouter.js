import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/uesAuth';

const ProvideRouter = ({ children, ...rest }) => {
    const {user ,isloding}  = useAuth();
     
    if(isloding) {return <CircularProgress color="success" />}
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default ProvideRouter;