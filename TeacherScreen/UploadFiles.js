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



const UploadFiles = ({ navigation, route }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    // const [isChecked, setIsChecked] = useState(false);
    const [checkboxValue, setCheckboxValue] = useState(false);

    const [session, setSession] = useState([]);

    const GetMainFolderFiles = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Teacher/SubFolderChecklist'
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




    //checkboxes condition
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



    // const [Sessions, setSessions] = useState('');
    // const [checkedItems, setCheckedItems] = useState([]);
    const [Folder, setFolder] = useState([]);

    //const isChecked = () => { };

    const handleCheckChange = () => {

        setIsChecked(!isChecked);

        // if (isChecked()) {
        //     setCheckedItems(checkedItems.filter());
        // } else {
        //     setCheckedItems([]);
        // }
    };
    const OnSubFolderCheck = (item) => {
        // let item = route.params.detail;
        setCheckboxValue(!checkboxValue);
        console.log(item);
        var uri =
            global.API + `Teacher/OnSubFolderCheck?subfolderchecklistid=${item}`
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log("success");
                console.log(json);
                //setFolder(json);

            })
            .catch(error => console.error(error))
            .finally(() => { console.log("Call done"); });
        GetMainFolderFiles();

    }



    // useState(() => {
    //     console.log(route.params.detail);
    //     // ImportingFolders();
    // }, [Import]);


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
            </View>
        );


    };



    // const onPressHandler = (item) => {
    // const onPressHandler = () => {

    //     // navigation.navigate('', {
    //     //     item,
    //     // });
    //     // const ImportingFolders = () => {
    //     let item = route.params.detail;
    //     //  console.log(item.)
    //     var uri =
    //         global.API + `Teacher/ImportPreviousSessionFiles?teacherId=${global.Id}&courseid=${global.Courseid}&sessionId=${global.SessionId}&semester=${global.Semester}&programId=${global.ProgramId}&checklistid=${global.Id}&mainfolderId=${global.Id}`
    //     console.log(uri);
    //     fetch(uri)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             setImport(json);
    //             alert('Uploaded Successfully')

    //         })
    //         .catch(error => console.error(error))
    //         .finally(() => { });
    //     // };


    // navigation.navigate('', {
    //     item,
    // });
    // };
    // const [Import, setImport] = useState([]);







    return (
        <View>
            <Text style={styles.programstyle}>Check Folder  </Text>
            <FlatList
                data={session}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index, separators }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, paddingHorizontal: 10, paddingTop: 10, }}>
                        <Text style={styles.textStyle}>{item.Name}</Text>
                        <CheckBox value={item.Flag}
                            onValueChange={() => OnSubFolderCheck(index + 1)}
                        >
                        </CheckBox>
                    </View>
                )}

            />

            {/* <TouchableOpacity onValueChange={() => toggleItem(item)}>
            </TouchableOpacity> */}

            {/* <View >

                <Picker
                    selectedValue={selectedValue}
                    onPress={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option.label} value={option.value} />
                    ))}
                </Picker>
            </View> */}
            {/* <View >
                <Text style={styles.text2Style} >
                    <Button title="Import Folder" onPress={onPressHandler} />
                </Text>

            </View> */}

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
        padding: 20,
        margin: 5,
        borderRadius: 10,
        width: '80%',
        fontSize: 25,
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

export default UploadFiles;
