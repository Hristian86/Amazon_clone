import React from 'react';
import './ChaeckoutProduct.css';
import { useStateValue } from '../ContextApi/StateProvider';
import { REMOVE_ITEM_FROM_BASKET } from '../ContextApi/Types';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removefromBasket = () => {
        console.log("removing");
        console.log(id);
        dispatch({
            type: REMOVE_ITEM_FROM_BASKET,
            removefromBasket: {
                id: id
            },
        });
    }


    return <div className="ChaeckoutProduct text-left">

        <img src={image} />

        <div className="ChaeckoutProduct__info">
            <h4><p className="ChaeckoutProduct__title">
                {title}
            </p></h4>

            <h4><p className="ChaeckoutProduct__price">
                <small>&euro;</small>
                <strong>{price}</strong>
            </p></h4>

            <div className="ChaeckoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p className="text-warning"><i class="fa fa-star"></i></p>
                    ))}
            </div>

            <button onClick={removefromBasket} className="btn button__remove m-auto btn-warning">remove from basket</button>
        </div>

    </div>

}

export default CheckoutProduct;