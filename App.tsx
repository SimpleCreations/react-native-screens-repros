// @ts-nocheck
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';
import React from 'react';

const Stack = createNativeStackNavigator();

const Screen1 = ({navigation}) => (
  <Button title="Go to screen 2" onPress={() => navigation.navigate('Screen2')} />
);

const Screen2 = () => (
  <Text>Screen 2</Text>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerTitle: () => <Text style={{outlineWidth: 1}}>Screen title</Text>
    }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
