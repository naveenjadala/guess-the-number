import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    TextInput
} from 'react-native';
import CardComp from '../components/CardComp';
import InputComp from '../components/InputComp';

const StartGameScreen = ({ params }) => {
    const [enteredValue, setEnteredValue] = useState('');

    const handelInputText = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    return(
        <View style={styles.screen}>
            <Text>StartGameScreen</Text>
            <View style={styles.inputContainer}>
                <Text>Select the number</Text>
                <InputComp style={{ borderWidth: 1 }} placeholder="Enter Number" keyboardType="number-pad" maxLength={2} 
                onChangeText={handelInputText}
                value={enteredValue}/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" />
                    <Button title="Conform" />
                </View>
            </View>

        </View>
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
        height: undefined,
        alignItems: "center",
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between"
    }
})
