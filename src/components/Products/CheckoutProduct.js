import React, { useState } from 'react';
import './ChaeckoutProduct.css';
import { useStateValue } from '../ContextApi/StateProvider';
import { REMOVE_ITEM_FROM_BASKET } from '../ContextApi/Types';
import { useAlert } from 'react-alert';
import AlertProductComponent from './AlertProductcomponent';
import Loader from '../Loader/Loader';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const [state, setState] = useState({
        loading: false,
    });
    const alert = useAlert();

    // Remove item from basket alert + dispatch to context api and recalculate the price with reducer.
    const removefromBasket = () => {
        alert.show(<AlertProductComponent image={image} title={title} message={" item removed from the basket"} />);

        setState({
            loading: true,
        });

        setTimeout(() => {
            setState({
                loading: false,
            });

            console.log("removing");
            console.log(id);
            dispatch({
                type: REMOVE_ITEM_FROM_BASKET,
                removefromBasket: {
                    id: id
                },
            });

        }, 700);
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
                    .map((_, index) => (
                        <p key={index} className="text-warning"><i className="fa fa-star"></i></p>
                    ))}
            </div>
            
            {state?.loading ? <Loader /> : <button onClick={removefromBasket} className="btn button__remove m-auto btn-warning">remove from basket</button>}
            
        </div>
    </div>

}

export default CheckoutProduct;