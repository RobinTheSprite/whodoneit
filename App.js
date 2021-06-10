import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import UserContext from './UserContext';
import { render } from 'react-dom';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor() {
    super();

    this.setUsername = (name) => {
      this.setState({
        username: name
      });
    };

    this.state = {
      username: '',
      setUsername: this.setUsername
    };
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    );
  }
}