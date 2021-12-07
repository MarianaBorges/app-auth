import React from 'react';
import { 
    View, 
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Platform
 } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Header } from '../../components/Header';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';

import styles from './styles';

type RootStackNavigationList = {
    Register: undefined;
}

type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackNavigationList,
    'Register'
>;

export function Login(){

    const { navigate } = useNavigation<LoginScreenNavigationProp>();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.content}
        > 
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header/>
            <View style={styles.container}>
                <InputText placeholder='Email'/>
                <InputText placeholder='Password'/>
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Sign in</Text>
                    <Button />
                </View>
            </View>
                    
            <View style={styles.footer}>
                <TouchableOpacity onPress={()=>{
                    navigate('Register');
                }}>
                    <Text style={styles.footerText}>
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.footerText}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}