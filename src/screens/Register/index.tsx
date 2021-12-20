import React, {useState} from 'react';
import { 
    ScrollView, 
    View, 
    Text, 
    TouchableOpacity,
    Alert 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Background } from '../../components/Background';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';

import styles from './styles';
import { theme } from '../../styles/theme';
import { useAuth } from '../../hooks/auth';

type RootStackNavigationList = {
    Login: undefined;
}

type RegisterScreenNavigationList = NativeStackNavigationProp<
    RootStackNavigationList,
    'Login'
>;

export function Register(){

    const { navigate } = useNavigation<RegisterScreenNavigationList>();
    const {signUp} = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister() {
        try {
            await signUp( email, password, name, phone);
        } catch (error) {
            Alert.alert('Opps', `Something wrong! ${error}`);
        }
    }

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
                    <Button onPress={handleRegister}/>
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