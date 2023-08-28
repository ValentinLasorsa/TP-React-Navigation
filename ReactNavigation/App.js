import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, createNativeStackNavigator } from '@react-navigation/native';
import LogInScreen from "./src/components/LogInScreen";
import Screen1 from "./src/components/Screen1";
import Screen2 from "./src/components/Screen2";
import Screen3 from "./src/components/Screen3";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LogInScreen}
          options={{title: 'Login'}}
        />
    
        <Stack.Screen
          name="Screen01"
          component={Screen1}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen
          name="Screen02"
          component={Screen2}
          options={{title: 'Welcome'}}
        />

        <Stack.Screen
          name="Screen03"
          component={Screen3}
          options={{title: 'Welcome'}}
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
