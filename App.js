import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainContainer from './components/MainContainer';


import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])



  return (
    <MainContainer/>
  );
}

