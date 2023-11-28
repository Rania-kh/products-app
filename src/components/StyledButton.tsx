import React from 'react';
import { Button, Pressable, StyleSheet, Text } from 'react-native';

export default function StyledButton(props: Button['props']) {
    const { onPress, title = 'Save' } = props;
    return (
        <Pressable style={[styles.button, { backgroundColor: props.color ?? 'blue' }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        width: '100%'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
