import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react';

export default function App() {

const [people, setPeople] = useState([
  {name: 'ian', key: '1'},
  {name: 'matt', key: '2'},
  {name: 'jon', key: '3'},
  {name: 'george', key: '4'},
  {name: 'james', key: '5'},
  {name: 'benjamin', key: '6'},
  {name: 'seph', key: '7'},
]);



  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map( item => 
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
        )} 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 30,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 34,
  }
 

});
