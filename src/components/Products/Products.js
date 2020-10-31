import React from 'react';
import './Products.css';
import { useStateValue } from '../ContextApi/StateProvider';
import { useAlert } from 'react-alert';
import AlertProductComponent from './AlertProductcomponent';

const Products = ({ id, title, image, price, rating }) => {

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
                    .map((_, index) => (
                        <p key={index} className="text-warning"><i className="fa fa-star"></i></p>
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