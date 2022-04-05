import Screen from "../component/layouts/screen";
import BaseText from "../component/Text/BaseText";
import ButtonMain from "../component/Buttons/Main";
import Heading from "../component/Text/Heading";
import {Text, View, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const NetworkScreen = () => {
  const {navigate} = useNavigation()
const successful = () => {
  navigate("loan-profile")
}
    return (
  
      <Screen back={false}>
        <View style={{flex: 1, justifyContent: "center", alignItems:"center", width: "100%"}}>
        <MaterialCommunityIcons name="access-point-network-off" size={100} color="red" /> 
         <Heading label={"Oops"} />
  <BaseText label={"Check your network connection"} />
  
  <ButtonMain     
              onPress={successful}
 label="REFRESH"/>
         </View>

    </Screen>
  
  
    );
  }

  export default NetworkScreen