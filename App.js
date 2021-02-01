import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';

import ImageGen from './components/imageGen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Random Cat Pics</Text>
      <ImageGen />

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
