import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {styles} from "./styles";
import {theme} from "../../styles/theme"
import { useAuth } from "../../hooks/auth";

function Header (){

    const {user, logout} = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome name="user-circle" size={24} color={theme.colors.greyText} />
                <Text> {user?.name}</Text>
            </View>
            <TouchableOpacity onPress={logout}>
                <FontAwesome name="power-off" size={24} color={theme.colors.greyOne} />
            </TouchableOpacity>
           
        </View>
    )
}
export {Header}