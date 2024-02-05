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

const Grader = ({ navigation, route }) => {
    const names = [
        {
            index: '18',
            names: 'Course Content',
        },
        {
            index: '19',
            names: 'Weekly Plan',
        },
        {
            index: '20',
            names: 'Lectures Notes',
        },
    ];

    const [graders, setgraders] = useState([]);

    const getTeacherCourses = () => {
        var uri =
            global.API + 'Admin/NewGetGraders?teacherid=' + global.Id + '&activesession=' + global.SessionId;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setgraders(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        getTeacherCourses();
    });




    // const Item = ({ item }) => {


    // };


    const onPressHandler3 = (item) => {
        navigation.navigate('Grader1', {
            item,
        });
    };
    const onPressHandler4 = (item) => {
        navigation.navigate('Grader2', {
            item,
        });
    };












    const onPressHandler = (item) => {

        navigation.navigate('Grader1', {
            item,
        });
    };

    const Item = ({ item }) => {
        const onPressHandler = () => {
            global.graderid = item.Id;
            global.subfolderchecklistid = item.Id;
            navigation.navigate('Grader1', {
                item,
            });
        };
        return (
            <View>
                <Pressable style={styles.listStyle} onPress={onPressHandler}>
                    <Text style={styles.textStyle}>{item.Name}</Text>
                </Pressable>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>Grader's Screen</Text>
            <FlatList
                data={graders}
                keyExtractor={(item, index) => index}
                renderItem={Item}
            />

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

export default Grader;
