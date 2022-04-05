import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, View } from 'react-native'
import style from './style'

const { width, height } = Dimensions.get('window')

const width_button = width * 0.33;




interface IProps {
    label?: string
    outFit?: string
    textColor?: string
  }

const GradientButton: React.FC<IProps> = ({ label = 'Continue',  textColor =  '#6250F6' }: IProps) => {
    return (
        <View
                style={[style.gradientButton, {marginTop: 20, backgroundColor: '#F9F8FF'}] }
        >
     <Text style={[{color: textColor, fontWeight: '700'}, style.gradientText]}>{label}</Text>
        </View>
    )
}



export default GradientButton