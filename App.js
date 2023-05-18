import {SafeAreaView} from "react-native";
import Screens from './Screens';
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
export default function App() {
  return (
      <SafeAreaView style={{flex:1}}>
          <NavigationContainer>
              <StatusBar style="auto"/>
              <Screens />
          </NavigationContainer>
      </SafeAreaView>

   );
}

