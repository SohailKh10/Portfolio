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
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';



const PreviousFolder = ({ navigation, route }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const [session, setSession] = useState([]);

    const GetMainFolderFiles = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Teacher/MainFolderChecklist'
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setSession(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        console.log(route.params.detail);
        GetMainFolderFiles();
    }, [session]);





    const options = [
        { label: 'Fall 2022', value: 'option 1' },
        { label: 'Spring 2021', value: 'option 2' },
        { label: 'Fall 2023', value: 'option 3' },
    ];


    // const [Sessions, setSessions] = useState('');
    const [checkedItems, setCheckedItems] = useState([]);

    const isChecked = () => { };
    toggleChecked = index => {
        console.log(index);
        let selected = session;
        selected[index].status = !selected[index].status;
        setSession([...selected]);
        console.log(session);
    }

    const toggleItem = () => {
        if (isChecked()) {
            setCheckedItems(checkedItems.filter());
        } else {
            setCheckedItems([]);
        }
    };



    useState(() => {
        console.log(route.params.detail);
        // ImportingFolders();
    }, [Import]);


    const Item = ({ item, index }) => {
        const onPressHandler = () => {
            // // const ImportingFolders = () => {
            // let item = route.params.detail;
            // //  console.log(item.)
            // var uri =
            //     global.API + `Teacher/ImportPreviousSessionFiles?teacherId=${global.Id}&courseid=${global.Courseid}&sessionId=${global.SessionId}&semester=${global.Semester}&programId=${global.ProgramId}&checklistid=${global.Id}&mainfolderId=${global.MainFolderId}`
            // console.log(uri);
            // fetch(uri)
            //     .then(response => response.json())
            //     .then(json => {
            //         console.log(json);
            //         setImport(json);

            //     })
            //     .catch(error => console.error(error))
            //     .finally(() => { });
            // // };


            // navigation.navigate('', {
            //     item,
            // });
        };
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, paddingHorizontal: 10, paddingTop: 10, }}>
                <Pressable style={styles.listStyle} onPress={onPressHandler}>
                    <Text style={styles.textStyle}>{item.Name}</Text>
                </Pressable>
                <CheckBox status={item.status}
                    onValueChange={() => toggleChecked(index)}
                >
                </CheckBox>
            </View>
        );


    };



    // const onPressHandler = (item) => {
    const onPressHandler = () => {

        // navigation.navigate('', {
        //     item,
        // });
        // const ImportingFolders = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + `Teacher/ImportPreviousSessionFiles?teacherId=${global.Id}&courseid=${global.Courseid}&sessionId=${global.SessionId}&semester=${global.Semester}&programId=${global.ProgramId}&checklistid=${global.Id}&mainfolderId=${global.Id}`
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setImport(json);
                alert('Imported Successfully')

            })
            .catch(error => console.error(error))
            .finally(() => { });
        // };


        // navigation.navigate('', {
        //     item,
        // });
    };
    const [Import, setImport] = useState([]);







    return (
        <View>
            <Text style={styles.programstyle}>Import</Text>
            {/* <View >
                <FlatList
                    data={Import}
                    keyExtractor={(item, index) => index}
                    renderItem={Item}

                />
            </View> */}
            <FlatList
                data={session}

                keyExtractor={(item, index) => index}
                renderItem=
                {({ item, index, separators }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, paddingHorizontal: 10, paddingTop: 10, }}>
                        <Pressable style={styles.listStyle} onPress={onPressHandler}>
                            <Text style={styles.textStyle}>{item.Name}</Text>
                        </Pressable>
                        <CheckBox value={item.status}
                            onValueChange={() => toggleChecked(index)}
                        >
                        </CheckBox>
                    </View>
                )}

            />

            <TouchableOpacity onValueChange={() => toggleItem(item)}>
            </TouchableOpacity>

            <View >

                <Picker
                    selectedValue={selectedValue}
                    onPress={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option.label} value={option.value} />
                    ))}
                </Picker>
            </View>
            <View >
                <Text style={styles.text2Style} >
                    <Button title="Import Folder" onPress={onPressHandler} />
                </Text>

            </View>

        </View>
    );




};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    picker: {
        width: 200,
        height: 50,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    textStyle: {
        backgroundColor: 'black',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        fontSize: 20,
        color: 'white',
    },
    listStyle: {
        textAlign: 'center',
        color: 'white',
    },
    text2Style: {
        padding: 50,
        textAlign: 'right',
        color: 'green',
        borderRadius: 20
    },
    programstyle: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
});

export default PreviousFolder;
