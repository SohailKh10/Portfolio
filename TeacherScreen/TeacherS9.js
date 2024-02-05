import { View, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { Button } from 'react-native-paper';

const TeacherS9 = ({ navigation }) => {

    const [Common, setCommon] = useState([]);

    const getCommonTopics = () => {
        // let item = route.params.detail;
        console.log(Item);
        var uri =
            global.API + 'Teacher/GetAllTeachersTopics?&activeSession=' + global.SessionId + "&courseid=" + global.Courseid + "&semester=" + global.Semester + "&programid=" + global.ProgramId;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setCommon(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        // console.log(route.params.detail);
        getCommonTopics();
    }, [Common]);


    const Item = ({ item }) => {

        return (
            <Pressable style={styles.listStyle}>
                <Text style={styles.textStyle}>{item.teacherName + ' ' + item.Category}</Text>
            </Pressable>
        );
    };
    const Item1 = ({ item }) => {

        return (
            <Pressable style={styles.listStyle}>
                <Text style={styles.textStyle}>{item.Name}</Text>
            </Pressable>
        );
    };


    return (
        <View style={{}}>
            <Text style={styles.programstyle}>Comparison Topics</Text>
            {/* <ButtonGroup /> */}
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Comparison</Text>

                </TouchableOpacity>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('covered')}>
                        <Text style={styles.buttonText}>Common</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View>
                <Text style={styles.Textstyle}>Comparison</Text>
                <FlatList
                    data={Common.FirstRowWithTeachers}
                    keyExtractor={(item, index) => index}
                    renderItem={Item}
                    horizontal={true}
                />
                <View>
                    <FlatList
                        data={Common.ListOfTopicsWithFlags}
                        keyExtractor={(item, index) => index}
                        renderItem={Item1}
                    // horizontal={true}
                    />
                </View>
            </View>
        </View>
    );
};


// const onPressHandler = () => {
//     navigation.navigate('files', {
//         item,

//     });
// }
// const ButtonGroup = () => {
//     return (

//         <View style={styles.container}>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate}>
//                 <Text style={styles.buttonText}>Comparison</Text>
//             </TouchableOpacity>

//         </View>
//     );
// };

export default TeacherS9;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'center', // Center children horizontally
        alignItems: 'center', // Center children vertically
    },
    button: {
        backgroundColor: 'black',
        padding: 25,
        margin: 50,

        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
    },
    programstyle: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
    },
    Textstyle: {
        fontSize: 30,
        color: 'black',
        margin: 10,
    },
    Textstyle2: {
        fontSize: 25,
        color: 'white',
        marginTop: 30,
    },
    Textstyle3: {
        fontSize: 25,
        color: 'blue',
        marginTop: 30,
        textAlign: 'center',
    },
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 10,
        margin: 25,
        alignItems: 'center',
        borderRadius: 20,
        width: '90%',
        fontSize: 18,
        color: 'white',
    },
});
