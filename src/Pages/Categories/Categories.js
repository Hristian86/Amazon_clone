import React from 'react';
import { useParams, useLocation } from 'react-router';
import Products from '../../components/Products/Products';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import './Categories.css';
import Loader from '../../components/Loader/Loader';

const Categories = (props) => {
    const [{ fetchData }, dispatch] = useStateValue();

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let id = query.get("id");
    //let { id } = useParams();
    let parms = useParams();
    //console.log(id);
    console.log(parms);


    // checking data from back end, if its present then it will itererate thrugh the product array and map the product to the component
    const filter = () => {
        if (id !== undefined && fetchData[0] !== undefined) {
            let displayItems = fetchData[0].map(data => {
                if (data.id == id) {
                    console.log(data?.products);
                    return data?.products;
                }
            });

            //[id]?.products;
            //console.log(displayItems);
            const data = displayItems.filter(data => data !== undefined);
            console.log(data);
            return data[0];
        }
    }

    const showData = () => {
        console.log("Here is the data");
    }

    // array for map-ing products
    const displayArray = filter();

    // Not using this component.
    return <div className="bg-light">

        <div className="">

            <img className="home__image2" src="/images/amazon_prime2.jpg" alt="." />
        </div>

        <div className="row justify-content-center">
            {displayArray === undefined ? <Loader /> : null}
            {displayArray?.map((data, index) => (
                <Products
                    className="col-4"
                    index={index}
                    categoryId={data?.categoryId}
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

export default Categories;