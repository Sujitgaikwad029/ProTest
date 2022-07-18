import { View, Text } from 'react-native'
import React from 'react'
import Home from './Src/Pages/Home'
import codePush from "react-native-code-push";

const App = () => {
  return (
    <Home />
  )
}

export default codePush(App)


// let MyApp: () => React$Node = () => {
// }

// MyApp = codePush(App);