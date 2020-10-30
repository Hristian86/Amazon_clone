import React, { Component } from 'react';
import './Hearth.css'

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [], loading: true
        };
    }

    componentDidMount() {
        this.Cards()
    }

    static ShowCards(Cards) {
        
        return (
            <div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                        {Cards.Naxxramas.map(Cards =>
                            <tr key={Cards.cardId}>
                                <td>{Cards.id}</td>
                                <td>{Cards.name}</td>
                                <td>{Cards.cardSet}</td>
                                <td>{Cards.flavor}</td>
                                <td><img src={Cards.img} /></td>
                                <td><img src={Cards.imgGold} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p className="load"><em>Loading...</em></p>
            : Card.ShowCards(this.state.cards);

        return (
            <div>
                {contents}
            </div>
        )
    }

    async Cards() {

        const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                "x-rapidapi-key": "f2d5faffa5msh59f636881a5e715p1558e3jsn424dea256306"
            }
        });

        const data = await response.json();
        this.setState({ cards: data, loading: false });
    }
}