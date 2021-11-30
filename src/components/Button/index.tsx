import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import styles from './styles';
import { theme } from '../../styles/theme';

type Props = TouchableOpacityProps;

export function Button({...rest}:Props){
   return (
      <TouchableOpacity 
        style={styles.container}
        {...rest}
        >
          <AntDesign 
            name="arrowright" 
            size={24} 
            color={theme.colors.white}  
          />
      </TouchableOpacity>
 );
}