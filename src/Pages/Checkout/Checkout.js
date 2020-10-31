import React from 'react';
import './Checkout.css';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import CheckoutProduct from '../../components/Products/CheckoutProduct';
import SubtotalPrice from '../../components/Products/SubtotalPrice';

const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();

    return <div className="container-fluid pl-0 pr-0 checkout">

        <img className="checkout__headerImage" src="https://www.zingoy.com/blog/wp-content/uploads/2020/06/Amazon-Banner-Desktop_qxuu8v.jpg" alt="." />


        <div className="row">
            {basket?.length === 0 ? (
                <div className="empty__basket">
                    <h4 className="ml-sm-5 empty__basket">
                        Your Shoping basket is empty
                </h4>
                    <p className="ml-sm-5 empty__basket">
                        You have no items in your basket. To buy one or more, click "Add to basket" next to the item
                </p>
                </div>
            ) : (
                    <div className="ml-sm-5 ">
                        <h4 className="ml-sm-5 chekcout__title">
                            Your Shoping basket
                    </h4>
                        <hr />
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
                )}

            {basket?.length > 0 && (
                <div className="checkout__right m-md-auto text-left text-white shadow-box col-2">
                    <h3 className="subtotal__container pl-sm-3">
                        <SubtotalPrice />
                </h3>
                </div>
            )}

        </div>

        <hr />

    </div>
}

export default Checkout;