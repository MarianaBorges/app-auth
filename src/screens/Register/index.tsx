import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { Background } from '../../components/Background';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';

import styles from './styles';
import { theme } from '../../styles/theme';

export function Register(){
   return (
      <ScrollView>
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
                <TouchableOpacity>
                    <Text style={styles.footerText}>
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
 );
}