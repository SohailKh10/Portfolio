import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text } from 'react-native-paper';

const EvisionTask = ({ navigation, route }) => {
    const [selectedValue, setSelectedValue] = useState('option1');
    const [value, setvalue] = useState('option2');
    const [CityName, setCityName] = useState('option3');
    const [Plant, setPlant] = useState('option4');
    const [price, setprice] = useState('');
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    return (
        <View>
            <Text style={styles.programstyle1}>LPG-EX PLANT RATES</Text>

            <Text style={styles.programstyle}>Region</Text>

            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >

                <Picker.Item label="North" value="option1" />
                <Picker.Item label="South" value="option2" />
                <Picker.Item label="West" value="option3" />
            </Picker>

            <Text style={styles.programstyle}>company</Text>

            <Picker
                value={value}
                onValueChange={(itemValue, itemIndex) => setvalue(itemValue)}
            >

                <Picker.Item label="EVISION" value="option1" />
                <Picker.Item label="DEVOPS" value="option2" />
                <Picker.Item label="CORA" value="option3" />
            </Picker>
            <Text style={styles.programstyle}>CityName</Text>

            <Picker
                CityName={CityName}
                onValueChange={(itemValue, itemIndex) => setCityName(itemValue)}
            >

                <Picker.Item label="ISB" value="option1" />
                <Picker.Item label="RWP" value="option2" />
                <Picker.Item label="RYK" value="option3" />
            </Picker>
            <Text style={styles.programstyle}>Plant</Text>

            <Picker
                Plant={Plant}
                onValueChange={(itemValue, itemIndex) => setPlant(itemValue)}
            >

                <Picker.Item label="TREE" value="option1" />
                <Picker.Item label="ROSE" value="option2" />
                <Picker.Item label="CHAMBELI" value="option3" />
            </Picker>
            <TextInput
                style={styles.input}
                placeholder="price"
                secureTextEntry={true}
                onChangeText={text => setprice(text)}
                value={price}
            />
            <Text style={styles.programstyle}>Date</Text>

            <Text>{formattedDate}</Text>
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
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        color: 'black'
    },

    textStyle: {
        backgroundColor: 'black',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: '100%',
        fontSize: 20,
        color: 'white',
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
        fontSize: 25,
        color: 'blue',
        textAlign: 'left',
        marginTop: 10,
    },
    programstyle1: {
        fontSize: 35,
        color: 'blue',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: 'grey'
    },
});

export default EvisionTask;
