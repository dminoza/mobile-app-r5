import { useState } from 'react';
import { View } from 'react-native';
import InputField from '../../../components/InputField';
import { UniversalStyle } from '../../../styles';

export default function Registration({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    return (
        <View style={UniversalStyle.container}>
            <InputField label="First Name" value={firstName} onChangeText={setFirstName} />
            <InputField label="Last Name" value={lastName} onChangeText={setLastName} />
            <InputField label="Email" value={email} onChangeText={setEmail} />
        </View>
    )
}