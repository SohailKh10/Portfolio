import { StyleSheet, FlatList, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function HoDScreen({ navigation }) {
  const names = [
    {
      index: '1',
      names: 'AI',
    },
    {
      index: '2',
      names: 'CS',
    },
    {
      index: '3',
      names: 'IT',
    },
    {
      index: '4',
      names: 'SE',
    },
  ];
  const [Programs, setPrograms] = useState([]);

  const GetOfferedPrograms = () => {
    var uri =
      global.API + 'HODAndDirector/GetOfferedPrograms'
    console.log(uri);
    fetch(uri)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setPrograms(json);

      })
      .catch(error => console.error(error))
      .finally(() => { });
  };

  useState(() => {
    GetOfferedPrograms();
  });

  const Item = ({ item }) => {
    const onPressHandler = () => {
      global.ProgramId = item.Id;
      navigation.navigate('AI', {
        item,
      });
    };
    return (
      <Pressable style={styles.listStyle} onPress={onPressHandler}>
        <Text style={styles.textStyle}>{item.Name}</Text>
      </Pressable>

    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.programstyle}>Programs</Text>
      <FlatList
        data={Programs}
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

//export default HoDScreen;
