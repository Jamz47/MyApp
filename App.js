import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Create from './Component/Create'
import ListScreen from './Component/ListScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Create} />
        <Stack.Screen name='List' component={ListScreen} />

      </Stack.Navigator>
    </NavigationContainer>

    // <View style={{flex:1}}>
    //   <Create />
    // </View>
  )
}

const styles = StyleSheet.create({})