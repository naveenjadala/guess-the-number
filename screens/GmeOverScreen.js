import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GameOverScreen = ( props ) => (
    <View>
        <Text>GameOverScreen {props.numberOfRounds} {props.selectedNumber}</Text>
    </View>
);

export default GameOverScreen;

const styles = StyleSheet.create({

});
