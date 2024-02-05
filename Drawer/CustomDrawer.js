import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';


const navigateToScreen = () => {
  navigation.navigate('covered')
}

const CustomDrawer = () => {
  return (
    <View>
      <Button mode="contained" onPress={navigateToScreen}>
        Press me
      </Button>
    </View>
  )

}


export default CustomDrawer

const styles = StyleSheet.create({})