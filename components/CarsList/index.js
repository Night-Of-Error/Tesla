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
         /*methana height eke 965 ain karanna ethakota thamange device ekata adjust wenawa. mage pixel 4 simulator dimensions awulk nisai wenama damme*/
         showsHorizontalScrollIndicator= {false}
         
         
         
         
         />




        </View>


    );
};

export default CarsList;
