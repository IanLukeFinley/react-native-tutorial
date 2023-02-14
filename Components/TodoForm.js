import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function TodoForm ({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style = {styles.input}
                placeholder="New To-Do"
                onChangeText = {changeHandler}
            />
            <Button 
                onPress={() => {
                    console.log(text),
                    submitHandler(text)
                }} 
                title='Add To-Do' 
                color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    }
})
