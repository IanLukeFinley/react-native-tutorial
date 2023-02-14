import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Header (){
    return(
       <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
       </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#333',
    },
    boxOne: {
        flex: 2,
        //padding: 10,
        backgroundColor: 'violet',
    },
    boxTwo: {
        flex: 1,
        //padding: 20,
        backgroundColor: 'gold',
    },
    boxThree: {
        flex: 1,
        //padding: 30,
        backgroundColor: 'coral',
    },
    boxFour: {
        flex: 1,
        //padding: 40,
        backgroundColor: 'blue',
    },
})