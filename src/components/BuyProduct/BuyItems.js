import React from 'react';
import { useStateValue } from '../ContextApi/StateProvider';
import './BuyItems.css';
import FetchData from '../AuthListener/FetchData';
import { REMOVE_ALL_FROM_BASKET } from '../ContextApi/Types';
import { useHistory } from 'react-router';
import Loader from '../Loader/Loader';

const BuyItems = ({ buyState, setBuyState }) => {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    // Clearing the basket after purchase.
    const removeAllFromBasket = () => {
        dispatch({
            type: REMOVE_ALL_FROM_BASKET,
        });
    }

    // Purchasing items.
    const buyItems = async () => {
        const productIds = basket.map(data => data.id);

        try {
            setBuyState({
                loading: true,
            })

            const payload = {
                cartProductIds: productIds
            }

            const result = await FetchData("api/cart", payload, "POST");

            if (!result.error && !result.errors) {
                removeAllFromBasket();
                history.push('/');
                window.location.reload(false);
            } else {
                setBuyState({
                    loading: false,
                })
            }

        } catch (e) {
            setBuyState({
                loading: false,
            })

            console.log(e);
        }
    }

    return <div className="buy__item btn btn-danger" onClick={buyItems}>
        {buyState.loading == false ? "Buy now." : <Loader />}
    </div>

}

export default BuyItems;