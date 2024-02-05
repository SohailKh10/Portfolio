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

const GraderS1 = ({ navigation, route }) => {
    const names = [
        {
            index: '24',
            names: ' IT 6A',
        },
        {
            index: '25',
            names: ' IT 6B',
        },
    ];

    const [sections, setSections] = useState([]);

    const TeacherSections = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Teacher/TeacherSections?uid=' + global.Teacheruid + '&activeSession=' + global.SessionId + "&courseId=" + global.Courseid + "&SemesterNum=" + global.Semester + "&ProgramId=" + global.ProgramId;
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
        const onPressHandler = () => {
            global.SubFolderId = item.SubFolderId;
            navigation.navigate('sub', {
                item,
            });
        };
        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{`${item.Program}${item.Semester}${item.Category}`}</Text>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>PDC-IT 6</Text>
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
        margin: 20,
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

export default GraderS1;
