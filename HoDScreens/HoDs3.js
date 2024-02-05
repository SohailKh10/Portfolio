import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
// import RadioForm from 'react-native-simple-radio-button';

const HoDs3 = ({ navigation, route }) => {
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

    const [value, setValue] = useState();
    const [checked, setChecked] = useState();
    const [teachers, setTeachers] = useState({});


    const GetTeachers = () => {
        console.log(item);
        var uri =
            global.API + 'HODAndDirector/GetTeachers?ProgramId=' + global.ProgramId + '&activeSession=' + global.SessionId + '&semester=' + global.selectedSemester + '&courseid=' + global.courseid;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log('here in get teachers', json);
                setTeachers(json);

            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    // useState(() => {
    //     console.log(route.params.details);
    //     GetTeachers();
    // });
    useEffect(() => {
        GetTeachers();
    }, [])
    // useState(() => {
    //     console.log(route.params.details);
    //     AssignMainFolder3();
    // });
    const Item = ({ item }) => {
        const onPressHandler = () => {
            var uri =
                global.API + 'HODAndDirector/AssignMainFolder3?pid=' + global.ProgramId + '&sid=' + global.SessionId + '&semester=' + global.selectedSemester + '&courseid=' + global.courseid + '&tid=' + item.Id;
            console.log();
            fetch(uri)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    console.log('Teacher is assigned:', json);
                    alert('MainFolder Assigned Successfully')
                    //   setTeachers(json);

                })
                .catch(error => console.error(error))
                .finally(() => { });

            // return (
            //     <Pressable style={styles.listStyle} onPress={onPressHandler}>
            //         <Text style={styles.textStyle}>{item.TeacherId}</Text>
            //     </Pressable>
            // );



            // global.courseid = item.Id;
            // navigation.navigate('', {
            //     item,
            // });
        };
        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.teacherName}</Text>
            </Pressable>
        );
    };





    //const item = [{ label: 'Assigned', value: 1 }];
    const onPressHandler = (item) => {
        navigation.navigate('', {
            item,
        });
    };
    const onPressHandler1 = () => {
        navigation.navigate('Fcr');
    }

    return (

        <View style={styles.container}>
            {/*<Text
                style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 22,
                    marginBottom: 20,
                }}>
                Shahid Jamel
            </Text>
            {/* <RadioForm
        radio_props={item}
        initial={value}
        onPress={val => setValue(!value)}
        buttonColor="red"
        labelColor="red"
        selectedButtonColor="green"
        selectedLabelColor="green"
      /> 
            <RadioButton
                value={checked}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
            />*/}
            {/*<View style={styles.ButtonStyle}>
                <Button
                    title="Assigned Main Folder"
                    onPress={onPressHandler}

                />
            </View>*/}
            <View style={styles.container}>
                <Text style={styles.programstyle}> Teachers </Text>
                <View style={styles.container}>
                    <View style={styles.button}>
                        {/* <TouchableOpacity onPress={onPressHandler1}>
                            <Text style={styles.button}>Completed</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
                <FlatList
                    data={teachers}
                    keyExtractor={(item, index) => index}
                    renderItem={Item}
                />


            </View>

        </View>

    );

};

export default HoDs3;

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 20,
        margin: 20,
        alignItems: 'center',
        borderRadius: 20,
        width: '80%',
        fontSize: 25,
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

