import React from 'react';
import './Products.css';

const Products = ({ id, title, image, price, rating }) => {

    return <div className="product">

        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>&euro;</small>
                <strong>{price}</strong>
            </p>

            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p className="glyphicon glyphicon-star text-warning"></p>
                    ))}
            </div>
        </div>

        <img src={image} alt="." />
        <button className="btn w-25 m-auto">Add to basket</button>
    </div>
}

export default Products;