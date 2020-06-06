import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const Header = ({ params, header }) => (
    <View style={styles.container}>
        <Text >{header}</Text>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'gray'
    }
});
