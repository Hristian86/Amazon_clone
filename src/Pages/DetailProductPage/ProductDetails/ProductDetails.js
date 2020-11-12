import React, { useState } from 'react';

import { useParams } from 'react-router';
import DetailPage from './DetailPage';
import { useStateValue } from '../../../components/ContextApi/StateProvider';
import './ProductDetails.css';
import { useEffect } from 'react';
import Loader from '../../../components/Loader/Loader';

let load = false;
const PrdocutDetails = () => {
    const { id } = useParams();
    const { productid } = useParams();
    const [product, setProduct] = useState({
        data: [],
    });


    const [{ fetchData }, dispatch] = useStateValue();

    // checking data from back end, if its present then it will itererate thrugh the product array and map the product to the component
    const filter = () => {
        if (id !== undefined && fetchData[0] !== undefined) {
            let returnProductItem = [];
            const displayItems = fetchData[0][id]?.products;
            returnProductItem = displayItems.filter(data => {
                if (data.id == productid) {
                    return data;
                }
            });
            console.log(displayItems);
            console.log(returnProductItem);
            setProduct({
                data: returnProductItem,
            })
        }
    }

    // Get the product on url call
    useEffect(() => {
        if (fetchData[0] !== undefined) {
            filter();
        }
    }, [fetchData])

    return <div className="container-fluid container__perant">

        {product.data[0] !== undefined ?

            product.data.map((data, index) => (
                < DetailPage
                    key={data?.id}
                    id={data?.id}
                    content={data?.content}
                    createdOn={data?.createdOn}
                    description={data?.description}
                    imageUrl={data?.imageUrl}
                    negativeVotes={data?.negativeVotes}
                    positiveVotes={data?.positiveVotes}
                    price={data?.price}
                    quantity={data?.quantity}
                    rating={data?.rating}
                    shortContent={data?.shortContent}
                    title={data?.title}
                    votesCount={data?.votesCount}
                />
            ))
            :
            null
        }

        {fetchData[0] === undefined ? 
            <div className="text-center">
                <Loader />
            </div>
            :
            null
            }

        {fetchData[0] !== undefined && product.data[0] === undefined
            ? <div className="text-center">Item not found</div>
            : null
            }

    </div>

}
export default PrdocutDetails;