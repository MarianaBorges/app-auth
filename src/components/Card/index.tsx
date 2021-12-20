import React from "react";
import {View, Text, Image} from 'react-native';
import {styles} from "./styles";

interface Props{
    data:{
        id: string;
        desc: string;
        image: string;
        name: string;
        price: number;
    }
}

function Card ({data}:Props){
    return (
        <View style={[styles.container, styles.elevation]}>
            <Image 
                style={styles.image}
                source={{uri: data.image}}
            />
            <View style={styles.desc}>
                <View style={styles.priceContainer}>
                    <Text style={styles.text}>{data.name}</Text>
                    <Text style={styles.text} >R$ {data.price.toFixed(2)}</Text>
                </View>
                <Text style={styles.textDesc}>{data.desc}</Text>
            </View>
        </View>
    )
}
export {Card}