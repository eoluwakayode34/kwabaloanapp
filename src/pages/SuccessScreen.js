import Screen from "../component/layouts/screen";
import BaseText from "../component/Text/BaseText";
import ButtonMain from "../component/Buttons/Main";
import Heading from "../component/Text/Heading";
import {Text, View, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const SuccessScreen = () => {
  const {navigate} = useNavigation()
const successful = () => {
  navigate("loan-profile")
}
    return (
  
      <Screen back={false}>
        <View style={{flex: 1, justifyContent: "center", alignItems:"center", width: "100%"}}>
        <MaterialCommunityIcons name="piggy-bank" size={100} color="green" />
  <Heading label={"Success"} />
  <BaseText label={"We would update you about the status of your loan"} />
  
  <ButtonMain     
              onPress={successful}
 label="DONE"/>
         </View>

    </Screen>
  
  
    );
  }

  export default SuccessScreen