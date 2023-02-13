import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useState} from 'react';
import Header from './Components/Header';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'roast potatoes', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'fry bacon', key: '3'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*to form */}
        <View style={styles.list}>
          <FlatList 
            data = {todos}
            renderItem = {({item}) => (
              <Text>{item.text}</Text>
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
