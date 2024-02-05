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
import HoDs4 from './HoDs4';

const HoDs5 = ({ navigation, route }) => {
    const names = [
        {
            index: '28',
            names: 'grader',
        },
        {
            index: '29',
            names: 'grader2',
        },
    ];
    const [teacher, setteacher] = useState([]);

    const GetTeachers = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Admin/GetTeachers?activesession=' + global.SessionId;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setteacher(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        console.log(route.params.detail);
        GetTeachers();
    }, [teacher]);

    const Item = ({ item }) => {
        const onPressHandler = () => {
            navigation.navigate('', {
                item,
            });
        };

        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.Name}</Text>
            </Pressable>
        );
    };
    const [SubFolder, setSubFolder] = useState([]);
    const onPressHandler1 = (item) => {
        // global.subfolderid = item.Id;
        // // let item = route.params.detail;
        // //  console.log(item.)
        // var uri =
        //     global.API + 'Teacher/SubFolderChecklist'
        // console.log(uri);
        // fetch(uri)
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json);
        //         setSubFolder(json);

        //     })
        //     .catch(error => console.error(error))
        //     .finally(() => { });


        navigation.navigate('FolderFiles');

    };
    const onPressHandler2 = (item) => {
        navigation.navigate('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>Teacher</Text>
            <FlatList

                data={teacher}

                keyExtractor={(item, index) => index}

                renderItem={({ item, index, separators }) => (

                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingHorizontal: 10, paddingRight: 20 }}>
                        <Text style={styles.textStyle}>{item.Name}</Text>
                        <TouchableOpacity onPress={onPressHandler1}>
                            <Text style={styles.button}>View</Text>
                            <TouchableOpacity onPress={onPressHandler2}>
                                <View  >
                                    <Text style={styles.button2} >Incomplete</Text>
                                </View>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </View>


                )}




            />
            <View style={styles.button}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 25,
        margin: 10,
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
        direction: 'row',
    },
    button2: {
        backgroundColor: '#f45',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    programstyle: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default HoDs5;
