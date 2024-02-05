import { useState } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Sections({ navigation, route }) {
    const names = [
        {
            index: '14',
            names: ' Main Folder',
        },
        {
            index: '15',
            names: ' CLOs',
        },
        {
            index: '16',
            names: 'IT 6A',

        },
        {
            index: '17',
            names: 'IT 6C',
        },
    ];


    const [sections, setSections] = useState([]);

    const TeacherSections = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Teacher/TeacherSections?uid=' + global.UserId + '&activeSession=' + global.SessionId + "&courseId=" + global.Courseid + "&SemesterNum=" + global.Semester + "&ProgramId=" + global.ProgramId;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setSections(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        console.log(route.params.detail);
        TeacherSections();
    }, [sections]);



    const Item = ({ item }) => {
        console.log(item);
        const onPressHandler = () => {
            global.Aid = item.AllocationId;
            global.subfolderid = item.Id;
            navigation.navigate('SectionTopic', {
                item,
            });
        };
        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{`${item.Program}${item.Semester}${item.Category}`}</Text>
            </Pressable>


        );

    };
    const onPressHandler = (item) => {
        navigation.navigate('MainFolder', {
            item,
        });
    };

    // const onPressHandler2 = (item) => {
    //     navigation.navigate('clo', {
    //         item,
    //     });
    // };
    const onPressHandler3 = (item) => {
        navigation.navigate('CommonTopics', {
            item,
        });
    };
    const onPressHandler4 = (item) => {
        navigation.navigate('Week', {
            item,
        });
    };
    const onPressHandler5 = (item) => {
        navigation.navigate('Covered Topics', {
            item,
        });
    };
    console.log('data');

    return (

        <View style={styles.container}>
            <Text style={styles.programstyle}>{route.params.detail.Title}</Text>

            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={sections.length > 0 && sections[0].FolderId != 0 ? styles.textStyle : styles.listStyleHidden}>{`Main Folder`}</Text>
            </Pressable>

            {/* <Pressable style={styles.listStyle} onPress={onPressHandler2}>
                <Text style={styles.textStyle}>{`CLOs`}</Text>
            </Pressable> */}
            <Pressable style={styles.listStyle} onPress={onPressHandler3}>
                <Text style={styles.textStyle}>{`Common`}</Text>
            </Pressable>
            {/* <Pressable style={styles.listStyle} onPress={onPressHandler4}>
                <Text style={styles.textStyle}>{`Topics`}</Text>
            </Pressable>
            <Pressable style={styles.listStyle} onPress={onPressHandler5}>
                <Text style={styles.textStyle}>{`Covered Topics`}</Text>
            </Pressable> */}
            <FlatList
                data={sections}
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
    listStyleHidden: {
        textAlign: 'center',
        color: 'white',
        display: 'none'
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

//export default TeacherS1;
