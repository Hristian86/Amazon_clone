import React from 'react';
import './LeftSide.css';

const LeftSide = ({ imageUrl }) => {

    return <div className="product__pageImage text-center">
        <div className="detail__imageHolder">
            <img src={imageUrl} className="detail__image" />
        </div>
    </div>

}

export default LeftSide;