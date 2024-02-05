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

const AdminS1 = ({ navigation, route }) => {
    const names = [
        {
            index: '28',
            names: 'Start New Session',
        },
        {
            index: '29',
            names: 'End Old Session',
        },
    ];

    const [NewSession, setNewSession] = useState([]);

    // const StartNewSession = () => {
    //     let item = route.params.detail;
    //     //  console.log(item.)
    //     var uri =
    //         global.API + 'Admin/StartNewSession'
    //     console.log(uri);
    //     fetch(uri)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             setNewSession(json);

    //         })
    //         .catch(error => console.error(error))
    //         .finally(() => { });
    // };

    // useState(() => {
    //     console.log(route.params.detail);
    //     StartNewSession();
    // }, [NewSession]);



    const Item = ({ item }) => {
        const onPressHandler = () => {
            navigation.navigate('', {
                item,
            });
        };
        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.names}</Text>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>Session Setting</Text>
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
        padding: 30,
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

export default AdminS1;
