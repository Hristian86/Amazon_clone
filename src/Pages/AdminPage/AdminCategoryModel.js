import React from 'react';
import { useState } from 'react';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import Loader from '../../components/Loader/Loader';
import { useHistory } from 'react-router';
import { upPage } from '../../components/UpPage/Uppage';

const AdminCategoryModel = ({ id, title, image, productsCount, type }) => {
    const [{ basket }, dispatch] = useStateValue();
    const [state, setState] = useState();
    const history = useHistory();

    const adminHandler = () => {
        upPage();
        history.push(`/adminPage?id=${id}&titleCategory=${title}`);
    }
    
    return <div onClick={adminHandler} className="product col category-cursor">

        <div className="product__info">
            {state?.loader ?
                <div className="text-center">
                    <Loader />
                </div>
                :
                <h5>
                    <p>{title}</p>
                    <small>products </small>
                    <strong>{productsCount}</strong>
                </h5>}

            <div className="product__rating">
                {state?.loader ? null : type}
            </div>
        </div>

        <img src={image} alt="." />

        {/* nesting for the products*/}
        <div>
            <div className="button__holder">
                <button onClick={adminHandler} className="btn button__addToNasket m-auto">View {title}</button>
            </div>
        </div>
    </div>

}
export default AdminCategoryModel;