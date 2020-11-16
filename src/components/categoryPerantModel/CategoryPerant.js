import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './CategoryPerant.css';
import Loader from '../Loader/Loader';

const CategoryPerant = ({ title, image, id, categoriesCount }) => {
    const [state, setState] = useState();
    const history = useHistory();

    // Link to chield categories.
    const categoryHolder = () => {
        setState({
            loader: true,
        });
        setTimeout(() => {
            history.push(`/categorylist/${title}?perantid=${id}`);
        }, 300)
    }

    // Returns the Root category perants.
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