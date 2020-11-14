import React, { useState } from 'react';
import './RightSide.css';
import { useStateValue } from '../../../../components/ContextApi/StateProvider';
import { useAlert } from 'react-alert';
import AlertProductComponent from '../../../../components/Products/AlertProductcomponent';

const RightSide = ({ content, createdOn, description, negativeVotes, positiveVote, price, quantity, rating, shortContent, title, votesCount, id, image }) => {
    
    const [{ basket }, dispatch] = useStateValue();
    const [state, setState] = useState();

    const alert = useAlert();

    // Adding product to the basket and check for duplicate if there are no duplacate in the context api store it will be added witch dispatching an action
    const addToBasket = () => {

        const checkBasketForRepeatence = basket.filter(data => data.id == id);

        if (checkBasketForRepeatence[0] === undefined) {
            setState({
                loader: true,
            });
            alert.show(<AlertProductComponent image={image} title={title} message={"Added to the basket"} />);
            setTimeout(() => {
                setState({
                    loader: false,
                });
            }, 700)

            dispatch({
                type: 'ADD_TO_BASKET',
                items: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            })
        } else {
            alert.show(<AlertProductComponent message={"Item already in the basket"} />);
        }
    }

    return <div className="pt-3 pl-1 pr-1">

        <h1 className="title__holder">
            {title}
        </h1>

        <div className="d-flex rating__holder">
            {Array(rating)
                .fill()
                .map((_, index) => (
                    <p key={index} className="text-warning mr-1"><i className="fa fa-star"></i></p>
                ))}
            - {votesCount} ratings <i className="ml-2 pt-1 fa fa-thumbs-up"></i> <div className="ml-1">{positiveVote}</div>
            <i className="ml-2 pt-1 fa fa-thumbs-down"></i> <div className="ml-1">{negativeVotes}</div>
        </div>

        <hr />

        <div className="d-flex justify-content-between">
            <div>
                {quantity === 1
                    ? "Only one left in stock"
                    : quantity + " in stock"
                }
            </div>

            <div>
                <strong className=""> {price} <small>&euro;</small></strong>
            </div>
        </div>

        <hr />
        <div className="media row">
            <h2
                className="pb-1 col-md-12 text-center description__header">
                Description
                </h2>

            <div className="media-body description__holder col-md-12">
                {description}
            </div>
        </div>

        <hr />

        <div className="media row">
            <h2
                className="pb-1 col-md-12 text-center description__header">
                Product info
                </h2>

            <div className="media-body content__holder col-md-12">
                {content}
            </div>
        </div>

        <div className="text-right mt-3 mb-3">
            <button onClick={addToBasket} className="btn btn-warning">Add to basket</button>
        </div>

    </div>

}

export default RightSide;