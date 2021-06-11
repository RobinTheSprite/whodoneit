import React, { useState, useEffect } from 'react';
import CompleteTaskButton from './CompleteTaskButton';
import { StyleSheet, Image, Text, View } from 'react-native';

function WhoCompleted(props) {
    if (props.taskState.completed) {
        return (
            <Text style={{ fontSize: 18 }}>
                {props.taskState.whoCompleted} walked the dog
            </Text>
        )
    } else {
        return (
            <Text style={{ fontSize: 18 }} />
        )
    }
}

export default class HomeScreen extends React.Component {

    constructor() {
        super();

        this.socket = new WebSocket();

        this.state = {completed: false, whoCompleted: '', socket: this.socket};
    }

    componentDidMount() {
        this.socket.onopen = () => {
            this.socket.send(JSON.stringify({
                action: 'getTask'
            }));
        };

        this.socket.onmessage = event => {
            const data = JSON.parse(event.data);
            console.log("Response received: ", data);
            this.setState(data);
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.container, { flex: 3 }]}>
                    <Text style={{ fontSize: 20 }}>
                        Has someone walked the dog?
                    </Text>
                    <Image source={require('./assets/dog.png')} />
                </View>
                <View style={styles.container}>
                    <CompleteTaskButton taskState={this.state} socket={this.socket}/>
                </View>
                <View style={{ flex: 2 }}>
                    <WhoCompleted taskState={this.state} />
                </View>
            </View>
        );
    }

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