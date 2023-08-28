import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button } from 'react-native';

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login")
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </SafeAreaView>
  );
};

export default LogInScreen;