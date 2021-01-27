import React, { Component } from 'react';
import { 
  NavigationContainer, 
} from '@react-navigation/native';
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
console.disableYellowBox = true;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (   
          <NavigationContainer>
            <RootStackScreen />
          </NavigationContainer>
    );
  }
}

export default App;
