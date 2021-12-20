import React, {useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    FlatList 
} from 'react-native';
import { useAuth } from '../../hooks/auth';

import {Card} from '../../components/Card';
import { Header } from '../../components/Header';

import api from '../../services/api';

import styles from './styles';

export function Home(){
    const {logout} = useAuth();
    const [products, setProducts] = useState();

    async function getProducts(){
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getProducts();
    },[])

   return (
      <View style={styles.container}>
          <Header />
          
          <View style={styles.list}> 
            <FlatList
                showsVerticalScrollIndicator={false}
                data={products}        
                renderItem={({item})=>(
                    <Card data={item} />
                )}
            />
          </View>
      </View>
 );
}