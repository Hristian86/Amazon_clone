import React from 'react';
import Loader from '../../components/Loader/Loader';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './CategoryPerant.css';

const CategoryPerant = ({ title, image, id, categoriesCount }) => {
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
                    <p className="product__title m-auto">{title}</p>
                    <small>Categories </small>
                    <strong>{categoriesCount}</strong>
                </h5>}

        </div>
        <div className="image__holedPerant w-100">
            <img src={image} className="image__style" alt="." />
        </div>
    </div>

}

export default CategoryPerant;