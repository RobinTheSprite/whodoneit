import React from 'react';
import { Button } from 'react-native';
import UserContext from './UserContext';

export default function CompleteTaskButton(props) {
    const [isTaskDone, setIsTaskDone] = React.useState(props.completed);

    return (
        <UserContext.Consumer>
          {({username, setUsername}) => (
            <Button
              onPress={() => {
                console.log("Button Pressed");
                fetch('https://rvr4du7q0j.execute-api.us-east-2.amazonaws.com/dev/settask', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    completed: true,
                    whoCompleted: username
                  })
                })
                .then(res => res.json())
                .then(json => {
                  setIsTaskDone(json.completed);
                })
                .catch(error => console.log(error));
              }}
              color= {(isTaskDone) ? "#a1d76f" : "#d15555"}
              title= {(isTaskDone) ? "Task Completed" : "Complete Task"}
            />
          )}
        </UserContext.Consumer>
    );
}