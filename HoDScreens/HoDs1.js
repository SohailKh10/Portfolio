import { StyleSheet, FlatList, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

const HoDs1 = ({ navigation, route }) => {
    let item = route.params.item;

    const names = [
        {
            index: '3',
            names: 'PLOs',
        },
        {
            index: '4',
            names: '1st Semester',
        },
        {
            index: '5',
            names: '2nd Semester',
        },
        {
            index: '6',
            names: '3rd Semester',
        },
    ];

    const [Semesters, setSemesters] = useState([]);

    const GetSemesters = () => {
        console.log(item);
        var uri =
            global.API + 'HODAndDirector/GetSemesters?program=' + item.Name;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setSemesters(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        console.log(route.params.details);
        GetSemesters();
    });


    const Item = ({ item }) => {
        const onPressHandler = () => {
            global.selectedSemester = item.Semester;
            navigation.navigate('Sem', {
                details: item,
            });
        };

        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{`Semester ${item.Semester}`}</Text>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>{item.Name}</Text>
            <FlatList
                data={Semesters}
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
        borderRadius: 10,
        width: '80%',
        fontSize: 35,
        color: 'white',
    },
    listStyle: {
        textAlign: 'center',
        color: 'white',
    },
    programstyle: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default HoDs1;
