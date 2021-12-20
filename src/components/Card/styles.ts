import { StyleSheet } from "react-native";
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container:{
        borderRadius:  10,
        backgroundColor: theme.colors.blue,
        margin: 20,
        alignItems: 'center'
    },

    image:{
        width: 210,
        height: 100,
        marginBottom: 20,
        margin: 30
    },
    desc:{
        width: '100%',
        padding: 10,
        backgroundColor: '#DAF1FB',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopWidth: 1,
        borderTopColor: theme.colors.yellow

    },
    priceContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    text:{
        fontFamily: theme.fonts.medium,
        fontSize: 14,
        color: theme.colors.greyOne
    }, 
    textDesc:{
        fontFamily: theme.fonts.medium,
        fontSize: 12,
        color: theme.colors.greyOne
    },
    shadowProp:{
        shadowColor:'#171717',
        shadowOffset:{
            width: -2,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    elevation:{
        elevation: 10,
        shadowColor: '#52006A'
    }
})