import React from "react";
import 'react-native-gesture-handler'; 
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import FriendsScreen from './FriendsScreen';

const Stack = createStackNavigator();

class FriendsScreen extends React.Component {
    render() {
        return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home"
                Component={HomeScreen}
                />
                <Stack.Screen
                name="Friends"
                Component={FriendsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        );
    }    
}
export default FriendsScreen;