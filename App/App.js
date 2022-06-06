import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ParentScreen from './components/screens/ParentScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import HomeScreen from './components/screens/Home';
import AppointmentScreen from './components/screens/AppointmentScreen';
import TroubleshootScreen from './components/screens/TroubleshootScreen';
import MechanicScreen from './components/screens/MechanicScreen';
import ServiceScreen from './components/screens/ServiceScreen';
import RecordScreen from './components/screens/RecordScreen'; 
import SettingScreen from './components/screens/SettingScreen';
import Smoke from './components/screens/SubScreen/Smoke';
import See from './components/screens/SubScreen/See';
import SeeSmoke from './components/screens/SubScreen/SeeSmoke';
import Exhaust from './components/screens/SubScreen/Exhaust';
import WarningLightOn from './components/screens/SubScreen/WarningLightOn'
import Tyre from './components/screens/SubScreen/Tyre';
import Hear from './components/screens/SubScreen/Hear';
import HearSqueal from './components/screens/SubScreen/HearSqueal';
import HearRattle from './components/screens/SubScreen/HearRattle';
import HearChirp from './components/screens/SubScreen/HearChirp';
import Smell from './components/screens/SubScreen/Smell';
// import AntiFreeze from './components/screens/SubScreen/AntiFreeze'
import VehicleNotStarting from './components/screens/SubScreen/VehicleNotStarting';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Parent" component={HomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Appointment" component={AppointmentScreen}/>
    <Stack.Screen name="Trouble" component={TroubleshootScreen}/>
    <Stack.Screen name="Mechanic" component={MechanicScreen}/>
    <Stack.Screen name="Service" component={ServiceScreen}/>
    <Stack.Screen name="Record" component={RecordScreen}/>
    <Stack.Screen name="Setting" component={SettingScreen}/>
    <Stack.Screen name="Smoke" component={Smoke}/>
    <Stack.Screen name="See" component={See}/>
    <Stack.Screen name="SeeSmoke" component={SeeSmoke}/>
    <Stack.Screen name="Exhaust" component={Exhaust}/>
    <Stack.Screen name="WarningLightOn" component={WarningLightOn}/>
    <Stack.Screen name="Tyre" component={Tyre}/>
    <Stack.Screen name="Hear" component={Hear}/>
    <Stack.Screen name="HearSqueal" component={HearSqueal}/>
    <Stack.Screen name="HearRattle" component={HearRattle}/>
    <Stack.Screen name="HearChirp" component={HearChirp}/>
    <Stack.Screen name="Smell" component={Smell}/>
    {/* <Stack.Screen name="AntiFreeze" component={AntiFreeze}/> */}
    <Stack.Screen name="VehicleNotStarting" component={VehicleNotStarting}/>

  </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
