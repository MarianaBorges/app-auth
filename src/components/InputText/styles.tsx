import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.greyText,
        fontFamily: theme.fonts.regular
    },
  });
  
export default styles;