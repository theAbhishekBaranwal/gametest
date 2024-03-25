import React, { useState } from 'react';
import Deck from './Deck';
import Card from './Card';

const Game = () => {
  const [drawnCards, setDrawnCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleDrawCard = (drawnCard) => {
    setDrawnCards([...drawnCards, drawnCard]);
    switch (drawnCard) {
      case '4':
        setGameOver(true);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Exploding Kittens Game</h1>
      {!gameOver ? (
        <div>
          <Deck onDrawCard={handleDrawCard} />
          <h2>Drawn Cards:</h2>
          {drawnCards.map((card, index) => (
            <Card key={index} type={card} />
          ))}
        </div>
      ) : (
        <h2>Game Over! You drew an Exploding Kitten 💣</h2>
      )}
    </div>
  );
};

export default Game;


