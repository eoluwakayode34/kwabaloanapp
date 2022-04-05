import React from 'react'
import {  Text } from 'react-native'
import styles from './style'



const SmallText = ({ label, color, alignText = 'center' }) => {


  
    
  return(
      <Text style={[{ textAlign: alignText, color},styles.text]} >{label}</Text>
  
  )
}

export default SmallText
