import React, {useEffect, useState} from 'react';
import Card from './card';
import './cardsection.css';

function CardSection(){
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {

        fetch('./data/cards.json')
            .then((response) => response.json())
            .then((data) => setCardsData(data));
    }, []);


    return (
        <div id="card-section"> 
            <h2>Wings</h2>
            <div className="cards-section">
            {cardsData.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    extrainfo={card.extrainfo}
                    image={card.image}
                />
            ))}
            </div>
        </div>    
    );
}

export default CardSection;
