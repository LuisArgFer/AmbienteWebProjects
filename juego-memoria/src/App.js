import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Card from './components/Card';


import { images } from './import';

function App() {

  const [turns, setTurns] = useState(0)
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i * 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp
    }
    
  }

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, [])

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);
  
  const flipCard = (name, number) => {
    if (firstCard.name == name && firstCard.number == number) {
      return 0;
      //no deja voltear la misma carta
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    }
    else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name == secondCard.name;
      match ? disableCards() : unflipCards();
      setTurns((prevTurns) => prevTurns + 1)
      
      
    }
  }

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetearjuego = () => {
    window.location.reload(true);
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  }

  return (
    <div className='app'>
      
      <div className='ret'><button onClick={resetearjuego}>New Game</button></div>

      <div className='cards-container'>
        {
          cards.map((card, index) => (
            
            <Card 
            name={card.Character} 
            number={index} 
            frontFace={card.src} 
            flipCard={flipCard} 
            unflippedCards = {unflippedCards}
            disabledCards = {disabledCards}
            />
            
          ))
        }
      </div>
      <div className='turnos'><p>Turns: {turns}</p></div>
      
      
      
    </div>
  );

  

}

export default App;
