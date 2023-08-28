import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 3</Text>
      <Button title="Ir a Pantalla 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

export default Screen3;