
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Tabs } from './src/components/Tabs';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#00A884'} barStyle={'light-content'}  />
      <Header />
      <Tabs />
    </SafeAreaView>
  );
}

