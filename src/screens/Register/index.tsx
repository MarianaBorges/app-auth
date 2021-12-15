import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Background } from '../../components/Background';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';

import styles from './styles';
import { theme } from '../../styles/theme';

type RootStackNavigationList = {
    Login: undefined;
}

type RegisterScreenNavigationList = NativeStackNavigationProp<
    RootStackNavigationList,
    'Login'
>;

export function Register(){

    const { navigate } = useNavigation<RegisterScreenNavigationList>();

   return (
      <ScrollView 
        showsVerticalScrollIndicator={false}
        >
          <Background/>
          <View style={styles.container}>
                <InputText 
                    placeholder='Name' 
                    style={styles.inputText}
                    placeholderTextColor={theme.colors.white}
                    />
                <InputText 
                    placeholder='Email' 
                    style={styles.inputText}
                    placeholderTextColor={theme.colors.white}
                    />
                <InputText 
                    placeholder='Phone' 
                    style={styles.inputText}
                    placeholderTextColor={theme.colors.white}
                    keyboardType='number-pad'
                    />
                <InputText 
                    placeholder='Password'
                    style={styles.inputText}
                    placeholderTextColor={theme.colors.white}
                    secureTextEntry={true}
                    />
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Sign up</Text>
                    <Button />
                </View>
                <View style={styles.footer}>
                <TouchableOpacity onPress={()=>{
                    navigate('Login');
                }}>
                    <Text style={styles.footerText}>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
 );
}