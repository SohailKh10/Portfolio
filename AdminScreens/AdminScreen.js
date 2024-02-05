import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
} from 'react-native';
import { useState } from 'react';

const AdminScreen = ({ navigation, route }) => {
    const names = [
        {
            index: '27',
            names: 'Start New Session',
        },
        {
            index: '26',
            names: 'Get Grader',
        },
        {
            index: '26',
            names: 'Get Teacher',
        },
        {
            index: '26',
            names: 'Topics',
        },
    ];




    const Item = ({ item }) => {
        const onPressHandler = () => {
            // global.checklistid = item.Id;
            if (item.names == 'Start New Session') {
                navigation.navigate('AdminS1', {
                    item,
                });
            }
            else if (item.names == 'Get Teacher') {
                navigation.navigate('AdminS3', {
                    item,
                });
            }
            else if (item.names == 'Topics') {
                navigation.navigate('AdminS4', {
                    item,
                });
            }
            else {
                navigation.navigate('AdminS2', {
                    item,
                });
            }
        };


        return (

            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.names}</Text>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}> AdminScreen</Text>
            <FlatList
                data={names}
                keyExtractor={(item, index) => index}
                renderItem={Item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 20,
        margin: 20,
        alignItems: 'center',
        borderRadius: 20,
        width: '80%',
        fontSize: 35,
        color: 'white',
    },
    listStyle: {
        textAlign: 'center',
        color: 'white',
    },
    button: {
        backgroundColor: '#f4511e',
        padding: 10,
        borderRadius: 5,
    },
    programstyle: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default AdminScreen;
