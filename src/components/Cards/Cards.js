import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useStateValue } from '../ContextApi/StateProvider';
import { ADD_TO_BASKET } from '../ContextApi/Types';

const Cards = ({id, userName }) => {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: ADD_TO_BASKET,
            items: {
                id: id,
                userName: userName
            },
        })
    }

    return <div key={id} className="col-6">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://s12emagst.akamaized.net/products/25152/25151183/images/res_a7cdb843072c8155cc20cca65b3c849b_200x200_lj47.jpg" />
            <Card.Body className="text-center">
                <Card.Title>Gigabyte Radeon™ RX 5700</Card.Title>
                <Card.Text>
                    Видео карта Gigabyte Radeon™ RX 5700 GAMING OC, 8GB GDDR6, 256-bit
    </Card.Text>
                <Button onClick={addToBasket} variant="primary" >Add to basket</Button>
            </Card.Body>
        </Card>
    </div>
}

const Data = (props) => {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            items: {
                key: props.props
            },
        })
    }

    return <div key={1} className="">
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="https://s12emagst.akamaized.net/products/25152/25151183/images/res_a7cdb843072c8155cc20cca65b3c849b_200x200_lj47.jpg" />
            <Card.Body className="text-center">
                <Card.Title>Gigabyte Radeon™ RX 5700</Card.Title>
                <Card.Text>
                    Видео карта Gigabyte Radeon™ RX 5700 GAMING OC, 8GB GDDR6, 256-bit
    </Card.Text>
                <Button onClick={addToBasket} variant="primary" >Add to basket</Button>
            </Card.Body>
        </Card>
    </div>
}

export default Cards;