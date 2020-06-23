import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import CardComp from '../components/CardComp';

const RandamNumber = (min, max, excluded) => {
    console.warn("ok" + excluded)
    min = Math.ceil(min);
    max = Math.floor(max);
    const randamNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randamNumber === excluded) {
        return RandamNumber(min, max, excluded);
    } else {
        return randamNumber;
    }
}

const GameSccreen = (props) => {
    const [currectGuess, setCurrectGuess] = useState(RandamNumber(1, 100, props.userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currectHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currectGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currectGuess, userChoice, userChoice])


    const nextGuessHandler = direaction => {
        if (direaction === 'lower' && currectGuess < props.userChoice || direaction === 'greater' && currectGuess > props.userChoice) {
            Alert.alert('wrong guess', 'make a currect guess', [{ text: 'ok', style: "cancel" }])
            return;
        }

        if (direaction === 'lower') {
            currectHigh.current = currectGuess;
        } else {
            currentLow.current = currectGuess;
        }
        const nextNumber = RandamNumber(currentLow.current, currectHigh.current, currectGuess);
        setCurrectGuess(nextNumber);
        setRounds(rounds => rounds + 1);
    }

    return (
        <CardComp style={{ width: '80%', justifyContent: 'center' }}>
            <Text>{currectGuess}</Text>
            <View style={styles.buttonContainer}>
                <Button title="low" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="high" onPress={nextGuessHandler.bind(this, 'greater')} />
            </View>
        </CardComp>
    );
}

export default GameSccreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        height: undefined
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between"
    }
})
