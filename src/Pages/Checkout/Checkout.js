import React from 'react';
import './Checkout.css';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import CheckoutProduct from '../../components/Products/CheckoutProduct';
import SubtotalPrice from '../../components/Products/SubtotalPrice';
import getCookie from '../../components/Cookies/GetCookie';

const Checkout = () => {

    const [{ user, basket }, dispatch] = useStateValue();

    return <div className="container-fluid pl-0 pr-0 checkout">

        <img className="checkout__headerImage" src="https://www.zingoy.com/blog/wp-content/uploads/2020/06/Amazon-Banner-Desktop_qxuu8v.jpg" alt="." />

        <div className="row">
            {basket?.length === 0 ? (
                <div className="empty__basket">
                    <h4 className="ml-sm-5 mt-3 empty__basket">
                        {user[0]?.user?.user ?
                            user[0]?.user?.user :
                            "Guest"} Your Shoping basket is empty
                </h4>
                    <p className="ml-sm-5 empty__basket">
                        {user[0]?.user?.user ?
                            user[0]?.user?.user :
                            "Guest"} You have no items in your basket. To buy one or more, click "Add to basket" next to the item
                </p>
                </div>
            ) : (
                    <div className="ml-sm-5 ">
                        <h4 className="ml-sm-5 chekcout__title">
                            {user[0]?.user?.user ? user[0]?.user?.user : "Guest"} Your Shoping basket
                    </h4>
                        <hr />
                        {basket.map(item => (
                            <div key={item.id}>
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                                <hr />
                            </div>
                        ))}

                    </div>
                )}

            {basket?.length > 0 && (
                <div className="checkout__right m-md-auto text-left text-white shadow-box col-4">
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