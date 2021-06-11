import React from 'react';
import { Button } from 'react-native';
import UserContext from './UserContext';

export default function CompleteTaskButton(props) {
    return (
        <UserContext.Consumer>
          {({username, setUsername}) => (
            <Button
              onPress={() => {

                if (props.taskState.completed && props.taskState.whoCompleted === username) {
                  props.socket.send(JSON.stringify({
                    action: 'setTask',
                    completed: false,
                    whoCompleted: ''
                  }));
                } else if (!props.taskState.completed && props.taskState.whoCompleted === '' && username !== '') {
                  props.socket.send(JSON.stringify({
                    action: 'setTask',
                    completed: true,
                    whoCompleted: username
                  }));
                }
              }}
              color= {(props.taskState.completed) ? "#a1d76f" : "#d15555"}
              title= {(props.taskState.completed) ? "Task Completed" : "Complete Task"}
            />
          )}
        </UserContext.Consumer>
    );
}