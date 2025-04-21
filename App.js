import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';
import Project1 from './Lab1/Project1'
import Project2 from './Lab1/Project2';
import Project3 from './Lab1/Project3';
import Project4 from './Lab1/Project4';
import Project5 from './Lab1/Project5';
import Project6 from './Lab1/Project6';
import Project7 from './Lab1/Project7';
import Project8 from './Lab1/Project8';

const Tab = createBottomTabNavigator();
//MSSV 2124802010728 - Võ Ngân Khanh

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Project1" component={Project1} />
        <Tab.Screen name="Project2" component={Project2} />
        <Tab.Screen name="Project3" component={Project3} />
        <Tab.Screen name="Project4" component={Project4} />
        <Tab.Screen name="Project5" component={Project5} />
        <Tab.Screen name="Project6" component={Project6} />
        <Tab.Screen name="Project7" component={Project7} />
        <Tab.Screen name="Project8" component={Project8} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
