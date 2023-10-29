import { StyleSheet, View } from 'react-native';
import Home from './App/Home';
import Description from './App/Description';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return ( 
      <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name='Top Headlines' component={Home} />
                <Stack.Screen name='Description' component={Description} />
                </Stack.Navigator>
      </NavigationContainer>
   
  );
}

 

