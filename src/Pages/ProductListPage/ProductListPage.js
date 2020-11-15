import React from 'react';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import { useLocation, useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';
import Products from '../../components/Products/Products';

const ProductList = () => {
    const [{ fetchData }, dispatch] = useStateValue();

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let categoryid = query.get("categoryid");
    let categoryPerantId = query.get("categoryPerantId");
    //let { id } = useParams();
    let parms = useParams();
    //console.log(id);
    console.log(parms);


    // checking data from back end, if its present then it will itererate thrugh the product array and map the product to the component
    const filter = () => {
        if (categoryid !== undefined && fetchData[0] !== undefined) {

            let displayItemss = [];
            let sortedData = fetchData[0]?.filter(data => {
                if (data.id == categoryPerantId) {
                    console.log(data.categories);
                    return data?.categories?.filter(data => {
                        if (data.id == categoryid) {
                            console.log(data.products);
                            displayItemss = data.products;
                            return data.products;
                        }
                    });
                }
            });

            return displayItemss;
        }
    }

    const showData = () => {
        console.log("Here is the data");
    }

    // array for map-ing products
    const displayArray = filter();

    return <div className="bg-light">

        <div className="">

            <img className="home__image2" src="https://www.sellerapp.com/blog/wp-content/uploads/2019/02/Amazon-Product-Photography-Guidelines-and-1.png" alt="." />
        </div>

        <div className="row justify-content-center">
            {displayArray === undefined ? <Loader /> : null}
            {displayArray?.map((data, index) => (
                <Products
                    className="col-4"
                    index={index}
                    categoryId={data?.categoryId}
                    categoryPerantId={categoryPerantId}
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

export default ProductList;