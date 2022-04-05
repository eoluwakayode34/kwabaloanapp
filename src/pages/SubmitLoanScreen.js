
import {useState, useEffect} from 'react'
import Screen from "../component/layouts/screen";
import BaseText from "../component/Text/BaseText";
import Heading from "../component/Text/Heading";
import {Text, View, StyleSheet} from 'react-native'
import ButtonMain from "../component/Buttons/Main";
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';
import InputText from '../component/Text/InputText';
import NumberFormat from 'react-number-format';
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import NetworkScreen from './NetworkScreen';
import NetInfo from '@react-native-community/netinfo';

import axios from 'axios';

export default SubmitLoanScreen = () => {
  const {navigate} = useNavigation()
  const [netConnect, setNetConnect] = useState(false)

    const form = useRoute().params;

    const requestAmount = Number(form.requestAmount)
    const numberofmonth = Number(form.paymentPlan)

    const [paymentPlan, setPaymentPlan] = useState(numberofmonth)

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setNetConnect( state.isConnected && state.isInternetReachable
        );

      });

      unsubscribe()

    
    
    },[])
   

    const interestPaid = (((2 / 100) * requestAmount) * paymentPlan) +requestAmount

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [value, setValue] = useState(1)
    const [items, setItems] = useState([
        {label: '1 month', value: 1},
        {label: '2 month', value: 2},
        {label: '3 month', value: 3},
        {label: '4 month', value: 4},
        {label: '5 month', value: 5},
        {label: '6 month', value: 6},
        {label: '7 month', value: 7},
        {label: '8 month', value: 8},
        {label: '9 month', value: 9},
        {label: '10 month', value: 10},
        {label: '11 month', value: 11},
        {label: '12 month', value: 12},
    ])

    const handleSubmit = () => {
      setLoading(true)

        axios.post('https://kwaba-loan-api.herokuapp.com/user', 
        {"interestPaid": interestPaid,
        "monthlyEarn": form?.earnMonthly,
        "monthlyInterest": 2,
        "monthlyPlan": form?.paymentPlan,
        "rentAmount": form?.requestAmount,
        "status": form?.accomodationStatus,})
        .then(res => res.data)
        .then(res =>{ 
              setLoading(false)

          navigate("success")})
          .catch(e => {setError(e?.message)
            setLoading(false)
          })


        

    }

    if (netConnect) return (

        <Screen back={false} >
          
<ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>

<View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%"}}>
<Heading label={"My Rent"}/>

</View >

<View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%", marginTop: "18%"}}>
  <Heading label={"Payment Breakdown"}/>
      <InputText label={"Rent request amount"}/>
        

        <View 
        
        style={{padding: 15, 
        
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 20,
                backgroundColor: '#fff',
    shadowColor: '#52006A',

        borderColor: 'gray', borderWidth: 1, width: '100%', borderRadius: 8, shadowColor: 'black', shadowOffset: 5, shadowOpacity: 1, shadowRadius: 10}}>

      <NumberFormat value={requestAmount} displayType={'text'} thousandSeparator={true} prefix={'N'} renderText={value => <Text style={{fontSize: 18}}>{value}</Text>}  />
        </View>

      <View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%", marginTop: "10%"}}>
      <InputText label={"Monthly payment plan"}/>
    


        <View style={{borderWidth: 1, width: '100%', borderColor: '#E8E8E8', borderRadius: 8, paddingLeft: 10}}>

          <RNPickerSelect
            placeholder={{}}
            value={paymentPlan}
            onValueChange={(value) => setPaymentPlan(value)}
            items={items}
            itemKey={items.value}
            style={{
                ...pickerSelectStyles,
                
                iconContainer: {
                  top: 20,
                  right: 10,
                },
                placeholder: {
                    color: '#6A788E',
                    fontSize: 10,
                  fontWeight: 'bold',
                  fontFamily: 'Text'
                },
              }}

           

        />
                </View>


      
        
</View>
      <View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%", marginTop: "10%"}}>
      <InputText label={"Payment  option"}/>
        <View style={{
            backgroundColor: '#EDECFC',
            borderRadius: 16,
            width: '100%',
            padding: '10%',
           
        }}>
            <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#fff',
            borderBottomWidth: 1.3,
        }}>
              <Text style={{  fontFamily: 'MediumText',
    fontSize: 12,
color: '#465969',
    
    paddingVertical: 5,
    letterSpacing: 0.5,
    lineHeight: 24,}} >
              Pre-approved amount
              </Text>

              <NumberFormat value={requestAmount} displayType={'text'} thousandSeparator={true} prefix={'N'} renderText={value =>         <BaseText label={value}/>
              
}  />


            </View>
            <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#fff',
            borderBottomWidth: 1.3,
            marginTop: '8%'
        }}>
              <Text style={{  fontFamily: 'MediumText',
    fontSize: 12,
color: '#465969',
    
    paddingVertical: 5,
    letterSpacing: 0.5,
    lineHeight: 24,}} >
Monthly payment              
</Text>

<NumberFormat value={interestPaid} displayType={'text'} thousandSeparator={true} prefix={'N'} renderText={value =>         <BaseText label={value}/> } />

            </View>
            <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#fff',
            borderBottomWidth: 1.3,
            marginTop: '8%'
        }}>
              <Text style={{
                 fontFamily: 'MediumText',
                 fontSize: 12,
color: '#465969',
    
    paddingVertical: 5,
    letterSpacing: 0.5,
    lineHeight: 24,}} >
              Tenor
              </Text>
        <BaseText label={`${paymentPlan} Month`}/>

            </View>


    </View>        



      
        
</View>
  
      
        
      <ButtonMain loading={loading} onPress={() => handleSubmit()} label="ACCEPT"/>
      {error && <Text style={{ color: 'red', fontSize: 10, textAlign: "center" , width: "100%"}}>{error}</Text>}

</View>
</ScrollView>

      </Screen>
    
    
      ); else return <NetworkScreen/>
  }



  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 12,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      fontFamily: 'Heading',
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 12,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });