import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';
import CardComp from '../components/CardComp';
import InputComp from '../components/InputComp';

const StartGameScreen = ( props ) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [conformedNumber, setconformedNumber] = useState();
    const [numberSelected, setNumberSelected] = useState(false);
    const handelInputText = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }
    const handelRset = () => {
        setEnteredValue('');
        setNumberSelected(false);
    }

    const handelConform = () => {
        const value = parseInt(enteredValue);
        if (isNaN(value) || value <= 0 || value > 99) {
            Alert.alert('Invalid Number',
                'Enter a valid Number',
                [{ text: 'okay', style: "destructive", onPress: handelRset },
                { text: 'okay', style: "cancel", onPress: handelRset }])
            return;
        }
        setEnteredValue('');
        setconformedNumber(parseInt(enteredValue))
        setNumberSelected(true);
        Keyboard.dismiss();

    }

    let numberConformed;

    if (numberSelected) {
        numberConformed =
            <CardComp style={{margin: 20}}>
                <Text>Chosen Number</Text>
                <Text style={{fontSize: 20}}>{conformedNumber}</Text>
                <Button style={{margin: 20}} title="start game" onPress={() => props.onStartGame(conformedNumber)}></Button>
            </CardComp>
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text>StartGameScreen</Text>
                <CardComp style={styles.inputContainer}>
                    <Text>Select the number</Text>
                    <InputComp placeholder="Enter Number" keyboardType="number-pad" maxLength={2}
                        onChangeText={handelInputText}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <Button title="Reset" onPress={handelRset} />
                        <Button title="Conform" onPress={handelConform} />
                    </View>
                </CardComp>
                {numberConformed}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default StartGameScreen;

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
