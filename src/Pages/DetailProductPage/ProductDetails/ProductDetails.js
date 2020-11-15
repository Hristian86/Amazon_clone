import React, { useState } from 'react';

import { useParams, useLocation } from 'react-router';
import DetailPage from './DetailPage';
import { useStateValue } from '../../../components/ContextApi/StateProvider';
import './ProductDetails.css';
import { useEffect } from 'react';
import Loader from '../../../components/Loader/Loader';

let load = false;
const PrdocutDetails = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let categoryPerantId = query.get("categoryPerantId");
    let id = query.get("categoryid");
    let productid = query.get("productid");
    //console.log(productid);
    //const { id } = useParams();
    //const { productid } = useParams();
    const [product, setProduct] = useState({
        data: [],
    });


    const [{ fetchData }, dispatch] = useStateValue();

    // checking data from back end, if its present then it will itererate thrugh the product array and map the product to the component
    // Catched most of the obvius use cases
    const filter = () => {
        if (id !== undefined && id !== "" && id !== null && id.length > 0 && fetchData[0] !== undefined) {


            let displayItemss = [];
            let sortedData = fetchData[0]?.filter(data => {

                if (categoryPerantId === "undefined") {
                    return data?.categories?.filter(data => {
                        if (data.id == id) {
                            displayItemss = data.products.filter(data => data.id == productid);
                            return data.products;
                        }
                    });
                } else if (data.id == categoryPerantId) {
                    return data?.categories?.filter(data => {
                        if (data.id == id) {
                            displayItemss = data.products.filter(data => data.id == productid);
                            return data.products;
                        }
                    });
                }
            });

            //products;
            if (displayItemss[0] !== undefined) {
                setProduct({
                    data: displayItemss,
                })
            }
        }
    }

    // Get the product on url call
    useEffect(() => {
        if (fetchData[0] !== undefined) {
            filter();
        }
    }, [fetchData])
    console.log(product);
    return <div className="container container__perant">

        {product.data[0] !== undefined ?

            product.data.map((data, index) => (
                < DetailPage
                    key={data?.id}
                    id={data?.id}
                    categoryId={data?.categoryId}
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