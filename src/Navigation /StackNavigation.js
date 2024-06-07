import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ChallengePage from '../Screens/Challanges/ChallengePage';
import Challenges from '../Screens/Challanges/Challenges';
import ReviewChallenge from '../Screens/Challanges/ReviewChallenge';
import Comments from '../Screens/Community/Comments';
import CreatePost from '../Screens/CreatePost/CreatePost';
import Notifications from '../Screens/Notifications/Notifications';

const StackNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Comments" component={Comments} />
            <Stack.Screen name="ChallengePage" component={ChallengePage} />
            <Stack.Screen name="Challenges" component={Challenges} />
            <Stack.Screen name="ReviewChallenge" component={ReviewChallenge} />
            <Stack.Screen name="CreatePost" component={CreatePost} />
            <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})