import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import InputField from '../../../components/InputField';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <InputField label="Email Address" value={email} onChangeText={setEmail} placeholder="Your Email" />
      <InputField secureTextEntry={true} label="Password" value={password} onChangeText={setPassword} />
      <Text style={{marginBottom: 20}} onPress={() => {
        navigation.navigate('Registration');
      }}>Signup?</Text>
      <Button title="Login" onPress={() => {
        navigation.navigate('Dashboard');
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputField: {
      borderColor: 'black',
      borderWidth: 1,
      width: 200
    }
  });
