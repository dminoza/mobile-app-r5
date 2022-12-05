import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import axios from '../../../plugins/axios';
import axios from '../../../plugins/axios';
import { mutateToken } from '../authSlice';


export default function Login () {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    return (
        <View>
            <Text>{ warning }</Text>
            <Text>{ token }</Text>
            <TextInput placeholder="Email Address" value={email} onChangeText={setEmail} />
            <Text>Must be email</Text>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} />
            <Button title="Login" onPress={() => {
                console.log({
                    email: email,
                    password: password
                })
                axios.post('rest_auth/login/', {
                    "email" : email,
                    "password": password
                }).then(response => {
                    dispatch(mutateToken('aa36a95068e9b600510ec7fd2afead4ab5c5fcf3'))
                    navigation.navigate('Dashboard')
                }).catch(error => {
                    setWarning('dili mao imong credentials!');
                    dispatch(mutateToken('aa36a95068e9b600510ec7fd2afead4ab5c5fcf3'))
                    navigation.navigate('Dashboard')
                });
            }} />
            <Text onPress={() => {
                navigation.navigate('Register');
            }}>
                Create Account?
            </Text>
        </View>
    )
}