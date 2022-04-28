import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import SignInScreen from './src/screens/SignInScreen';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const App = () => {

  return (
   
    useEffect(() => {
       SplashScreen.hide();
    }, []),

    <SafeAreaView style={styles.root}>
      <SignInScreen />
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

