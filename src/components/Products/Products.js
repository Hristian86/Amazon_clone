import React from 'react';
import './Products.css';
import { useStateValue } from '../ContextApi/StateProvider';

const Products = ({ id, title, image, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {

        const checkBasketForRepeatence = basket.filter(data => data.id == id);

        if (checkBasketForRepeatence[0] === undefined) {
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
        }
    }

    return <div className="product col">

        <div className="product__info">
            <h5>
                <p>{title}</p>
                <p className="product__price">
                    <small>&euro;</small>
                    <strong>{price}</strong>
                </p>
            </h5>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p className="text-warning"><i class="fa fa-star"></i></p>
                    ))}
            </div>
        </div>

        <img src={image} alt="." />

        <div className="button__holder">
            <button onClick={addToBasket} className="btn button__addToNasket m-auto">Add to basket</button>
        </div>
    </div>
}

export default Products;