import React from 'react';
import './Alert.css';

// Alert for user or guest navigation through the site.
const AlertProductComponent = ({ title, image, message }) => {

    return <div className="mt-5">

        <div className="">
            
            <small>{title}</small>
            {/*<img className="alert__image" src={image} />*/}
            <h5 className="text-success">{message}</h5>
        </div>

    </div>
}

export default AlertProductComponent;