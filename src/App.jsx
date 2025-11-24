import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";

const cardValues = [
  "😃",
  "😍",
  "😉",
  "🙃",
  "🙂",
  "😎",
  "😵‍💫",
  "😭",
  "😃",
  "😍",
  "😉",
  "🙃",
  "🙂",
  "😎",
  "😵‍💫",
  "😭"
]

function App() {
  const [cards, setCards] = useState([])

  const intitializeGame = () => {
    //TODO: SHUFFLE THE CARDS
    const finalCards = setCards(cardValues.map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false
      })));

      setCards(finalCards);
  };

  useEffect(() => {
    intitializeGame();
  }, []);

  return (<div className="app">
    <GameHeader score = {99} moves = {99}/>

    <div className="cards-grid">
      {cards.map((card) => (
        <Card card = {card} />
      ))}
    </div>
  </div>
  );
}

export default App;
