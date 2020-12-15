import React from 'react';
import OrderItemsDetails from './OrderItemsDetails';

// Order table mapping.
const OrderTable = ({ state }) => {

    return <tbody>
        {state?.orders?.orders?.userOrders
            ?
            state?.orders?.orders?.userOrders?.map((data, index) =>
                <OrderItemsDetails key={index} data={data} index={index} />
            )
            : null}
    </tbody>
}

export default OrderTable;