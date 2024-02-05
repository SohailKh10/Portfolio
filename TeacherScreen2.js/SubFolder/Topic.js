import CheckBox from '@react-native-community/checkbox';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Button,
} from 'react-native';



const Topic = ({ navigation }) => {
    const names = [
        {
            index: '14',
            names: ' Sub Folder',
        },

    ];
    const Item = ({ item }) => {
        const onPressHandler = () => {
            //subfolderId

            // global.Aid = item.AllocationId;
            // global.checklistitemid = item.CheckId;
            navigation.navigate('SubFolderfiles', {
                item,

            });

        };
        console.log(global.Aid);
        console.log(item.AllocationId);
        const onPressHandler5 = (item) => {
            navigation.navigate('CTopics', {
                item,
            });
        };
        const onPressHandler4 = (item) => {

            navigation.navigate('Week', {
                item,
            });
        };

        return (
            <View>
                <Pressable style={styles.listStyle} onPress={onPressHandler}>
                    <Text style={styles.textStyle}>{item.names}</Text>
                </Pressable>
                <Pressable style={styles.listStyle} onPress={onPressHandler4}>
                    <Text style={styles.textStyle}>{`Topics`}</Text>
                </Pressable>
                {/* <Pressable style={styles.listStyle} onPress={onPressHandler5}>
                    <Text style={styles.textStyle}>{`Covered Topics`}</Text>
                </Pressable> */}

            </View>




        );

    };
    return (
        <View style={styles.container}>
            <Text style={styles.programstyle}>AI2A</Text>
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

export default Topic;
