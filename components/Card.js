import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View> 
};

const styles = StyleSheet.create({
    card: {
        //shadow-props are only working for iOS, for android we need to use elevation
        shadowColor: 'black', //can also use rgba and hex
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
});

export default Card;