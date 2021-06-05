import { Text, View, TextInput } from 'react-native';

export default function SettingsScreen() {
    const [name, setName] = React.useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Your Name: </Text>
            <TextInput
                style={styles.textField}
                onChangeText={text => setName(text)}
            />
        </View>
    );
}