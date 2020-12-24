import React, { useEffect, useState } from 'react';
import FetchData from '../../components/AuthListener/FetchData';
import './OrderPage.css';
import OrderTable from './OrderTable';
import Loader from '../../components/Loader/Loader';
import { useHistory } from 'react-router';
import { useStateValue } from '../../components/ContextApi/StateProvider';

const OrderPage = () => {
    const [{ user }, dispatch] = useStateValue();

    const [state, setState] = useState({});
    const history = useHistory();
    if (!user[0]?.user?.email) {
        history.push('/authO/login/return');
    }

    // Get orders from back end for current user.
    const getOrders = async () => {
        try {
            const result = await FetchData("api/userOrders", {}, "POST");
            // To Do do something when there is error/s.
            if (!result.error || !result.errors) {
                // Add the result to state.
                setState({
                    orders: await result
                })
            }

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getOrders();
    }, []);

    //if (state?.orders !== undefined) {
    //}

    return <div >

        <table className="table text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date of purchase.</th>
                    <th scope="col">Total.</th>
                    <th scope="col">Products.</th>
                </tr>
            </thead>

            {state?.orders !== undefined
                ? <OrderTable state={state} />
                : <Loader />
                }
        </table>
    </div>
}

export default OrderPage;