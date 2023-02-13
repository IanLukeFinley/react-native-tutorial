import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {

const [name, setName] = useState("Ian");
const [enemy, setEnemy] = useState({ name: 'Mario', age: 40})

const nameHandler = () => {
  name === "Ian" ? setName("Ethan") : setName("Ian");
}

const enemyHandler = () => {
  enemy.name === "Mario" ? setEnemy({ name: 'Luigi', age: 42}) : setEnemy({ name: 'Mario', age: 40});
}


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={nameHandler} />
      </View>
      <View style={styles.body}>
        <Text>This is {name}'s app!</Text>
      </View>
      <View style={styles.enemyBody}>
        <Text>My enemy is {enemy.name}, who is {enemy.age}!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Update Enemy' onPress={enemyHandler} />
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
