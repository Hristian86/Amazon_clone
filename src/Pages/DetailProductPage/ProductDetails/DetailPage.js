import React from 'react';
import LeftSide from './Sides/LeftSide';
import RightSide from './Sides/RightSide';
//import { Link } from 'react-dom';

const DetailPage = ({ content, createdOn, description, imageUrl, negativeVotes, positiveVotes, price, quantity, rating, shortContent, title, votesCount, id }) => {

    return <div className="container-fluid">
        <div className="row">

            <LeftSide
                imageUrl={imageUrl}
            />

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
}

export default DetailPage;