import React from 'react'
import {  Text } from 'react-native'
import styles from './style'



const Heading= ({ label,  color= '#29276A', alignText = 'center' }) => {


  
    
  return(
      <Text style={[{ textAlign: alignText, color},styles.heading]} >{label}</Text>
  
  )
}

export default Heading
