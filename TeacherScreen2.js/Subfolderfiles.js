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
import CheckBox from '@react-native-community/checkbox';


const Subfolderfiles = ({ navigation, route }) => {
    const names = [
        {
            index: '14',
            names: ' Lecture Notes',
        },
        {
            index: '16',
            names: 'Assignments',
        },
        {
            index: '17',
            names: 'Quizzes',
        },
        {
            index: '18',
            names: 'Sample',
        },
        {
            index: '19',
            names: 'Exam',
        },
        {
            index: '20',
            names: 'Attendence',
        },
        // {
        //     index: '21',
        //     names: 'Attendence',
        // },
        {
            index: '22',
            names: 'FCR',
        },
    ];

    const [SubFolder, setSubFolder] = useState([]);
    const [email, setEmail] = useState('');
    const [checkboxValue, setCheckboxValue] = useState(false);

    const AllowedSubFolderChecklistHODSide = () => {
        // let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'HODAndDirector/AllowedSubFolderChecklistHODSide?subfolderid=' + global.subfolderid;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setSubFolder(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        // console.log(route.params.detail);
        AllowedSubFolderChecklistHODSide();
    }, [SubFolder]);



    const onPressHandler1 = () => {
        //global.checklistid = item.Id;

    };
    // const OnSubFolderCheck = (item) => {
    //     // let item = route.params.detail;
    //     setCheckboxValue(!checkboxValue);
    //     console.log(item);
    //     var uri =
    //         global.API + `Teacher/OnSubFolderCheck?subfolderchecklistid=${item}`
    //     console.log(uri);
    //     fetch(uri)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log("success");
    //             console.log(json);
    //             //setFolder(json);

    //         })
    //         .catch(error => console.error(error))
    //         .finally(() => { console.log("Call done"); });
    //     SubFolderChecklist();

    // }



    const Item = ({ item }) => {
        const onPressHandler = () => {
            if (item.names == 'Exam') {
                navigation.navigate('exams', {
                    item,
                });
            }
            else if (item.names == 'Sample') {
                navigation.navigate('sample', {
                    item,
                });
            }
            else {
                navigation.navigate('file', {
                    item,
                });

            }
        };
        const onPressHandler1 = () => {
            navigation.navigate('');
        }




        return (

            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.Name}</Text>
            </Pressable>

        );

    };
    // const onPressHandler = () => {
    //     navigation.navigate('file');
    // }
    return (

        <View style={styles.container}>
            <Text style={styles.programstyle}>AI2A Sub Folder</Text>

            {/* <TextInput
                style={styles.input}
                placeholder="FeedBack"

                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                value={email}

            />
            <TouchableOpacity onPress={onPressHandler1}>
                <Text style={styles.button}>FeedBack</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={onPressHandler1}>
                        <Text style={styles.button}>Incomplete</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={onPressHandler1}>
                            <Text style={styles.button}>Completed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}
            {/* <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={onPressHandler}>
                        <Text style={styles.button}>Incomplete</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={onPressHandler}>
                            <Text style={styles.button}>Completed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}

            <FlatList
                data={SubFolder}
                keyExtractor={(item, index) => index}
                renderItem={Item}
            />









        </View>
    );


};


const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'brown',
        padding: 15,
        margin: 5,
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
        backgroundColor: 'black',
        padding: 10,
        margin: 5,
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

export default Subfolderfiles;
