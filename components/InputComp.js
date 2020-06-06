import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const InputComp = props => (
    <TextInput style={{ ...styles.inputStyle, ...props.style }} {...props}/>
);

export default InputComp;

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 15
    }
});
