import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView,Text, TextInput, TouchableOpacity, View } from 'react-native'
import Back from '../Buttons/Back'
import { useNavigation } from '@react-navigation/core' 

export default function Screen({ children, back = true} ) {
const {goBack} = useNavigation()

  
    
  return(
    <SafeAreaView style={styles.container}>
{     back && <Back         onPress={() =>{ goBack()}} />
}   
    {children}


      
     
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 


// container
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    // justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: 40
  },
});
