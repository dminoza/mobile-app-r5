import { View, TextInput, Text } from 'react-native';
import { styles } from './styles';

export default function InputField(props) {

  return (
    <View>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput 
        secureTextEntry={props.secureTextEntry}
        style={styles.inputField}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText} />
    </View>
  );
}

