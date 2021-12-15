import React,{useState} from 'react';
import { 
    View, 
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    Platform,
    Alert
 } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Header } from '../../components/Header';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';

import styles from './styles';
import { useAuth } from '../../hooks/auth';

type RootStackNavigationList = {
    Register: undefined;
}

type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackNavigationList,
    'Register'
>;

export function Login(){

    const { navigate } = useNavigation<LoginScreenNavigationProp>();
    const { signIn } = useAuth();    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignin(){
        try {
            await signIn(email, password);
        } catch (error) {
            Alert.alert('Opss!', 'Algo deu errado!');
        }
    }

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
                <InputText 
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    />
                <InputText 
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    />

                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Sign in</Text>
                    <Button onPress={handleSignin}/>
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