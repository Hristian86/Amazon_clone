import React from 'react';
import './Payment.css';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import CheckoutProduct from '../../components/Products/CheckoutProduct';
import { useHistory } from 'react-router';

const Payment = (props) => {
    const [{ user, basket }, dispatch] = useStateValue();
    const history = useHistory();
    if (!user[0]?.user?.email) {
        history.push('/authO/login/payment');
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
                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
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
        </div>
    </div>
}

export default Payment;