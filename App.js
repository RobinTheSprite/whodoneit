import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompleteTaskButton } from './CompleteTaskButton';

function WhoCompleted(props) {
  if (props.taskState.completed) {
    return (
      <Text style={{fontSize: 18}}>
        {props.taskState.whoCompleted} walked the dog
      </Text>
    )
  } else {
    return (
      <Text style={{fontSize: 18}} />
    )
  }
}

function HomeScreen() {
  const [taskState, setTaskState] = useState({});

  useEffect(() => {
    fetch('https://rvr4du7q0j.execute-api.us-east-2.amazonaws.com/dev/gettask', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    .then(res => res.json())
    .then(data => setTaskState(data.body))
    .catch(error => console.error(error))
  });


  return (
    <View style={styles.container}>
      <View style={[styles.container, {flex: 3}]}>
        <Text style={{fontSize: 20}}>
          Has someone walked the dog?
        </Text>
        <Image source={require('./assets/dog.png')} />
      </View>
      <View style={styles.container}>
        <CompleteTaskButton completed={taskState.completed} />
      </View>
      <View style={{flex: 2}}>
        <WhoCompleted taskState={taskState} />
      </View>
    </View>
  );
}

function SettingsScreen() {
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

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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