import React from 'react';
import { StyleSheet, Button, Image, Text, View } from 'react-native';
import CompleteTaskButton from './CompleteTaskButton'

function getTaskState() {
  return {completed: true, whoCompleted: "Luke"};
}

export default function App() {
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
        <CompleteTaskButton completed={taskState.completed} />
      </View>
      <View style={{flex: 2}}>
        <Text style={{fontSize: 18}}>
          {taskState.whoCompleted} walked the dog
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
});
