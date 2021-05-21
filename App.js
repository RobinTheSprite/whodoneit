import React from 'react';
import { StyleSheet, Button, Image, Text, View } from 'react-native';

export default function App() {
  const [isTaskDone, setIsTaskDone] = React.useState(false)

  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Text style={{fontSize: 20}}>
          Has someone walked the dog?
        </Text>
        <Image source={require('./assets/dog.png')} />
      </View>
      <View style={{flex: 1}}>
        <Button
          onPress={() => {
            setIsTaskDone(!isTaskDone);
          }}
          color= {(isTaskDone) ? "#a1d76f" : "#d15555"}
          title= {(isTaskDone) ? "Task Completed" : "Complete Task"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
