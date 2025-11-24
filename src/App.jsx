import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

const cardValues = [
  "😃", "😍", "😉", "🙃", "🙂", "😎", "😵‍💫", "😭",
  "😃", "😍", "😉", "🙃", "🙂", "😎", "😵‍💫", "😭"
]

function App() {
  const [cards, setCards] = useState([])

  const intitializeGame = () => {
    //TODO: SHUFFLE THE CARDS
    const finalCards = cardValues.map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      }));

      setCards(finalCards);
  };

  useEffect(() => {
    intitializeGame();
  }, []);

  const handleCardClick = (card) => {
    if(card.isFlipped || card.isMatched){
      return;
    }
    const newCards = cards.map((c) => { // Copy with the updated state
      if (c.id === card.id) {
        return {...c, isFlipped: true};
      }
        return c; // Maybe should keep the else
    });
    setCards(newCards);
  };

  return (<div className="app">
    <GameHeader score = {99} moves = {99}/>

    <div className="cards-grid">
      {cards.map((card) => (
        <Card card = {card} onClick={handleCardClick} />
      ))}
    </div>
  </div>
  );
}

export default App;
