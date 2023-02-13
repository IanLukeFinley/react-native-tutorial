import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useState} from 'react';

export default function App() {

const [people, setPeople] = useState([
  {name: 'ian', id: '1'},
  {name: 'matt', id: '2'},
  {name: 'jon', id: '3'},
  {name: 'george', id: '4'},
  {name: 'james', id: '5'},
  {name: 'benjamin', id: '6'},
  {name: 'seph', id: '7'},
]);



  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
            <Text style={styles.item}>{item.name}</Text>
        )}
      />
      {/* <ScrollView>
        { people.map( item => 
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
        )} 
      </ScrollView> */}
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
    marginHorizontal: 10,
  }
 

});
