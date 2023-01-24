import { Image, Text, View } from "react-native";

function DeviceCard(props) {

    return (
        <View>
            
            <Text>No of Devices: {props.noOfDevices}</Text>
            <Text>No. of Hours: { props.noOfHours }</Text>
        </View>
    )
}

export default DeviceCard