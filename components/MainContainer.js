import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, TextBase, Dimensions } from 'react-native';

//Screens
import HomeScreen from './screens/HomeScreen';
import SuppliesScreen from './screens/SuppliesScreen/';
import ChecklistsScreen from './screens/ChecklistsScreen';
import CampsScreen from './screens/CampsScreen';
import VolunteersScreen from './screens/VolunteersScreen';

//Icons
import SuppliesIcon from '../assets/icons/Supplies.svg';
import FormsIcon from '../assets/icons/Forms.svg';
import HouseIcon from '../assets/icons/House.svg';
import CampsIcon from '../assets/icons/Camps.svg';
import VolunteersIcon from '../assets/icons/Volunteers.svg';


const fullScreenWidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();

function SuppliesStackScreen() {
    return (
    <Stack.Navigator>
        <Stack.Screen name='Supplies' component={SuppliesScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}
function ChecklistsStackScreen() {
    return (
    <Stack.Navigator>
        <Stack.Screen name='Checklists' component={ChecklistsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}
function HomeStackScreen() {
    return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}
function CampsStackScreen() {
    return (
    <Stack.Navigator>
        <Stack.Screen name='Camps' component={CampsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}
function VolunteersStackScreen() {
    return (
    <Stack.Navigator>
        <Stack.Screen name='Volunteers' component={VolunteersScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size, padding}) => {
                    let routeName = route.name;

                    if(routeName === 'Supplies'){
                        return focused ? <SuppliesIcon style={{filter: 'invert(14%) sepia(92%) saturate(4998%) hue-rotate(283deg) brightness(67%) contrast(111%)'}}/> : <SuppliesIcon />;
                    }else if(routeName === 'Checklists'){
                        return <FormsIcon />;
                    }else if(routeName === 'Home'){
                        return <HouseIcon />;
                    }else if(routeName === 'Camps'){
                        return <CampsIcon />;
                    }else if(routeName === 'Volunteers'){
                        return <VolunteersIcon />;
                    }
                },
                tabBarActiveTintColor: "#454545",
                tabBarActiveBackgroundColor: "lightgrey",
                tabBarInactiveTintColor: "#454545",
                tabBarLabelStyle: {
                    "fontSize": 14
                },
                tabBarStyle: [
                {
                    "display": "flex",
                    "paddingTop": "1%",
                    "paddingBottom": "5%"
                },
                null
                ]
            })}
            >
                <Tab.Screen name='Supplies' component={SuppliesStackScreen}/>
                <Tab.Screen name='Checklists' component={ChecklistsStackScreen}/>
                <Tab.Screen name='Home' component={HomeStackScreen}/>
                <Tab.Screen name='Camps' component={CampsStackScreen}/>
                <Tab.Screen name='Volunteers' component={VolunteersStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
