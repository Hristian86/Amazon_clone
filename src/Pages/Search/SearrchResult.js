import React from 'react';
import './SearchResult.css';
import { useState } from 'react';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import FetchData from '../../components/AuthListener/FetchData';
import Loader from '../../components/Loader/Loader';
import Products from '../../components/Products/Products';

// Search is implemented not efficient, if there are many branches/categories it will get even slower.
// For now it works, but for future ,if it has alot of products, it will not work well and then it has to be refactored.
// Potential idea is to make the search on the backend or to add in contextApi store, separeted array that contains only products and To Do the search there. 
let loading = false;
const SearchResult = () => {
    const [{ fetchData }, dispatch] = useStateValue();

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let searchItem = query.get("search");
    const [searchWord, setSearchWord] = useState("");
    const [product, setProduct] = useState({
        data: [],
    });


    // Checking data from back end, if its present then it will itererate thrugh the product array and map the product to the component.
    // Catched most of the obvious use cases.
    const filters = (searchItemName) => {
        if (searchItemName !== undefined && searchItemName !== "" && searchItemName !== null && searchItemName.length > 0 && fetchData[0] !== undefined) {
            loading = true;
            let display = [];
            
            let sortedData = fetchData[0]?.filter(data => {

                return data?.categories?.filter(data => {
                    //console.log(data?.products);
                    return data?.products?.filter(data => {
                        // Check the searched word/char in the title, it can be implemented with different search properties, not only by title.
                        if (data.title.toLowerCase().includes(searchItemName.toLowerCase().toString())) {
                            // Adding data search result in return array.
                            display.push(data);
                            return data
                        }
                    });

                });
            });

            return display;
        }
    }

    //useEffect(() => {
    //    if (searchWord !== query.get("search")) {
    //        setSearchWord(searchItem);
    //        let result = filters(searchItem);
    //        setProduct({
    //            data: result,
    //        });
    //    }
    //}, [fetchData]);

    // Checking the search word in the search bar if it is changed and if it is changed, redisplay the filters method results.
    if (searchWord !== query.get("search")) {
        setSearchWord(searchItem);
        let result = filters(searchItem);
        setProduct({
            data: result,
        });
    }

    // Search result view.
    return <div className="bg-light">

        <div className="">
            <h2 className="text-center search__results">You searched for '{searchItem}'</h2>

            <img className="home__image" src="https://www.sellerapp.com/blog/wp-content/uploads/2019/02/Amazon-Product-Photography-Guidelines-and-1.png" alt="." />
        </div>


        <div className="row justify-content-center">
            {product?.data === undefined
                ?
                loading ? <Loader /> : null
                : null}
            {product?.data?.map((data, index) => (
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