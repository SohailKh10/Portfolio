import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
} from 'react-native';
import { Image } from 'react-native';
import { useEffect, useState } from 'react';

const TeacherS2 = ({ navigation, route }) => {
    // const names = [
    //     {
    //         index: '18',
    //         names: 'Course Content',
    //     },
    //     {
    //         index: '19',
    //         names: 'Weekly Plan',
    //     },
    //     {
    //         index: '20',
    //         names: 'Lectures Notes',
    //     },
    // ];

    const [Folder, setFolder] = useState([]);

    useEffect(() => {
        var myid = Folder.map((item, index) => (
            item.checklistid
        ))
        console.log("My checklist id is:", myid);
    }, [])


    //const [Myid, setMyid] = useState([]);

    {/* useEffect((item) => {
        var ID = Folder.map((item) => {
            item.id
            setMyid(ID);
        })

        //global.Myid = item.Id;
        console.log("My id is", ID);
    }, []);*/}


    const MainFolderChecklist = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Teacher/MainFolderChecklist'
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setFolder(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        console.log(route.params.detail);
        MainFolderChecklist();
    }, [Folder]);

    //console.log("My Data is", Folder);




    const Item = ({ item }) => {

        // const onPressHandler = () => {
        //     global.checklistid = item.Id;
        //     if (item.Name == 'Course Content') {
        //         navigation.navigate('content', {
        //             item,
        //         });
        //     }
        //     else if (item.Name == 'Weekly plan') {
        //         navigation.navigate('weekly', {
        //             item,
        //         });
        //     }
        //     else {
        //         navigation.navigate('LctNote', {
        //             item,
        //         });
        //     }
        // };
        const onPressHandler = () => {
            global.checklistid = item.Id;

            // global.MainId = item.Name;
            global.MainId = item.Id;
            navigation.navigate('Files', {
                item,
            });
        }


        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.listStyle} onPress={onPressHandler}>
                    <Text style={styles.textStyle}>{`${item.Name}`}</Text>
                </TouchableOpacity>

            </View>
        );
    };


    const onPressHandler = (item) => {

        navigation.navigate('Import', {
            item,
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>{route.params.detail}</Text>
            <FlatList
                data={Folder}
                keyExtractor={(item, index) => index}
                renderItem={Item}
            />
            <View style={{ flexDirection: 'row', marginTop: 100 }}>
                <TouchableOpacity style={{ margin: 10, borderRadius: 8, padding: 10, backgroundColor: 'grey', }} onPress={onPressHandler}>
                    <Text style={styles.text2Style}>
                        Import Folder
                    </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ margin: 10, borderRadius: 8, padding: 10, backgroundColor: 'grey', }} onPress={onPressHandler}>
                    <Text style={styles.text2Style}>
                        Import Folder
                    </Text>
                </TouchableOpacity> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        backgroundColor: 'black',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        width: '60%',
        fontSize: 25,
        color: 'white',
    },
    listStyle: {
        textAlign: 'center',
        color: 'white',
        flex: 2
    },
    text2Style: {
        textAlign: 'right',
        color: 'green',
        fontSize: 25,
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

export default TeacherS2;
