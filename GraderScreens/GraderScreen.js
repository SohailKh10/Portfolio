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

const GraderScreen = ({ navigation, route }) => {
    const names = [
        {
            index: '21',
            names: ' PFC-IT 6',
        },
        {
            index: '22',
            names: ' PDC-CS 6',
        },
        {
            index: '23',
            names: 'OOP-CS 6',
        },
    ];
    const [GraderData, setGraderData] = useState([]);

    const AssignedTeacherCourses = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Grader/AssignedTeacherCourses?uid=' + global.UserId + '&activeSession=' + global.SessionId;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setGraderData(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        console.log(route.params.detail);
        AssignedTeacherCourses();
    }, [GraderData]);


    const Item = ({ item }) => {
        const onPressHandler = () => {
            global.Teacheruid = item.teacheruid;
            global.Courseid = item.Courseid;
            global.Semester = item.Semester;
            global.ProgramId = item.ProgramId;

            navigation.navigate('GraderS1', {
                item,
            });
        };
        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.teacherName + '\n' + item.ShortName + '' + item.Semester}</Text>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>Assigned To</Text>
            <FlatList
                data={GraderData}
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
        margin: 20,
        alignItems: 'center',
        borderRadius: 20,
        width: '80%',
        fontSize: 30,
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
    },
    programstyle: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default GraderScreen;
