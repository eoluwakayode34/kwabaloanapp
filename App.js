import {useState, useEffect} from 'react'
import { setCustomText, setCustomTextInput } from 'react-native-global-props'

import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NetworkScreen from './src/pages/NetworkScreen';
import LoanScreen from './src/pages/LoanScreen';
import SubmitLoanScreen from './src/pages/SubmitLoanScreen';
import SuccessScreen from './src/pages/SuccessScreen'



const Loan = createStackNavigator()


export default function App() {

  const [netConnect, setNetConnect] = useState(false)
 
  let [fontsLoaded] = useFonts({
    'Text': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'RegularText': require('./assets/fonts/Poppins-Regular.ttf'),
    'MediumText': require('./assets/fonts/Poppins-Medium.ttf'),
    'Heading': require('./assets/fonts/Poppins-Bold.ttf'),
  })

 
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetConnect( state.isConnected && state.isInternetReachable
      );
    });

      // Unsubscribe to network state updates

    if(!fontsLoaded){
      return
    }


    const customTextProps = {
      style: {
        fontFamily: 'Text', 
        
      }
    }

    setCustomText(customTextProps)
    setCustomTextInput(customTextProps)
    unsubscribe();

  })

  return((!fontsLoaded) ?
  (<AppLoading/>) :  (
  
    <NavigationContainer>
  <Loan.Navigator initialRouteName={netConnect ? 'loan-profile' : "network"} screenOptions={{
      headerShown: false

    }} >
        <Loan.Screen name="loan-profile" component={LoanScreen}/>
        <Loan.Screen name="submit-profile" component={SubmitLoanScreen}/>
        <Loan.Screen name="success" component={SuccessScreen}/>
        <Loan.Screen name="network" component={NetworkScreen}/>
    </Loan.Navigator>
        </NavigationContainer>
  ))

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
