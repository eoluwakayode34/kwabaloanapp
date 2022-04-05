
import {useState, useEffect} from 'react'
import Screen from "../component/layouts/screen";
import InputText from "../component/Text/InputText";
import Heading from "../component/Text/Heading";
import {Text, View, StyleSheet} from 'react-native'
import ButtonMain from "../component/Buttons/Main";
import TextInput from '../component/Text/TextInput'
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';
import OutlineButton from '../component/Buttons/OutlineButton';
import { useNavigation } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

import { Formik } from 'formik';
import * as yup from 'yup';


let ValidationSchema = yup.object().shape({
  // @ts-ignore
requestAmount: yup.number().required().min(0).label('Request Amount'),
earnMonthly: yup.number().required().min(0).label('Earn Monthly')
});
export default LoanScreen = () => {
const {navigate} = useNavigation()
    const [paymentPlan, setPaymentPlan] = useState(1)
 
    const [statusColor, setStatusColor] =useState('renew')

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




    const handleSubmit = (values) => {
  
      if (values) {
  
        // mutate({phone_number: values.phoneNumber})
        // @ts-ignore
const form = {
    requestAmount: values.requestAmount,
    earnMonthly: values.earnMonthly,
    paymentPlan,
    accomodationStatus: statusColor

}

        // if(isSuccess){
        navigate('submit-profile', form)
        // }
      }
  
  
    }
    return (

        <Screen back={false} >
            <Formik
        validationSchema={ValidationSchema}
        initialValues={{requestAmount: null,
        earnMonthly: null }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
<ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>

<View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%"}}>
<Heading label={"My Rent"}/>

</View >

<View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%", marginTop: "12%"}}>
  <Heading label={"Payment Option"}/>
  


      <View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%", marginTop: "5%"}}>

      <InputText label={"What is your accomodation status?"}/>
      
      <OutlineButton onPress={() => setStatusColor('renew')} textColor={statusColor === 'renew' ? "blue" : '#6A788E'} label={"Looking to renew my rent"}/>
      <OutlineButton  onPress={() => setStatusColor('new')} textColor={statusColor === 'new' ? "blue" : '#6A788E'} label={"Want to pay for a new place"}/>
      <OutlineButton  onPress={() => setStatusColor('searching')} textColor={statusColor === 'searching' ? "blue" : '#6A788E'} label={"I'm still searching"}/>


      </View>

      <View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%", marginTop: "5%"}}>

      <InputText label={"How much is your rent request amount?"}/>
      <TextInput 
      onChangeText={handleChange('requestAmount')}
      onBlur={handleBlur('requestAmount')}
      value={values.requestAmount}
      label={"Amount"}/>
      {(touched.requestAmount && errors.requestAmount) && <Text style={{ color: 'red', fontSize: 10 }}>{errors.requestAmount}</Text>}

      </View>

      <View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%", marginTop: "5%"}}>

      <InputText label={"How much do you earn monthly?"}/>
      <TextInput 
       onChangeText={handleChange('earnMonthly')}
       onBlur={handleBlur('earnMonthly')}
       value={values.earnMonthly}
       label={"Amount"}/>
      {(touched.earnMonthly && errors.earnMonthly) && <Text style={{ color: 'red', fontSize: 10 }}>{errors.earnMonthly}</Text>}

      </View>
     
        


      <View style={{ alignItems: "flex-start", flexDirection: "column", 
 width: "100%", marginTop: "5%"}}>
      <InputText label={"Choose a monthly payment plan"}/>
    


        <View style={{borderWidth: 1, width: '100%', borderColor: '#E8E8E8', borderRadius: 8, paddingLeft: 10}}>

          <RNPickerSelect
            placeholder={{}}
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
    
  
      
        
      <ButtonMain                 onPress={handleSubmit}
 label="NEXT"/>
</View>
</ScrollView>
  )}

  </Formik>

      </Screen>
    
    
      );
  }



  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 12,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      fontFamily: 'Text',
      color: '#6A788E',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 12,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      fontFamily: 'Text',

      borderColor: 'purple',
      borderRadius: 8,
      color: '#6A788E',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });