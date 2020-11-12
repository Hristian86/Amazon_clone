import React, { useState } from 'react';
import './Products.css';
import { useStateValue } from '../ContextApi/StateProvider';
import { useAlert } from 'react-alert';
import AlertProductComponent from './AlertProductcomponent';
import { Redirect, useHistory, useParams } from 'react-router';
import { upPage } from '../UpPage/Uppage';
import Loader from '../Loader/Loader';

const Products = ({ id, title, image, price, rating, data, index, productsCount }) => {
    const history = useHistory();
    const params = useParams();
    const [{ basket }, dispatch] = useStateValue();
    const [state, setState] = useState();

    const alert = useAlert();

    // Adding product to the basket and check for duplicate if there are no duplacate in the context api store it will be added witch dispatching an action
    const addToBasket = () => {

        const checkBasketForRepeatence = basket.filter(data => data.id == id);

        if (checkBasketForRepeatence[0] === undefined) {
            setState({
                loader: true,
            });
            alert.show(<AlertProductComponent image={image} title={title} message={"Added to the basket"} />);
            setTimeout(() => {
                setState({
                    loader: false,
                });
            }, 700)

            dispatch({
                type: 'ADD_TO_BASKET',
                items: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            })
        } else {
            alert.show(<AlertProductComponent message={"Item already in the basket"} />);
        }
    }

    // Push history to categories by title and id where, products will be displayed for a given category
    const viewCategories = () => {
        //return <Redirect to="/categories" />
        setState({
            loader: true
        });
        setTimeout(() => {
            upPage();
            history.push(`/categories/${title}/${index}`);
        }, 700);
    }

    const detailView = () => {
        upPage();
        history.push(`/product/${params.id}/${id}`);
    }

    // Patched up for now with check for price if the price is 0 or lover, then it maps all categories else it maps products in a given by parametar category
    // Mapping products
    if (price > 0) {

        return <div className="product col-4" onClick={detailView}>

            <div className="product__info">
                <h5>
                    <p className="product__title">{title}</p>
                    <p className="product__price">
                        <small>&euro;</small>
                        <strong>{price}</strong>
                    </p>
                </h5>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <p key={index} className="text-warning"><i className="fa fa-star"></i></p>
                        ))}
                </div>
            </div>

            <img src={image} alt="." />

            <div className="button__holder">
                {state?.loader ? <Loader /> : <button onClick={addToBasket} className="btn button__addToNasket m-auto">Add to basket</button>}
            </div>
        </div>

    } else {
        //if (state?.loader) {
        //    return <div className="product col category-cursor">
        //        <Loader />
        //    </div>
        //}

        // Mapping categories and on click it sends to categories component witch maps the products
        return <div onClick={viewCategories} className="product col category-cursor">

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
                    {Array(rating)
                        .fill()
                        .map((_, index) => (
                            <p key={index} className="text-warning"><i className="fa fa-star"></i></p>
                        ))}
                </div>
            </div>

            <img src={image} alt="." />

            {/* nesting for the products*/}
            <div>
                <div className="button__holder">
                    <button onClick={viewCategories} className="btn button__addToNasket m-auto">View {title}</button>
                </div>
            </div>
        </div>
    }
}

export default Products;