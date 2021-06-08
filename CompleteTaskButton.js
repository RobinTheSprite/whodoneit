import React from 'react';
import { Button } from 'react-native';
import UserContext from './UserContext';

function sendTaskState(isTaskDone, username) {
  fetch('https://rvr4du7q0j.execute-api.us-east-2.amazonaws.com/dev/settask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed: isTaskDone,
      whoCompleted: username
    })
  })
  .then(res => res.json())
  .then(json => {
    console.log(json);
    setIsTaskDone(json.completed);
  })
  .catch(error => console.log(error));
}

export default function CompleteTaskButton(props) {
    const [isTaskDone, setIsTaskDone] = React.useState(props.taskState.completed);

    return (
        <UserContext.Consumer>
          {({username, setUsername}) => (
            <Button
              onPress={() => {
                console.log("Button Pressed");
                console.log(props);

                if (isTaskDone && props.taskState.whoCompleted === username) {
                  setIsTaskDone(!isTaskDone);
                  sendTaskState(false, '');
                } else if (!isTaskDone && props.taskState.whoCompleted === '') {
                  sendTaskState(true, username);
                }

              }}
              color= {(isTaskDone) ? "#a1d76f" : "#d15555"}
              title= {(isTaskDone) ? "Task Completed" : "Complete Task"}
            />
          )}
        </UserContext.Consumer>
    );
}