import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Comments from './src/Screens/Community/Comments'
import CreatePost from './src/Screens/CreatePost/CreatePost'
import Notifications from './src/Screens/Notifications/Notifications'
import Challenges from './src/Screens/Challanges/Challenges'
import ChallengePage from './src/Screens/Challanges/ChallengePage'
import ReviewChallenge from './src/Screens/Challanges/ReviewChallenge'
import StackNavigation from './src/Navigation /StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    // <Comments />
    // <CreatePost/>
    // <Notifications/>
    // <Challenges/>
    // <ChallengePage/>
    // <ReviewChallenge/>
<NavigationContainer>
  <StackNavigation/>
</NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})