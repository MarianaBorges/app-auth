import React from 'react';
import { 
  useFonts,
  Roboto_400Regular, 
  Roboto_500Medium,
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';

export default function App() {

  const [fontsLoadeds] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoadeds)
    return <AppLoading/>

  return (
    <Register/>
  );
}

