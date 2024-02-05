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



const GraderS3 = ({ navigation, route }) => {

    const [GraderDetail, setGraderDetail] = useState([]);

    // const AllowedSubFolderChecklist = () => {
    //     let item = route.params.detail;
    //     //  console.log(item.)
    //     var uri =
    //         global.API + 'Grader/AllowedSubFolderChecklist';
    //     console.log(uri);
    //     fetch(uri)
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             setGraderDetail(json);

    //         })
    //         .catch(error => console.error(error))
    //         .finally(() => { });
    // };

    // useState(() => {
    //     console.log(route.params.detail);
    //     AllowedSubFolderChecklist();
    // }, [GraderDetail]);








    const [Sessions, setSessions] = useState('');


    const AllowedSubFolderChecklist = () => {
        //let item = route.params.detail;
        //  console.log(item.)
        var uri =
            global.API + 'Grader/AllowedSubFolderChecklist?graderid=' + global.Id;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                // Alert(json);
                setGraderDetail(json);
            })
            .catch(error => console.error(error))
            .finally(() => { });
    }



    useState(() => {
        AllowedSubFolderChecklist();
    });
    const Item = ({ item }) => {
        const onPressHandler = () => {

            useState(() => {
                console.log(route.params.detail);
                AllowedSubFolderChecklist();
            }, [GraderDetail]);
        };
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, paddingHorizontal: 10, paddingTop: 10, }}>
                <Pressable style={styles.listStyle} onPress={onPressHandler}>
                    <Text style={styles.textStyle}>{item.Name}</Text>
                </Pressable>

            </View>
        );


    };
    return (
        <View>
            <Text style={styles.programstyle}>Got Permission</Text>
            <FlatList
                data={GraderDetail}
                keyExtractor={(item, index) => index}
                renderItem={Item}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    picker: {
        width: 200,
        height: 50,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    textStyle: {
        backgroundColor: 'black',
        padding: 20,
        margin: 15,
        borderRadius: 20,
        width: '100%',
        fontSize: 20,
        color: 'white',
        fontSize: 30,
    },
    listStyle: {
        textAlign: 'center',
        color: 'white',
    },
    text2Style: {
        padding: 50,
        textAlign: 'right',
        color: 'green',
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

export default GraderS3;
