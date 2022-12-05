import axios from '../../../plugins/axios';
import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { mutateUser } from '../authSlice';


export default function Registration() {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password1: '',
        password2: ''
    })
    return (
        <View>
            <TextInput placeholder="First Name" value={data.first_name} onChangeText={(text) => {
                setData({
                    ...data,
                    first_name: text
                });
            }} />
            <TextInput placeholder="Last Name" value={data.last_name} onChangeText={(text) => {
                setData({
                    ...data,
                    last_name: text
                })
            }} />
            <TextInput placeholder="Username" value={data.username} onChangeText={(text) => {
                setData({
                    ...data,
                    username: text
                });
            }} />
            <TextInput placeholder="Email Address" value={data.email} onChangeText={(text) => {
                setData({
                    ...data,
                    email: text
                })
            }} />
            <TextInput placeholder="Passowrd" value={data.password1} onChangeText={(text) => {
                setData({
                    ...data,
                    password1: text
                })
            }} />
            <TextInput placeholder="Confirm" value={data.password2} onChangeText={(text) => {
                setData({
                    ...data,
                    password2: text
                })
            }} />
            <Button title="Submit" onPress={() => {
                dispatch(mutateUser({
                    firstName: data.first_name,
                    lastName: data.last_name,
                    email: data.email
                }));
                // axios.post('rest_auth/registration', data).then(response => {
                //     navigation.navigate('Dashboard');
                //     setData({
                //         username: '',
                //         first_name: '',
                //         last_name: '',
                //         email: '',
                //         password1: '',
                //         password2: ''
                //     })
                // }).catch(error => {
                //     console.log(error.response.data);
                // })
            }} />
        </View>
    )
}