import React from 'react'
import {  Text } from 'react-native'
import styles from './style'


const InputText= ({ label, color =  '#29276A', alignText = 'center' }) => {


  

  return(
      <Text style={[{ textAlign: alignText, color},styles.text]} >{label}</Text>
  
  )
}

export default InputText
