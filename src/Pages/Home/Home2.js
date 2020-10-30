import React from 'react';
import './Home.css';
import Products from '../../components/Products/Products';

const Home2 = () => {

    //let array = [{
    //    id: 1,
    //    userName: "Prncho"
    //}, {
    //    id: 2,
    //    userName: "Go6o"
    //}]

    return <div className="home bg-light">

        <img className="home__image" src="/images/amazon_prime.jpg" alt="." />

        <div className="home__row ml-sm-2 justify-content-center">
            <Products
                id="123123"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />

            <Products
                id="123123"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />

        </div>
        <div className="home__row ml-sm-2 justify-content-center">
            <Products
                id="123123"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />

            <Products
                id="123123"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />
            <Products
                id="123123"
                title="the product as dad asd asd asd asd asd asd asd"
                price={11.99}
                rating={5}
                image="https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_960_720.jpg"
            />

        </div>
    </div>
}

export default Home2;