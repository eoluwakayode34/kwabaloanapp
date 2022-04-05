import React from 'react'
import {  Text } from 'react-native'
import styles from './style'


const BaseText= ({ label, color =  '#29276A', alignText = 'center' }) => {


  

  return(
      <Text style={[{ textAlign: alignText, color},styles.baseText]} >{label}</Text>
  
  )
}

export default BaseText
