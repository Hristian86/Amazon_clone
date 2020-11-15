import React from 'react';
import Loader from '../../components/Loader/Loader';
import { useState } from 'react';
import { useHistory } from 'react-router';

const CategoryPerant = ({ title, image, id }) => {
    const [state, setState] = useState();
    const history = useHistory();

    const categoryHolder = () => {
        history.push(`/categorylist/${title}?perantid=${id}`);
    }
    
    return <div className="product col-4" onClick={categoryHolder}>

        <div className="product__info">
            {state?.loader ?
                <div className="text-center">
                    <Loader />
                </div>
                :
                <h5>
                    <p className="product__title">{title}</p>
                </h5>}

        </div>

        <img src={image} alt="." />
    </div>

}

export default CategoryPerant;