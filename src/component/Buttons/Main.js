import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, ActivityIndicator, View } from 'react-native'
import style from './style'
const { width, height } = Dimensions.get('window')

const width_button = width * 0.33;






const Main = ({ label = 'Continue', loading, textColor =  'white', onPress }) => {
    return (
        <TouchableOpacity
                onPress={() => onPress()}
                style={[style.mainButton, {marginTop: 20}] }
                disabled={loading}
        >
     <Text style={[{color: textColor}, style.buttonText]}>{label}</Text>


{loading ?     <ActivityIndicator color={'white'} size='small' style={{ display: 'flex',  alignSelf: 'flex-start'}} /> : null
}       
 </TouchableOpacity>
    )
}

Main.displayName = "MainBtn"
export default Main