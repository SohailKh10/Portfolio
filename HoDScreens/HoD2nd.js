import { useState } from 'react';
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



const HoD2nd = ({ navigation, route }) => {
    // const names = [
    //     {
    //         index: '14',
    //         names: ' Lecture Notes',
    //     },
    //     {
    //         index: '16',
    //         names: 'Assignments',
    //     },
    //     {
    //         index: '17',
    //         names: 'Quizzes',
    //     },
    //     {
    //         index: '18',
    //         names: 'Sample',
    //     },
    //     {
    //         index: '19',
    //         names: 'Exam',
    //     },
    //     {
    //         index: '20',
    //         names: 'Attendence',
    //     },
    //     {
    //         index: '21',
    //         names: 'Attendence',
    //     },
    //     {
    //         index: '22',
    //         names: 'FCR',
    //     },
    // ];

    //const [SubFolder, setSubFolder] = useState([]);
    const [email, setEmail] = useState('');

    // const SubFolderChecklist = () => {
    //     let item = route.params.detail;
    //     //  console.log(item.)
    //     var uri =
    //         global.API + 'Teacher/SubFolderChecklist'
    //     console.log(uri);
    //     fetch(uri)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             setSubFolder(json);

    //         })
    //         .catch(error => console.error(error))
    //         .finally(() => { });
    // };

    // useState(() => {
    //     console.log(route.params.detail);
    //     SubFolderChecklist();
    // }, [SubFolder]);



    const onPressHandler1 = () => {
        //global.checklistid = item.Id;

    };



    const Item = ({ item }) => {
        const onPressHandler = () => {
            // global.UserId = email;
            // if (item.Name == 'Exam') {
            //     navigation.navigate('exams', {
            //         item,
            //     });
            // }
            // else if (item.Name == 'Sample') {
            //     navigation.navigate('sample', {
            //         item,
            //     });
            // }
            // else {
            //     navigation.navigate('file', {
            //         item,
            //     });
            // }
        };
        return (

            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{ }</Text>
            </Pressable>

        );

    };

    const onPressHandler = () => {
        global.UserId = email;
        navigation.navigate('Dashboard');
    }
    return (

        <View style={styles.container}>
            <Text style={styles.programstyle}>Teacher View</Text>
            <TextInput
                style={styles.input}
                placeholder="Teacher V"
                keyboardType="UserId"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <View style={{ flexDirection: 'row' }}>
                {/* <View style={styles.button}>
                    <TouchableOpacity onPress={onPressHandler}>
                        <Text style={styles.button}>Incomplete</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={styles.container}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={onPressHandler}>
                            <Text style={styles.button}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <FlatList
                //data={ }
                keyExtractor={(item, index) => index}
                renderItem={Item}

            />








        </View>
    );


};


const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
        width: '80%',
        fontSize: 35,
        color: 'black',
    },
    listStyle: {
        textAlign: 'center',
        color: 'white',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        color: 'white',
        borderRadius: 25,
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
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'grey',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        color: 'black'
    },
});

export default HoD2nd;
