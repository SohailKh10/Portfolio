import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
    Tab
} from 'react-native';

const HoDFirst = ({ navigation }) => {
    const names = [
        {
            index: '14',
            names: 'Assign Main Folder',
        },
        {
            index: '16',
            names: 'View by Teacher',
        },
        {
            index: '17',
            names: 'View by Course',
        },
        {
            index: '17',
            names: 'Permission',
        },
        {
            index: '18',
            names: 'All Teachers',
        },
        // {
        //     index: '18',
        //     names: 'Completed Folder',
        // },
    ];
    const Item = ({ item }) => {
        const onPressHandler = () => {
            global.subfolderchecklistid = item.Id;

            // navigation.navigate('HoD', {
            //     item,
            // });
            if (item.names == 'Assign Main Folder') {
                navigation.navigate('HoD', {
                    item,
                });
            }
            else if (item.names == 'View by Teacher') {
                navigation.navigate('teacher', {
                    item,
                });
            }
            else if (item.names == 'View by Course') {
                navigation.navigate('course', {
                    item,
                });
            }
            else if (item.names == 'Permission') {
                navigation.navigate('files', {
                    item,
                });
            }
            else if (item.names == 'Completed Folder') {
                navigation.navigate('Completed folder', {
                    item,
                });
            }
            else {
                navigation.navigate('All Teachers', {
                    item,
                });
            }

        };


        return (
            <Pressable style={styles.listStyle} onPress={onPressHandler}>
                <Text style={styles.textStyle}>{item.names}</Text>
            </Pressable>
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>HoD Screen</Text>
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
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
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

export default HoDFirst;
