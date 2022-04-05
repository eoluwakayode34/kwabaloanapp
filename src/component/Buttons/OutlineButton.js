import React from 'react'
import {  Text,View, TextInput} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import styles from './style'


const OutlineButton = ({onChangeText, onPress, textColor = '#6A788E',  label, alignText = 'center', maxLength, placeholder, inputType="number-pad" }) => {


  
    
  return(
      <View style={{width: '100%'}}>

<TouchableWithoutFeedback onPress={() => onPress()}  style={[styles.input, {justifyContent: 'center', alignItems: 'center', borderColor: textColor, width: '100%', marginVertical: 2}]}>
        {/* <TextInput placeholder={label} maxLength={maxLength} keyboardType={inputType}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        style={[styles.inputText]} /> */}
        <Text  style={[styles.inputText, {color: textColor}]}>{label}</Text>
      </TouchableWithoutFeedback>  
      </View>

  )
}

export default OutlineButton
