import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, Image, Dimensions, TouchableOpacity, View } from 'react-native'
import style from './style'
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window')

const width_button = width * 0.33;





const Back = ({ label = 'Continue', borderColor, borderWidth,  onPress }) => {
    return (
        <TouchableOpacity
                onPress={() => onPress()}
                style={[ {marginTop: 20, 
                    width: '100%',
                    backgroundColor: 'white',
                    alignItems:'flex-start',
                     flexDirection: 'row'}] }
        >
<AntDesign name="arrowleft" size={23} color="black" />      
  {/* <Image source={require(icon)} style={{width: 24, height: 29.48, marginRight: 10}} /> */}
        </TouchableOpacity>
    )
}

export default Back