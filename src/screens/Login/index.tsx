import React from 'react';
import { 
    View, 
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Text
 } from 'react-native';

import { Header } from '../../components/Header';
import { InputText } from '../../components/InputText';
import { Button } from '../../components/Button';

import styles from './styles';

export function Login(){

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header/>
            <ScrollView style={styles.content}>
               <InputText placeholder='Email'/>
               <InputText placeholder='Password'/>
               <View>
                    <Text>Sign in</Text>
                   <Button />
               </View>
            </ScrollView>
        </View>
    );
}