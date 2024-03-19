import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import BearEverywhere from './screens/BearEverywhere';
import Signin from './screens/Signin';
import Login from './screens/Login';
import Goods from './screens/Goods';
import Homepage from './screens/Homepage';



export default function App() {
  return (
      // <AddTransaction/>
      <BearEverywhere/>
      // <Homepage/>
      // <Signin/>
      // <Login/>
      // <Goods/>


      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});