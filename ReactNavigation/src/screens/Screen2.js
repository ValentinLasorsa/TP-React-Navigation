import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 2</Text>
      <Button title="Ir a Pantalla 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

export default Screen2;