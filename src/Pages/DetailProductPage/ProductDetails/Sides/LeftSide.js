import React from 'react';
import './LeftSide.css';

const LeftSide = ({ imageUrl }) => {

    return <div className="col-md-4">
        <div className="detail__imageHolder">
            <img src={imageUrl} className="detail__image" />
        </div>
    </div>

}

export default LeftSide;