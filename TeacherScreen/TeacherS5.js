import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
} from 'react-native';
import React, { useState } from 'react';

const TeacherS5 = ({ navigation, route }) => {
    const names = [
        {
            index: '14',
            names: ' Week 1',
        },
        {
            index: '15',
            names: ' Week 2',
        },
        {
            index: '16',
            names: 'Week 3',
        },
        {
            index: '17',
            names: 'Week 4',
        },
        {
            index: '17',
            names: 'Week 5',
        },
    ];

    const [WeekDetail, setWeekDetail] = useState([]);

    const GetWeeks = () => {
        let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Teacher/GetWeeks'
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setWeekDetail(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        console.log(route.params.detail);
        GetWeeks();
    }, [WeekDetail]);





    const Item = ({ item }) => {

        const onPressHandler = () => {
            global.Weekno = item.WeekNo;
            // console.log(global.Weekno)
            navigation.navigate('Topics', {
                item,
            });
        };
        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.WeekNo}</Text>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>Weeks</Text>
            <FlatList
                data={WeekDetail}
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
        padding: 30,
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

export default TeacherS5;
