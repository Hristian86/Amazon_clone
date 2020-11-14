import React from 'react';
import './SearchResult.css';
import { useState } from 'react';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import FetchData from '../../components/AuthListener/FetchData';
import Loader from '../../components/Loader/Loader';
import Products from '../../components/Products/Products';

const SearchResult = () => {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let searchItem = query.get("search");
    const [searchWord, setSearchWord] = useState();
    const [product, setProduct] = useState({
        data: [],
    });


    // checking data from back end, if its present then it will itererate thrugh the product array and map the product to the component
    // Catched most of the obvius use cases
    const filter = async (searchItemName) => {
        if (searchItemName !== undefined && searchItemName !== "" && searchItemName !== null && searchItemName.length > 0) {

            const result = await FetchData(`api/search?search=${searchItemName}`, null, "GET");
            if (result && !result.error && !result.errors) {
                setProduct({
                    data: result,
                });
                setSearchWord(searchItemName);
                console.log(result);
            }
        }
    }

    // Get the product on url call
    if (searchWord !== query.get("search")) {
        filter(searchItem);
    }

    return <div>

        <div className="">
        <h2 className="text-center">You searched for '{searchItem}'</h2>

            <img className="home__image2" src="https://www.sellerapp.com/blog/wp-content/uploads/2019/02/Amazon-Product-Photography-Guidelines-and-1.png" alt="." />
        </div>


        <div className="row justify-content-center">
            {product?.data?.searchResult === undefined ? <Loader /> : null}
            {product?.data?.searchResult?.map((data, index) => (
                <Products
                    className="col-4"
                    categoryId={data?.categoryId}
                    index={index}
                    key={data?.id}
                    id={data?.id}
                    title={data?.title}
                    price={data?.price}
                    data={data}
                    rating={data?.rating}
                    image={data?.imageUrl}
                />
            ))}
        </div>

    </div>

}

export default SearchResult;