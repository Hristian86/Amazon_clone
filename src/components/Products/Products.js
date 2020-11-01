import React from 'react';
import './Products.css';
import { useStateValue } from '../ContextApi/StateProvider';
import { useAlert } from 'react-alert';
import AlertProductComponent from './AlertProductcomponent';
import { Redirect, useHistory } from 'react-router';
import { upPage } from '../UpPage/Uppage';

const Products = ({ id, title, image, price, rating, data, index, productsCount }) => {
    const history = useHistory();

    const [{ basket }, dispatch] = useStateValue();
    const alert = useAlert();

    const addToBasket = () => {

        const checkBasketForRepeatence = basket.filter(data => data.id == id);

        if (checkBasketForRepeatence[0] === undefined) {

            alert.show(<AlertProductComponent image={image} title={title} message={"Added to the basket"} />);

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

    const viewCategories = () => {
        //return <Redirect to="/categories" />
        upPage();
        history.push(`/categories/${index}`);
    }

    if (price > 0) {

        return <div className="product col">

            <div className="product__info">
                <h5>
                    <p>{title}</p>
                    {price ? <p className="product__price">
                        <small>&euro;</small>
                        <strong>{price}</strong>
                    </p> : null}
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

            {/* nesting for the products*/}
            {!price ?
                <div>
                    <div className="button__holder">
                        <button onClick={viewCategories} className="btn button__addToNasket m-auto">View {title}</button>
                    </div>
                </div> :
                null}

            {price ? <div className="button__holder">
                <button onClick={addToBasket} className="btn button__addToNasket m-auto">Add to basket</button>
            </div> : null}
        </div>

    } else {

        return <div onClick={viewCategories}  className="product col">

            <div className="product__info">
                <h5>
                    <p>{title}</p>
                    <small>products </small>
                    <strong>{productsCount}</strong>
                    {price ? <p className="product__price">
                        <small>&euro;</small>
                        <strong>{price}</strong>
                    </p> : null}
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

            {/* nesting for the products*/}
            {!price ?
                <div>
                    <div className="button__holder">
                        <button onClick={viewCategories} className="btn button__addToNasket m-auto">View {title}</button>
                    </div>
                </div> :
                null}

            {price ? <div className="button__holder">
                <button onClick={addToBasket} className="btn button__addToNasket m-auto">Add to basket</button>
            </div> : null}
        </div>
    }
}

export default Products;