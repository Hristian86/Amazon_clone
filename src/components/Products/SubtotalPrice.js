import React from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import './SubtotalPrice.css';
import { getBasketTotal } from '../ContextApi/Reducer';
import { useHistory } from 'react-router';

const SubtotalPrice = () => {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    const upPage = () => {
        window.scrollTo(0, 0);
        history.push('/payment');
    }

    return <div className="SubtotalPrice">

        <h2>
            Subtotal ({basket?.length} items)
            <small> &euro;</small>
            <strong>{getBasketTotal(basket)}</strong>
        </h2>

        < br />
        <small className="">
            <input type="checkbox" className="checkbox__style" />Promotion coupon
        </small>
        <div className="mt-3">
            <button onClick={upPage} className="btn btn-danger">Procead to Checkout</button>
        </div>
    </div>

}

export default SubtotalPrice;