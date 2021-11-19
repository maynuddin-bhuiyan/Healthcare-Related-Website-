import { AlertTitle, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {  Alert, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/uesAuth';

import './Login.css'





const Login = () => {
  const {loginUser, isloding, user,authErrer} = useAuth();

  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const history = useHistory();


  const healdelOnblure = e => {
    const filed = e.target.name;
    const value = e.target.value;
    const newData = {...loginData};
    newData[filed] = value;
    setLoginData(newData);
    console.log(newData);
  }




const handeloginSubmit = e => {
  e.preventDefault();

  loginUser(loginData.email, loginData.password , location ,history );
  
}


    
    return (
        <div className='Login'>

<Typography variant="body1" gutterBottom>
                Login
            </Typography>

            <form onSubmit= {handeloginSubmit}>

            <TextField sx={{ width: '30%' }}
                    id="standard-basic"
                    label="Your Email"
                    variant="standard"
                    type='email'
                    name='email'
                    onBlur={healdelOnblure}

                /> <br />

                <TextField sx={{ width: '30%' }}
                    id="standard-password-input"
                    type="password"
                    variant="standard"
                    name='password'
                    onBlur={healdelOnblure}

                /><br />
                { isloding && 
                <CircularProgress color="success" />
                }

                { authErrer &&
                <Alert severity="error">This is an error alert — check it out!</Alert>

                }


                { user?.email && 
                <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
                
                }

                

                  <Button sx={{ width: '75%' }} type='submit'>Login</Button>
                  <br />
                  
                  <br />


                  <p>..........................................</p>
                  <br /><br /><br />


<Link to='/registration'>
    <Button sx={{ width: '75%' }}>Create A Registration</Button>
</Link>
              </form>
              </div>
    );
};

export default Login;