import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg,{ Path, Text, TSpan } from 'react-native-svg';
import { theme } from '../../styles/theme';
import styles from './styles';

function Background(){

    const width = Dimensions.get('screen').width;
    const height = Dimensions.get('screen').height

    return (
        <Svg width={width} height={height}>

            <Path 
                d='M 0 0
                    L 425 0
                    L 425 362
                    C 437 588 208 467 152 677
                    Q 120 784 0 808
                    L 0 0
                    Z'
                fill={theme.colors.blue}
                transform="translate(0, 0)"
            />
            <Path 
                d='M 0 0
                    L 420 0
                    Q 449 27 427 64
                    C 313 325 90 146 0 350 
                    L 0 0
                    Z'
                fill={theme.colors.greyOne}
                transform="translate(0, 0)"
            />

            <Text
                fill="white"
                fontSize="30"
                fontFamily='Verdana'
                x="100"
                y="140"
            >
                <TSpan x="25" >
                    Create 
                </TSpan>
                <TSpan x="25" dy="35">
                    Account
                </TSpan>
            </Text>
        </Svg>
    )
}

export {Background}