import React from 'react';
import './Payment.css';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import CheckoutProduct from '../../components/Products/CheckoutProduct';
import { useHistory } from 'react-router';
import BuyItems from '../../components/BuyProduct/BuyItems';
import { useState } from 'react';

const Payment = (props) => {
    const [{ user, basket }, dispatch] = useStateValue();
    const [buyState, setBuyState] = useState({
        loading: false,
    });
    const history = useHistory();

    if (!user[0]?.user?.email) {
        history.push('/authO/login/return');
    }

    return <div className="payment container">
        <div className="payment__container">

            <div className="payment__section pl-sm-5">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>Name {user[0]?.user?.user}</p>
                    <p>Email {user[0]?.user?.email}</p>
                    <p>Address 123 react line</p>
                    <p>Los Angelis, CA</p>
                </div>

            </div>

            <hr />

            <div className="payment__section pl-sm-5">

                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map((item, index) => (
                        <div key={item?.id}>
                        <CheckoutProduct
                            key={item?.id}
                            id={item?.id}
                            title={item?.title}
                            image={item?.image}
                            price={item?.price}
                            rating={item?.rating}
                            />
                            {basket.length - 1 === index ? null : <hr />}
                            </div>
                    ))}
                </div>
            </div>

            <hr />

            <div className="payment__section pl-sm-5">

                <div className="payment__title">
                    <h3>Payment method</h3>
                </div>

                <div className="payment__details">
                    <h3>Stripe i gues</h3>
                </div>
            </div>

            <hr />

            <div className="payment__section pl-sm-5">

                <div className="payment__title">
                    <h3>Buy products.</h3>
                </div>

                <div className="payment__details">
                    <h3 className="text-right"><BuyItems buyState={buyState} setBuyState={setBuyState} /></h3>
                </div>
            </div>
        </div>
    </div>
}

export default Payment;