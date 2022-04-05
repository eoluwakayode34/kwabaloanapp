import React from 'react'
import {  Text } from 'react-native'
import styles from './style'



const Heading1 = ({ label,  color='#6A788E',  alignText = 'center' }) => {


  
    
  return(
      <Text style={[{ textAlign: alignText, paddingHorizontal:10, color},styles.heading1]} >{label}</Text>
  
  )
}

export default Heading1
