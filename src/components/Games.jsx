const [diffuseCardCount, setDiffuseCardCount] = useState(0)
const [currentCard, setCurrentCard] = useState(null)
const [cardIsShowing, setCardIsShowing] = useState(false);
const [gameOver, setGameOver] = useState(false);
const [gameWon, setGameWon] = useState(false);

const handleCardShow = () => {
 const tempDeck = [...deck];
 const currCard = tempDeck[tempDeck.length-1];
 setCurrentCard(currCard)
 setCardIsShowing(true)
 setTimeout(() => {
   if(tempDeck.length == 1 && currCard.cardName != "Shuffle card" 
 && currCard.cardName != "Exploding kitten card"){
    setGameWon(true)
    dispatch(updateScore())
 }
 if(currCard.cardName == "Cat card"){
   //remove card from deck
   tempDeck.pop();
   setDeck(tempDeck);
 }
 else if(currCard.cardName == "Defuse card"){
 setDiffuseCardCount(prev => prev + 1)
 tempDeck.pop();
 setDeck(tempDeck);
 }
 else if(currCard.cardName == "Shuffle card"){
 restartGame() //Restart Game 
}
 else if(currCard.cardName == "Exploding kitten card"){ //exploding kitten card
  if(diffuseCardCount > 0 ){ //if player has any diffuse cards
   setExplodeAction(true);   //Game over
  }
  else{
   setGameOver(true)
 }
}
 setCurrentCard(null); //set currentCard to null after 2.5 secs
 setCardIsShowing(false)
 }, 2500)

}