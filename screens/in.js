import React from 'react';
import {Text, View} from 'react-native';

export default class inScreen extends React.Component{
       render(){
           return(
               <View style={{flex:1, justifyContent: "center", alignItems: "center", backgroundColor: 'red'}}>
                   <Text>Instagram</Text>
               </View>
           );
       }
} 