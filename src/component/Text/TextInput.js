import React from 'react'
import {  Text,View, TextInput} from 'react-native'
import styles from './style'


const InputText = ({onChangeText, onBlur, value,  label, alignText = 'center', maxLength, placeholder, inputType="number-pad" }) => {


  
    
  return(
<View style={[styles.input]}>
        <TextInput placeholder={label} maxLength={maxLength} keyboardType={inputType}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        style={[styles.inputText]} />
      </View>  
  )
}

export default InputText
