import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import UserContext from './UserContext';

export default function SettingsScreen() {
    return (
        <UserContext.Consumer>
        {({username, setUsername}) => {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Your Name: </Text>
                    <TextInput
                        style={styles.textField}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
            )
        }}
        </UserContext.Consumer>
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