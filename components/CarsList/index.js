import React from 'react';
import {View, Text,  FlatList, Dimensions} from 'react-native';
import Caritem from '../Caritem';

import styles from './styles';
import cars from './Cars';

const CarsList = (props) => {

    return (

        <View style={styles.container}>

         <FlatList

         data={cars}
         renderItem= {({item}) => <Caritem car={item}/> }
         showsVerticalScrollIndicator={false}
         snapToAlignment={'start'}
         decelerationRate={'fast'}
         snapToInterval={Dimensions.get('window').height = 965}
         showsHorizontalScrollIndicator= {false}
         
         
         
         
         />




        </View>


    );
};

export default CarsList;