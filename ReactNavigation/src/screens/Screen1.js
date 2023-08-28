import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 1</Text>
      <Button title="Ir a Pantalla 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

export default Screen1;