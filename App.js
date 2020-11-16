import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './screen/UserListScreen';
import CreateUserScreen from './screen/CreateUserScreen';
import UserDetailScreen from './screen/UserDetailScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="UserList" component={UserListScreen} options={{title:"user list"}} />  
       <Stack.Screen name="CreateUser" component={CreateUserScreen} options={{title:"create new user"}} />  
        <Stack.Screen name="UserDetails" component={UserDetailScreen} options={{title:"user details"}} />  
      </Stack.Navigator> 
    </NavigationContainer>
  ); 
}

