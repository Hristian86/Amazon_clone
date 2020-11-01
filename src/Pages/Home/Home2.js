import React from 'react';
import './Home.css';
import Products from '../../components/Products/Products';
import { useStateValue } from '../../components/ContextApi/StateProvider';

const Home2 = () => {

    const [{ fetchData }, dispatch] = useStateValue();

    //let array = [{
    //    id: 1,
    //    userName: "Prncho"
    //}, {
    //    id: 2,
    //    userName: "Go6o"
    //}]
    const showData = () => {
        console.log(fetchData[0]);
    }

    return <div className="home bg-light">

        <img className="home__image" src="/images/amazon_prime.jpg" alt="." />

        <div className="home__row row ml-sm-2 justify-content-center">

            <button onClick={showData} >click</button>

            {fetchData[0]?.map((data, index) => (
                <Products
                    className="col-4"
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



            {/*<Products
                className="col-6"
                id="1"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />

            <Products
                className="col-6"
                id="2"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />

        </div>

        <div className="home__row row ml-sm-2 justify-content-center">
            <Products
                className="col-4"
                id="3"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />

            <Products
                className="col-4"
                id="4"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />
            <Products
                className="col-4"
                id="5"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />

        </div>

        <div className="home__row row ml-sm-2 justify-content-center">
            <Products
                className="col-6"
                id="6"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49hg90dmnxza/gallery/09142017/CHG90-NEW_1.jpg?$product-details-jpg$"
            />*/}
        </div>

    </div>
}

export default Home2;