import { Button, Text, View } from "react-native";
import axios from "../../plugins/axios";
import { useDispatch, useSelector } from "react-redux";
import Registration from "../Authentication/Registration";
import { useNavigation } from "@react-navigation/native";
import { mutateUser } from "../Authentication/authSlice";

export default function Dashboard() {
    const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <View>
            <Text>Dashboard token is {token}</Text>
            <Text>{ user.firstName } {user.lastName}</Text>
            <Registration />
            <Button onPress={() => {
                navigation.navigate('LainNgaScreen');
            }} title="LainNgAScreen"></Button>
            <Button onPress={() => {
                axios.get('rest_auth/user/', {
                    headers: {
                    'Authorization' : `Token ${token}`
                    }
                }).then(response => {
                    const data = response.data;
                    dispatch(mutateUser({
                        firstName: data.first_name,
                        lastName: data.last_name,
                        email: data.email
                    }))
                })
            }} title="get Profile"></Button>
        </View>
    )
}