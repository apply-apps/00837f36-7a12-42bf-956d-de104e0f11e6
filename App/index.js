// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';
import { View as LetterView, Text as LetterText, StyleSheet as LetterStyleSheet } from 'react-native';

const LetterDisplay = ({ letter }) => {
    return (
        <LetterView style={letterStyles.container}>
            <LetterText style={letterStyles.letter}>{letter}</LetterText>
        </LetterView>
    );
};

const letterStyles = LetterStyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
    },
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextLetter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read</Text>
            <LetterDisplay letter={letters[currentIndex]} />
            <View style={styles.buttonContainer}>
                <Button title="Next Letter" onPress={showNextLetter} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
    },
});