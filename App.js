import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {

const [name, setName] = useState("Ian");
const [age, setAge] = useState(40)


  return (
    <View style={styles.container}>
        <Text>Enter name:</Text>
        <TextInput 
          multiline
          style={styles.input} 
          placeholder="e.g. John Doe"
          onChangeText = {(value) => setName(value)}
        />
        <Text>Enter age:</Text>
        <TextInput 
          keyboardType='numeric'
          style={styles.input} 
          placeholder="e.g. 20"
          onChangeText = {(value) => setAge(value)}
        />
      <View style={styles.body}>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  body: {
    marginTop: 20,
    backgroundColor: 'yellow',
    padding: 20,
  },
  enemyBody: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },

});
