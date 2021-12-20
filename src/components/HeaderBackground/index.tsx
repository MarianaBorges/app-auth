import React from 'react';
import Svg,{ Path, Text, TSpan } from 'react-native-svg';
import { theme } from '../../styles/theme';

import styles from './styles';

export function Header(){
    return (
        <Svg width='100%' height={335}>
            <Path 
                d='M 0 0
                    L 450 0
                    L 450 324
                    Q 280 367 171 226
                    L 0 0
                    Z'
                fill={theme.colors.blue}
                transform="translate(0, 0)"
            />

            <Path 
                d='M 0 0
                    L 370 0
                    Q 370 51 306 74 
                    Q 186 138 209 239
                    C 217 337 54 329 0 264
                    L 0 0 
                    Z'
                fill={theme.colors.greyOne}
                transform="translate(0, 0)"
            />
            <Path 
                d='M 0 0
                    L 260 0
                    Q 238 23 169 24 
                    Q 80 22 50 80
                    Q 32 124 0 123
                    L 0 0  
                    Z'
                fill={theme.colors.yellow}
                transform="translate(0, 0)"
            />

            <Text
                fill="white"
                fontSize="30"
                fontFamily='Verdana'
                x="100"
                y="160"
            >
                <TSpan x="25" >
                    Welcome
                </TSpan>
                <TSpan x="25" dy="35">
                    Back
                </TSpan>
            </Text>
          </Svg>
    )
}