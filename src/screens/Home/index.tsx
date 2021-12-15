import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks/auth';

import styles from './styles';

export function Home(){
    const {logout} = useAuth();
   return (
      <View style={styles.container}>
          <Text>
              Tela Home
          </Text>
          <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
      </View>
 );
}