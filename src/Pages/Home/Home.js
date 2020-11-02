import React from 'react';
import './Home.css';
import Products from '../../components/Products/Products';
import { useStateValue } from '../../components/ContextApi/StateProvider';
import Loader from '../../components/Loader/Loader';

const Home = () => {

    const [{ fetchData }, dispatch] = useStateValue();

    // Test for the context api store date
    const showData = () => {
        console.log(fetchData[0]);
    }

    return <div className="home bg-light">

        <img className="home__image" src="/images/amazon_prime.jpg" alt="." />

        <div className="home__row row ml-sm-2 justify-content-center">

            {/*<button onClick={showData} >click</button>*/}

            <div className="categories-info">
                <h1 className="text-white shadow-box">
                    Categories
                </h1>
            </div>

            <div className="row justify-content-center">
                {fetchData[0] === undefined ? <Loader /> : null}
                {fetchData[0]?.map((data, index) => (
                    <Products
                        className="col-6"
                        index={index}
                        key={data.id}
                        id={data.id}
                        title={data.name}
                        price={0}
                        data={data}
                        rating={0}
                        productsCount={data.productsCount}
                        image={data.imageURL}
                    />
                ))}
            </div>
        </div>
    </div>
}

export default Home;