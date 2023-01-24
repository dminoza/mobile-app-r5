import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { mutateMyDevice } from "./deviceSlice";

export default function LainNgaScreen() {
    // const token = useSelector((state) => state.auth.token)
    const user = useSelector((state) => state.auth.user)
    const devices = useSelector((state) => state.devices.myDevice)
    const dispatch = useDispatch()


    return (
        <View>
            <Button onPress={()=> {
                
                dispatch(mutateMyDevice({
                    noOfDevices: Math.floor(Math.random() * 10),
                    noOfHours: Math.floor(Math.random() * 24)
                }))  
            }} title="samok"></Button>
        </View>
    )
}