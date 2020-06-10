import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = ({ params }) => {
  const [userNumber, setUserNumber] = useState();


  const startGameHandler = selectNumber => {
    setUserNumber(selectNumber);
  }

  let constant = <StartGameScreen onStartGame={startGameHandler} />

  if(userNumber) {
    console.warn("ok" + userNumber)
    constant = <GameScreen userChoice={userNumber}/>
  }
  return (


    <View style={styles.Screen}>
      <Header header={"Guess the Number"} />
      {constant}
      <Text>App</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  Screen: {
    flex: 1
  }
});
