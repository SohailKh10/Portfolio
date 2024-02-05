import { StyleSheet, FlatList, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

const HoDs2 = ({ navigation, route }) => {
    let item = route.params.item;
    const names = [
        {
            index: '7',
            names: 'PF',
        },
        {
            index: '8',
            names: 'CAL',
        },
        {
            index: '9',
            names: 'MLT',
        },
        {
            index: '10',
            names: 'TBW',
        },
    ];

    const [Courses, setCourses] = useState([]);

    const CoursesOffered = () => {
        console.log(item);
        var uri =
            global.API + 'HODAndDirector/CoursesOffered?semester=' + global.selectedSemester + '&activeSession=' + global.SessionId + '&ProgramId=' + global.ProgramId;
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
        console.log(route.params.details);
        CoursesOffered();
    });



    const Item = ({ item }) => {
        const onPressHandler = () => {
            global.courseid = item.Id;
            navigation.navigate('Assign', {
                item,
            });
        };
        <View>
            <Text>AI</Text>
        </View>;
        return (
            <View style={styles.textListStyle}>
                <Pressable style={styles.listStyle} onPress={onPressHandler}>
                    <Text style={styles.textStyle}>{`${item.title}`}</Text>
                    <Text style={styles.subTextStyle}>{`${item.AssignedTo}`}</Text>
                </Pressable>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>{`Semester ${global.selectedSemester}`}</Text>
            <FlatList
                data={Courses}
                keyExtractor={(item, index) => index}
                renderItem={Item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textListStyle: {
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 20,
        margin: 20,
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        fontSize: 30,
        color: 'white',
    },
    textStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        fontSize: 30,
        color: 'white',
    },
    subTextStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '80%',
        fontSize: 15,
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

export default HoDs2;
