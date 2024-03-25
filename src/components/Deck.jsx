import React, { useEffect, useState } from 'react';
import Card from './Card';

// const cardTypes = ['1', '2', '3', '4'];

const Deck = () => {

    const [deck, setDeck] = useState([])

    const initializeDeck = () => {
    
    const cards = [
     { cardName: 'Cat card', cardTitle: 'first title' },
     { cardName: 'Defuse card', cardTitle: 'second title' },
     { cardName: 'Shuffle card', cardTitle: 'third title' },
     { cardName: 'Exploding kitten card', cardTitle: 'forth title' }
    ]
    const tempDeck = [];
    
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    for (let i = 0; i < 5; i++) {
       tempDeck.push(cards[getRandomInt(0, cards.length - 1)]);
    }    
     return tempDeck;
    }
    
    useEffect(() => {
            const tempDeck = initializeDeck();
            setDeck(tempDeck);
            console.log(deck)
    }, [])

  return (
    <div>
     
    </div>
  );
};

export default Deck;
