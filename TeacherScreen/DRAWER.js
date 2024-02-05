import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';



const DRAWER = ({ navigation }) => {
    const navigateToScreen = () => {
        navigation.navigate('Teacher')
    }
    const navigateToScreen1 = () => {
        navigation.navigate('Sections')
    }
    const navigateToScreen2 = () => {
        navigation.navigate('Folders')
    }

    const navigateToScreen3 = () => {
        navigation.navigate('Topics')
    }

    return (
        <View >
            <View style={{ padding: 10 }}>
                <Button mode="contained" onPress={navigateToScreen}>
                    Teacher
                </Button>
            </View>

            <View style={{ padding: 10 }}>
                <Button style mode="contained" onPress={navigateToScreen1}>
                    Sections
                </Button>
            </View>
            <View style={{ padding: 10 }}>
                <Button style mode="contained" onPress={navigateToScreen2}>
                    Folders
                </Button>
            </View>
            <View style={{ padding: 10 }}>
                <Button style mode="contained" onPress={navigateToScreen3}>
                    Topics
                </Button>
            </View>
        </View>


    )

}





export default DRAWER;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonStyle: {
        borderRadius: 15,
        padding: 50,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },

});