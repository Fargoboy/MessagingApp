import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeIndex from './src/home';
import VisitorIndex from './src/visitor';
import { createStore } from 'redux';
import visitorsReducer from './src/reducer/visitor-reducer'
import { Provider } from 'react-redux';




const Stack = createStackNavigator();
const store = createStore(visitorsReducer);

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeIndex}
            />
          <Stack.Screen
            name="Visitors"
            component={VisitorIndex}
            />
       
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


