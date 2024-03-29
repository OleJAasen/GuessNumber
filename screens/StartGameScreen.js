import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.text}>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="numeric" maxLength={2}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={() => {}} color={colors.accent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={colors.primary}/></View>
                </View>
            </Card>
        </View>

        
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width:300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 20
    },
    button:
    {
        width: 100
    },
    text:{
        alignItems: 'center'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
});

export default StartGameScreen;