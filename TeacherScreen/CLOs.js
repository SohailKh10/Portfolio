
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
    TextInput
} from 'react-native';
import React, { useState } from 'react';



const CLOs = ({ navigation }) => {


    const names = [
        {
            index: '21',
            names: ' CLO 1',
        },
        {
            index: '22',
            names: 'CLO 4',
        },
        {
            index: '23',
            names: 'CLO 3',
        },
        {
            index: '24',
            names: 'CLO 2',

        },
    ];

    const [text, setText] = useState('Initial Text');
    const [editing, setEditing] = useState(false);

    const handleEditPress = () => {
        setEditing(true);
    };

    const handleSavePress = () => {
        setEditing(false);
        // Perform any save logic here
    };

    const Item = ({ item }) => {
        const onPressHandler = () => {
            navigation.navigate('', {
                item,

            });
        }
        return (


            <View>
                <Pressable style={styles.listStyle} onPress={onPressHandler}>
                    <Text style={styles.textStyle}>{item.names}</Text>
                </Pressable>
            </View>


        );

    };
    const onPressHandler = () => {
        navigation.navigate('');
    }
    return (


        <View style={styles.container}>
            <Text style={styles.programstyle}>CLOs</Text>

            <FlatList
                data={names}
                keyExtractor={(item, index) => index}
                renderItem={Item}

            />
            <View style={styles.container}>
                {editing ? (
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                        autoFocus
                    />
                ) : (
                    <Text style={styles.text}>{text}</Text>
                )}

                {editing ? (
                    <Text style={styles.saveButton} onPress={handleSavePress}>
                        Save
                    </Text>
                ) : (
                    <Text style={styles.editButton} onPress={handleEditPress}>
                        Edit
                    </Text>
                )}
            </View>

        </View>

    );


};


const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        margin: 20,
        alignItems: 'center',
        borderRadius: 20,
        width: '80%',
        fontSize: 25,
        color: 'black',
    },
    listStyle: {
        textAlign: 'center',
        color: 'white',
    },
    button: {
        backgroundColor: '#f4511e',
        padding: 10,
        borderRadius: 20,
    },
    button: {
        backgroundColor: 'black',
        padding: 5,
        margin: 10,
        color: 'white',
        borderRadius: 40,
        fontSize: 20,
        textAlign: 'center',
    },
    programstyle: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        width: '100%',
    },
    editButton: {
        fontSize: 16,
        color: 'blue',
    },
    saveButton: {
        fontSize: 16,
        color: 'green',
    },
});

export default CLOs;
