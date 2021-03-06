import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes(){

    const {logged} = useAuth();

    return(
        <NavigationContainer>
           { logged ? <AppRoutes/> : <AuthRoutes /> }
        </NavigationContainer>
    )
}