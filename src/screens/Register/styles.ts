import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 20,
      position: 'absolute',
      top: 220
    },
    buttonContent:{
      width: '100%',
      paddingVertical: 20,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
    },
    buttonText:{
      color: theme.colors.white,
      fontSize: 22,
      fontFamily: theme.fonts.boldItalic,
    },
    inputText:{
      width: '100%',
      height: 50,
      marginBottom: 20,
      fontFamily: theme.fonts.regular,
      borderBottomWidth: 1,
      color: theme.colors.white, 
      borderBottomColor: theme.colors.white,
    },
    footer:{
      width: '100%',
      justifyContent: 'flex-start',
      alignItems:'flex-start',
      marginTop: 40
    },
    footerText:{
      fontSize: 14,
      color:theme.colors.white,
      fontFamily: theme.fonts.boldItalic,
      textDecorationLine:'underline'
    }
  });
  
  export default styles;