import React from 'react';
import { 
  useFonts,
  Roboto_400Regular, 
  Roboto_500Medium,
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Login } from './src/screens/Login';

export default function App() {

  const [fontsLoadeds] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoadeds)
    return <AppLoading/>

  return (
    <Login/>
  );
}

