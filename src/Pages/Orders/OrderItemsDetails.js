import React from 'react';
import { useHistory } from 'react-router';
import ProductList from './ProductList';

const OrderItemsDetails = ({ data, index }) => {
    const history = useHistory();

    const viewDetails = () => {
        history.push('/orderdetails');
    }

    // Table mapped orders.
    return <tr key={index} className="order__table" onClick={viewDetails}>
        <th scope="col">{index + 1}</th>
        <td>{new Date(data?.createdOn).toDateString()}</td>
        <td>{data?.totalSum} <small>&euro;</small></td>
        <ProductList data={data?.orderItems} />
    </tr>
}

export default OrderItemsDetails;