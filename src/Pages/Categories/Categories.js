import React from 'react';
import { useParams } from 'react-router';
import Products from '../../components/Products/Products';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import './Categories.css';
import Loader from '../../components/Loader/Loader';

const Categories = (props) => {
    const [{ fetchData }, dispatch] = useStateValue();
    let { id } = useParams();
    let parms = useParams();
    //console.log(id);
    //console.log(parms);

    // checking data from back end, if its present then it will itererate thrugh the product array and map the product to the component
    const filter = () => {
        if (id !== undefined && fetchData[0] !== undefined) {
            const displayItems = fetchData[0][id]?.products;
            console.log(displayItems);
            return displayItems;
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
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    price={data.price}
                    data={data}
                    rating={data.rating}
                    image={data.imageUrl}
                />
            ))}
        </div>
    </div>
}

export default Categories;