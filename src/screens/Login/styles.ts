import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 35
    },
    content:{
      flex: 1,
    },
    buttonContent:{
      width: '100%',
      paddingVertical: 20,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
    },
    buttonText:{
      fontSize: 20,
      fontFamily: theme.fonts.boldItalic,
    },
    footer:{
      width: '100%',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
      padding: 20,
    },
    footerText:{
      fontSize: 14,
      fontFamily: theme.fonts.boldItalic,
      textDecorationLine:'underline'
    }

  });
  
  export default styles;