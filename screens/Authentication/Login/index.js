import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import axios from '../../../plugins/axios';

export default function Login () {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    return (
        <View>
            <Text>{ warning }</Text>
            <TextInput placeholder="Email Address" value={email} onChangeText={setEmail} />
            <Text>Must be email</Text>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} />
            <Button title="Login" onPress={() => {
                axios.post('rest_auth/login/', {
                    email : email,
                    password: password
                }).then(response => {
                    navigation.navigate('Dashboard');
                }).catch(error => {
                    setWarning('dili mao imong credentials!');
                })
            }} />
            <Text onPress={() => {
                navigation.navigate('Register');
            }}>
                Create Account?
            </Text>
        </View>
    )
}