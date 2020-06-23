import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from "./screens/GmeOverScreen";

const App = ({ params }) => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const guessHandler = numberOfGuess => {
    setGuessRounds(numberOfGuess);
  }

  const startGameHandler = selectNumber => {
    setUserNumber(selectNumber);
    setGuessRounds(0);
  }

  let constant = <StartGameScreen onStartGame={startGameHandler} />

  if(userNumber && guessRounds <= 0) {
    console.warn("ok" + userNumber)
    constant = <GameScreen userChoice={userNumber}  onGameOver={guessHandler}/>
  } else if(guessRounds > 0) {
     constant =<GameOverScreen numberOfRounds={guessRounds} selectedNumber={userNumber} />
  }
  return (


    <View style={styles.Screen}>
      <Header header={"Guess the Number"} />
      {constant}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    borderRadius : 20,
  }
});