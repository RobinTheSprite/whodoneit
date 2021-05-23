import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CompleteTaskButton } from './CompleteTaskButton'

function getTaskState() {
  return {completed: true, whoCompleted: "Luke"};
}

function HomeScreen() {
  const taskState = getTaskState();

  return (
    <View style={styles.container}>
      <View style={[styles.container, {flex: 3}]}>
        <Text style={{fontSize: 20}}>
          Has someone walked the dog?
        </Text>
        <Image source={require('./assets/dog.png')} />
      </View>
      <View style={styles.container}>
        {/* <CompleteTaskButton completed={taskState.completed} /> */}
      </View>
      <View style={{flex: 2}}>
        <Text style={{fontSize: 18}}>
          {taskState.whoCompleted} walked the dog
        </Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />

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
});
