import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';



const DocFiles = ({ navigation, route }) => {
    const [pickedFile, setPickedFile] = useState(null);
    const [MainId, setMainId] = useState(1);
    const [folderFiles, setFolderFiles] = useState([]);
    const [fileItems, setFileItems] = useState([]);

    useEffect(() => {

        console.log('fileItems', fileItems)

    }, [fileItems])

    const pickFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setPickedFile(res);
            setFileItems((prev) => [prev, res[0].name])
            console.log('setPicked File', res);

            console.log(global.checklistid);//uri: res[0].uri, name: res[0].name, type: res[0].type });
            console.log(global.MainId);


            const formData = new FormData();
            formData.append("subfolderfile", { uri: res[0].uri, name: res[0].name, type: res[0].type });
            formData.append("checklistitemid", global.checklistitemid);

            formData.append("FileName", "abc");
            formData.append("Subid", global.ID);
            //formData.append("myid", global.ID);

            var requestData = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data;',
                },
                body: formData,
            };

            console.log("My checklistI is:", global.checklistitemid)

            //save file to api
            var uri =
                global.API + 'Teacher/UploadSubFolderFiles'
            console.log(uri);
            console.log(requestData);
            fetch(uri, requestData)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    setFolderFiles(json);

                })
                .catch(error => console.error(error))
                .finally(() => { });




        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancelled the file picker.');
            } else {
                console.log('Error while picking the file:', err);
            }
        }
    };
    const [session, setSession] = useState([]);

    const GetSubFolderFiles = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Teacher/GetSubFolderFiles?Aid=' + global.Id + '&checklistid=' + global.Id;
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
        //console.log(route.params.detail);
        GetSubFolderFiles
    }, [session]);

    const Item = ({ item }) => {
        console.log(item);
    };
    return (

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ margin: 30 }}>
                <Button title="Upload file" onPress={pickFile} />
            </Text>
            {pickedFile && (
                <Text style={{ fontSize: 20, backgroundColor: 'black', padding: 10, margin: 10, color: 'white' }}>
                    Type: {pickedFile.type}
                </Text>
            )}
            <FlatList data={fileItems} keyExtractor={(item, index) => index} renderItem={({ item }) => {
                if (item) {
                    return (
                        <View>
                            <Text style={styles.programstyle}>File Name: {item}</Text>
                        </View>
                    )
                }
            }} />
            <FlatList
                data={session}
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
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: 'black',

    },
});

export default DocFiles;
