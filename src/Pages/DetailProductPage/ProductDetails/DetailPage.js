import React from 'react';
import LeftSide from './Sides/LeftSide';
import RightSide from './Sides/RightSide';
import './DetailPage.css';
//import { Link } from 'react-dom';

const DetailPage = ({ content, createdOn, description, imageUrl, negativeVotes, positiveVotes, price, quantity, rating, shortContent, title, votesCount, id }) => {

    return <div className="container-fluid product__pagePerantHolder">

        <div className="row product__pageHolder">

            <div className="col-lg-3 ">
                <LeftSide
                    imageUrl={imageUrl}
                />
            </div>

            <div className="col-lg-9 bg-light">
                <RightSide
                    image={imageUrl}
                    id={id}
                    content={content}
                    createdOn={createdOn}
                    description={description}
                    imageUrl={imageUrl}
                    negativeVotes={negativeVotes}
                    positiveVote={positiveVotes}
                    price={price}
                    quantity={quantity}
                    rating={rating}
                    shortContent={shortContent}
                    title={title}
                    votesCount={votesCount}
                />
            </div>

        </div>
    </div>
}

export default DetailPage;