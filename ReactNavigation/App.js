import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, createNativeStackNavigator } from '@react-navigation/native';
import LogInScreen from "./src/screens/LogInScreen";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Menu from "./src/components/Menu";

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LogInScreen}
          options={{title: 'Login'}}
        />
        
    
        <Stack.Screen
          name="Screen01"
          component={Screen1}
          options={{title: 'Screen1'}}
        />

        <Stack.Screen
          name="Screen02"
          component={Screen2}
          options={{title: 'Screen2'}}
        />

        <Stack.Screen
          name="Screen03"
          component={Screen3}
          options={{title: 'Screen3'}}
        />
 
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
