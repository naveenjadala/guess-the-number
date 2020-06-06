import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App = ({ params }) => (
  <View style={styles.Screen}>
    <Header header={"Guess the Number"} />
    <StartGameScreen />
    <Text>App</Text>
  </View>
);

export default App;

const styles = StyleSheet.create({
  Screen: {
    flex: 1
  }
});
