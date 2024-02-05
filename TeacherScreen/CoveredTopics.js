import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

const CoveredTopics = ({ navigation }) => {
    const [checkList, setCheckList] = useState([]);





    const [allTopics, setAllTopics] = useState([
        {
            id: 1,
            Name: 'Topic 1',
            selected: true,
            SubTopicList: [
                {
                    topicName: 'sub Topic 1',
                    topicId: 'item1',
                    selected: true,
                    TopicFlag: '',
                },
                {
                    topicName: 'sub Topic 2',
                    topicId: 'item2',
                    selected: false,
                    TopicFlag: '',
                },
            ],
        },
        {
            id: 2,
            Name: 'Topic 2',
            selected: true,
            SubTopicList: [
                {
                    topicName: 'sub Topic 21',
                    topicId: 'item11',
                    selected: false,
                    TopicFlag: '',
                },
                {
                    topicName: 'sub Topic 22',
                    topicId: 'item12',
                    selected: false,
                    TopicFlag: '',
                },
            ],
        },
    ]);
    const navigateToScreen = () => {
        navigation.navigate('')
    }
    const handleCheckboxChange = id => {
        const updatedCheckList = checkList.map(item =>
            item.id === id ? { ...item, value: !item.value } : item,
        );
        setCheckList(updatedCheckList);
    };
    const onPressHandler = () => {
        navigation.navigate('', {
            item,
        });

    };

    toggleChecked = itemId => {
        let newArray = [...this.state.array];
        newArray[2].selected = true;
        setAllTopics(newArray);
        print(allTopics);

    };


    function Item({ item }) {
        return (





            <View style={styles.listItem}>
                <Text style={styles.title}>{item.name}</Text>
            </View>

        );


    }
    const [GetTopics, setGetTopics] = useState([]);

    const CoveredTopics = () => {
        // let item = route.params.detail;

        var uri =
            global.API + 'Teacher/GetAllCoveredTopics?Aid=' + global.Aid;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setAllTopics(json);
            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        //  console.log(route.params.detail);
        CoveredTopics();
    }, [allTopics]);




    return (
        <View>
            <View>

            </View>


            <Text style={styles.programstyle}>Covered Topics</Text>

            <FlatList
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                        <View style={[style.separator, highlighted && { marginLeft: 0 }]} />
                    ))



                }
                data={allTopics}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                        key={item.key}
                        onPress={() => { }}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View>
                            <View style={styles.mainView}>
                                {/*<CheckBox
                  style={styles.checkbox}
                  value={item.selected}
                  onPress={() => toggleChecked(item.id)}
        />*/}
                                <Text style={styles.label}>{item.Name}</Text>
                            </View>
                            {/* renderIf(item.selected)( */}
                            <FlatList
                                style={styles.show}
                                // item.Flag == "1" ? styles.show : styles.hide}
                                ItemSeparatorComponent={
                                    Platform.OS !== 'android' &&
                                    (({ highlighted }) => (
                                        <View
                                            style={[style.separator, highlighted && { marginLeft: 0 }]}
                                        />
                                    ))
                                }
                                data={item.SubTopicList}
                                renderItem={({ item, index, separators }) => (
                                    <TouchableHighlight
                                        key={item.topicId}
                                        onPress={() => this._onPress(item)}
                                        onShowUnderlay={separators.highlight}
                                        onHideUnderlay={separators.unhighlight}>
                                        <View style={styles.mainView}>
                                            {/*<CheckBox
                        style={styles.checkbox}
                        value={item.selected}
                        onValueChange={() => {}}
                />*/}
                                            <Text style={styles.label}>{item.Name}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )}
                            />
                            {/* ) */}
                        </View>

                    </TouchableHighlight>
                )}
            />
            {/* {checkList.map(item => (
        <View key={item.id}>
          <CheckBox
            value={item.value}
            onValueChange={() => handleCheckboxChange(item.id)}
          />
          <Text>{item.label}</Text>
        </View>
        
      ))} */}
            {/*<Button mode="contained" onPress={navigateToScreen}>
                Common
            </Button>*/}

        </View>
    );
};

const styles = StyleSheet.create({
    show: { marginLeft: 20 },
    hide: { display: 'none', marginLeft: 20 },
    mainView: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    InnerView: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 40,
    },
    checkbox: {},
    label: {
        margin: 8,
    },
    programstyle: {
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
});
export default CoveredTopics;
