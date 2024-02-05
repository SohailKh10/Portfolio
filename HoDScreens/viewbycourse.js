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

const viewbycourse = ({ navigation }) => {
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
            global.API + 'HODAndDirector/GetAllCourses?activeSession=' + global.SessionId;
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



    const Item = ({ item }) => {
        const onPressHandler = () => {
            // global.Courseid = item.Courseid;
            // global.ProgramId = item.ProgramId;
            // global.Semester = item.Semester;
            // global.mainfolderId = item.Id;
            // global.Weekno = item.Id;
            // // global.Weekno = item.Name;
            // global.Aid = item.Id;
            navigation.navigate('', {
                detail: item,
            });
        };
        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.ShortName + ' ' + item.Name + '-' + item.Semester + '\n' + item.title}</Text>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>Courses</Text>
            <FlatList
                data={courses}
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
        padding: 25,
        margin: 15,
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

export default viewbycourse;
