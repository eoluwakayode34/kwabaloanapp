import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, Image, Dimensions, TouchableOpacity, View } from 'react-native'
import style from './style'
const { width, height } = Dimensions.get('window')

const width_button = width * 0.33;






const Icon = ({ label = 'Continue', borderColor, bgColor = 'black',children, borderWidth, textColor =  'white', onPress }) => {
    return (
        <TouchableOpacity
                onPress={() => onPress()}
                style={[style.iconButton, {marginTop: 20, 
                    backgroundColor: bgColor,
                    borderColor,
                    borderWidth,
                     flexDirection: 'row'}] }
        >
            {children}
        {/* <Image source={require(icon)} style={{width: 24, height: 29.48, marginRight: 10}} /> */}
     <Text style={[{color: textColor}, style.buttonText]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Icon