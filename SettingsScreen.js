import React from 'react';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textField: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '50%',
        height: 40,
        textAlign: 'center'
    }
});