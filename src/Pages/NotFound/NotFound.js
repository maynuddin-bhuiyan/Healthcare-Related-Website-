import React from 'react';
import images from '../../images/404 erre/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div  className='notfound'>
            <h1 className='red'>The Page You Requested Could't Be Found. We're Sorry</h1>
            <img src={images} alt="" />
        </div>
    );
};

export default NotFound;