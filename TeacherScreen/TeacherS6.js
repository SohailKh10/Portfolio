import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Button } from 'react-native-paper';



const TeacherS6 = ({ navigation, route }) => {
    const [checkList, setCheckList] = useState([]);

    const [allTopics, setAllTopics] = useState([]);
    // const [allTopics, setAllTopics] = useState([
    //     {
    //         id: 1,
    //         Name: 'Topic 1',
    //         selected: false,
    //         SubTopicList: [
    //             {
    //                 topicName: 'sub Topic 1',
    //                 topicId: 'item1',
    //                 selected: true,
    //                 TopicFlag: '',
    //             },
    //             {
    //                 topicName: 'sub Topic 2',
    //                 topicId: 'item2',
    //                 selected: false,
    //                 TopicFlag: '',
    //             },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         Name: 'Topic 2',
    //         selected: true,
    //         SubTopicList: [
    //             {
    //                 topicName: 'sub Topic 21',
    //                 topicId: 'item11',
    //                 selected: false,
    //                 TopicFlag: '',
    //             },
    //             {
    //                 topicName: 'sub Topic 22',
    //                 topicId: 'item12',
    //                 selected: false,
    //                 TopicFlag: '',
    //             },
    //         ],
    //     },
    // ]);
    const navigateToScreen = () => {
        navigation.navigate('Covered Topics')
    }


    const handleCheckboxChange = id => {
        const updatedCheckList = checkList.map(item =>
            item.id === id ? { ...item, value: !item.value } : item,
        );
        console.log('setCheckList');
        setCheckList(updatedCheckList);
    };
    const onPressHandler = () => {
        navigation.navigate('', {
            item,

        });
    };

    // toggleChecked = index => {
    //     let prevSelected = GetTopics;
    //     prevSelected[index].Flag = !prevSelected[index].Flag;
    //     setGetTopics([...prevSelected]);
    //     console.log(GetTopics)
    // };
    // toggleCheckedInner = (index, i) => {
    //     let prevSelected = GetTopics;
    //     prevSelected[index].SubTopicList[i].TopicFlag = !prevSelected[index].SubTopicList[i].TopicFlag;
    //     setGetTopics([...prevSelected]);
    // };


    toggleChecked = index => {
        let prevSelected = allTopics;
        prevSelected[index].Flag = !prevSelected[index].Flag;
        prevSelected[index].SubTopicList.forEach(element => {
            element.TopicFlag = prevSelected[index].Flag;
        });
        setAllTopics([...prevSelected]);


        let topicId = prevSelected[index].Id;
        var uri =
            global.API + 'Teacher/OnTopicsCheck?Aid=' + global.Aid + '&topicid=' + global.Id;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log("successfull");

                // console.log(json);
                // setGetTopics(json);
                // setAllTopics(json);
            })
            .catch(error => console.error(error))
            .finally(() => { });




    };
    toggleCheckedInner = (index, i) => {
        let prevSelected = allTopics;
        prevSelected[index].SubTopicList[i].TopicFlag = !prevSelected[index].SubTopicList[i].TopicFlag;
        setAllTopics([...prevSelected]);


    };

    // toggleChecked = index => {
    //     let prevSelected = allTopics;
    //     prevSelected[index].selected = !prevSelected[index].selected;
    //     setAllTopics([...prevSelected]);
    // };
    // toggleCheckedInner = (index, i) => {
    //     let prevSelected = allTopics;
    //     prevSelected[index].SubTopicList[i].selected = !prevSelected[index].SubTopicList[i].selected;
    //     setAllTopics([...prevSelected]);
    // };
    function Item({ item }) {
        return (
            <View style={styles.listItem}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        );
    }
    const [GetTopics, setGetTopics] = useState([]);

    // useEffect(() => {
    //     loadData();
    // }, []);

    // {
    //     const loadData = () => {
    //         global.SectionId = 1;
    //         global.CourseId = 1;
    //         global.Semester = 7;
    //         global.category = 'C';
    //         global.ProgramId = 1;
    //         global.Weekno = 1;
    //         global.SessionId = 4;
    //     }
    // }

    const Topics = () => {
        let item = route.params.detail;

        var uri =
            global.API + 'Teacher/GetTopics?Aid=' + global.Aid + '&Weekno=' + global.Weekno;
        console.log(uri);
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                console.log("data");

                console.log(json);
                setGetTopics(json);
                setAllTopics(json);
            })
            .catch(error => console.error(error))
            .finally(() => { });
    };

    useState(() => {
        console.log(route.params.detail);
        Topics();
    }, []);


    //  BIIT-ZerAshan
    return (
        <View>

            <Text style={styles.programstyle}>Topics</Text>

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
                        key={index}
                        onPress={() => { }}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <View>
                            <View style={styles.mainView}>
                                <CheckBox
                                    tintColors={{ true: '#0C7240', false: '#0C7240' }}

                                    style={styles.checkbox}
                                    value={Boolean(item.Flag)}
                                    // onValueChange={() => console.log(Boolean(item.Flag))}
                                    onValueChange={() => toggleChecked(index)}
                                />
                                <Text style={styles.label}>{item.Name}</Text>
                            </View>
                            {/* renderIf(item.selected)( */}
                            <View style={{ marginLeft: 20 }} >
                                <FlatList
                                    // style={item.selected ? styles.show : styles.hide}
                                    ItemSeparatorComponent={
                                        Platform.OS !== 'android' &&
                                        (({ highlighted }) => (
                                            <View
                                                style={[style.separator, highlighted && { marginLeft: 0 }]}
                                            />
                                        ))
                                    }
                                    data={item.SubTopicList}
                                    renderItem={({ item: subItem, index: subIndex, separators }) => {
                                        // console.log('item.SubTopicList')
                                        // console.log(subItem.TopicFlag)
                                        return (
                                            <TouchableHighlight
                                                key={subIndex}
                                            // onPress={() => this._onPress(item)}
                                            // onShowUnderlay={separators.highlight}
                                            // onHideUnderlay={separators.unhighlight}
                                            >
                                                <View style={styles.mainView}>

                                                    <CheckBox
                                                        tintColors={{ true: '#0C7240', false: '#0C7240' }}
                                                        // style={styles.checkbox}
                                                        value={Boolean(subItem.TopicFlag)}
                                                        onValueChange={() => toggleCheckedInner(index, subIndex)}
                                                    />
                                                    <Text style={styles.label}>{subItem.topicName}</Text>


                                                </View>
                                            </TouchableHighlight>
                                        )
                                    }}
                                />
                            </View>
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
            <Button mode="contained" onPress={navigateToScreen}>
                covered topics
            </Button>
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
export default TeacherS6;
