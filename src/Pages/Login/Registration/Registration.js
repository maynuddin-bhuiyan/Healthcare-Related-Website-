import React, { useState } from 'react';
import { Alert, AlertTitle, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/uesAuth';
import './Registration.css';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Registration = () => {

    const {registrationUser, isloding, user,authErrer,googlePopupsignIn} = useAuth();

    const [restistion, setRestistion] = useState({});
    const location = useLocation();
    const history = useHistory();

    const hendalBlureClick = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newField = {...restistion};
        newField[field] = value;
        setRestistion(newField);
        console.log(newField);
        e.preventDefault();
    }

    const handelOnclick = evant => {
        evant.preventDefault();
        registrationUser(restistion?.email, restistion?.password)

    }


    const hendelGooglePopupSign =  () => {
        googlePopupsignIn(location,history)
    }

    return (
        <div className='Registration'>
            <Typography variant="body1" gutterBottom>
                    Registration
            </Typography>

            { !isloding &&
            <form onSubmit={handelOnclick}>
            <TextField sx={{ width: '30%' }}
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    type='text'
                    name='text'
                    onBlur={hendalBlureClick}

                />
                <br />
                <TextField sx={{ width: '30%' }}
                    id="standard-basic"
                    label="email"
                    variant="standard"
                    type='email'
                    name='email'
                    onBlur={hendalBlureClick}

                /> <br />
                <TextField sx={{ width: '30%' }}
                    id="standard-basic"
                    label="Phone"
                    variant="standard"
                    type='number'
                    name='Phone'
                    onBlur={hendalBlureClick}

                /> <br />
                <TextField sx={{ width: '30%' }}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    name='password'
                    onBlur={hendalBlureClick}

                /> <br />
                <TextField sx={{ width: '30%' }}
                    id="standard-password-input"
                    label="Re-Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    name='password2'
                    onBlur={hendalBlureClick}

                /> <br /><br />
                <br />

                 <Button sx={{ width: '30%' }} type='submit'>Registration 
                </Button>

                

                </form> }

                { isloding && 
                <CircularProgress color="success" />
                }
                
                { user?.email && 
                <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </Alert>
                
                }

                {authErrer &&
                    <Alert severity="error">{authErrer}</Alert>
                }
                <br />
                  <br />
                <br />
                  <br />

                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <small >Already User. Please Login</small>
                </Link>



                <Link to='/registration'>
                    <Button onClick={hendelGooglePopupSign} sx={{ width: '50%' }}>Login With Google</Button>
                </Link>


          
        </div>
    );
};

export default Registration;