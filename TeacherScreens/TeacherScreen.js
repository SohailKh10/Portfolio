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

const TeacherScreen = ({ navigation }) => {
    const names = [
        // {
        //     index: '11',
        //     names: 'PDC-IT 6',
        // },
        // {
        //     index: '12',
        //     names: 'PDC-CS 6',
        // },
        // {
        //     index: '13',
        //     names: 'OOP-CS 6',
        // },
    ];

    const [courses, setCourses] = useState([]);

    const getTeacherCourses = () => {
        var uri =
            global.API + 'Teacher/TeacherCourses?uid=' + global.UserId + '&activeSession=' + global.SessionId;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setCourses(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        getTeacherCourses();
    });
    const onPressHandler3 = (item) => {
        global.teacherid = item.Id;
        navigation.navigate('Grader screen', {
            item,
        });
    };

    const Item = ({ item }) => {
        const onPressHandler = () => {
            global.Courseid = item.Courseid;
            global.ProgramId = item.ProgramId;
            global.Semester = item.Semester;
            global.teacherid = item.Id;
            global.SubFolderChecklist = item.SubFolderChecklist;
            navigation.navigate('Sections', {
                detail: item,
            });
        };
        return (
            <View>
                <Pressable style={styles.listStyle} onPress={onPressHandler}>
                    <Text style={styles.textStyle}>{item.ShortName + ' ' + item.Program + '-' + item.Semester + '\n' + item.Title}</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>Spring-2023</Text>
            <FlatList
                data={courses}
                keyExtractor={(item, index) => index}
                renderItem={Item}
            />
            <Pressable style={styles.listStyle} onPress={onPressHandler3}>
                <Text style={styles.textStyle}>{`Grader Permission`}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 30,
        margin: 25,
        alignItems: 'center',
        borderRadius: 20,
        width: '80%',
        fontSize: 18,
        color: 'white',
    },
    listStyle: {
        textAlign: 'center',
        color: 'white',
    },
    programstyle: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default TeacherScreen;
