import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useState} from 'react';
import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import TodoForm from './Components/TodoForm'

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'roast potatoes', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'fry bacon', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, {text: text, key: Math.random().toString() }]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
          <TodoForm submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data = {todos}
            renderItem = {({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40
  },
  list: {
    marginTop: 20
  },


});
