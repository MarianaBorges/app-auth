import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
       width: 60,
       height: 60,
       borderRadius: 30,
       backgroundColor: theme.colors.greyOne,
       justifyContent: 'center',
       alignItems:'center',
    },
  });
  
export default styles;