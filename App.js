import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';

const App = () => {

  return (
   
    useEffect(() => {
       SplashScreen.hide();
    }, []),

    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView> 

    );
  };
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#F9FBFC',
    },
  });

export default App;

