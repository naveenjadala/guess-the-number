import React, { Children } from 'react';
import {
    Text,
    StyleSheet, 
    View
} from 'react-native';

const CardComp = props => (
    <View style={{ ...styles.inputContainer, ...props.style }}>
        {props.children}
    </View>
)
export default CardComp;

const styles = StyleSheet.create({
    inputContainer: {
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
})

