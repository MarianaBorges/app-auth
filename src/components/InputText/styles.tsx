import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.greyText,
        fontFamily: theme.fonts.regular
    },
  });
  
export default styles;