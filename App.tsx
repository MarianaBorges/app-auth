import React from 'react';
import { 
  useFonts,
  Roboto_400Regular, 
  Roboto_500Medium,
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoadeds] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if(!fontsLoadeds)
    return <AppLoading/>

  return (
    <AuthProvider>
        <Routes/>
    </AuthProvider>

  );
}

