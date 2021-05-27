import React from 'react';
import { StyleSheet, Button, Image, Text, View } from 'react-native';

export function CompleteTaskButton(props) {
    const [isTaskDone, setIsTaskDone] = React.useState(props.completed);

    return (
        <Button
          onPress={() => {
            setIsTaskDone(!isTaskDone);
          }}
          color= {(isTaskDone) ? "#a1d76f" : "#d15555"}
          title= {(isTaskDone) ? "Task Completed" : "Complete Task"}
        />
    );
}