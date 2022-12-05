import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function LainNgaScreen() {
    // const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)
    return (
        <View>
            {/* <Text>Dashboard token is {token}</Text> */}
            <Text>{ user.firstName } {user.lastName}</Text>
            {/* <Registration /> */}
        </View>
    )
}