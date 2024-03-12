import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Homepage from './screens/Homepage';
import Signin from './screens/Signin';
import Login from './screens/Login';


export default function App() {
  return (
      // <AddTransaction/>
      // <Homepage/>
      <Signin/>
      // <Login/>
      
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