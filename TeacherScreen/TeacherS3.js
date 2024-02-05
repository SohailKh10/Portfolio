import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
} from 'react-native';

const TeacherS3 = ({ navigation }) => {
    const names = [
        {
            index: '14',
            names: ' Main Folder',
        },
        {
            index: '16',
            names: 'IT 6A',
        },
        {
            index: '17',
            names: 'IT 6B',
        },
    ];
    const Item = ({ item }) => {
        const onPressHandler = () => {
            navigation.navigate('Topic', {
                item,
            });
        };
        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.names}</Text>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>PDC-IT 6</Text>
            <FlatList
                data={names}
                keyExtractor={(item, index) => index}
                renderItem={Item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        backgroundColor: 'grey',
        padding: 30,
        margin: 20,
        alignItems: 'center',
        borderRadius: 20,
        width: '80%',
        fontSize: 35,
        color: 'black',
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

export default TeacherS3;
