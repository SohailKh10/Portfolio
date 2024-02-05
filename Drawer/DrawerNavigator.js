import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="HoD">
            <Drawer.Screen name="HoD" component={HoDScreen} />
            <Drawer.Screen name="AI" component={HoDs1} />
            <Drawer.Screen name="Sem" component={HoDs2} />
            <Drawer.Screen name="rdo" component={HoDs3} />
            <Drawer.Screen name="Teacher" component={TeacherScreen} />
            <Drawer.Screen name="Sections" component={TeacherS1} />
            <Drawer.Screen name="Folders" component={TeacherS2} />
            <Drawer.Screen name="Folder" component={TeacherS3} />
            <Drawer.Screen name="Topic" component={TeacherS4} />
            <Drawer.Screen name="Week" component={TeacherS5} />
            <Drawer.Screen name="Topics" component={TeacherS6} />
            <Drawer.Screen name="Covered Topics" component={TeacherS7} />
            <Drawer.Screen name="Edit" component={TeacherS8} />
            <Drawer.Screen name="covered" component={TeacherS9} />
            <Drawer.Screen name="comparison" component={TeacherS10} />
            <Drawer.Screen name="Grader" component={GraderScreen} />
            <Drawer.Screen name="GraderS1" component={GraderS1} />
            <Drawer.Screen name="Admin" component={AdminScreen} />
            <Drawer.Screen name="AdminS1" component={AdminS1} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
