import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import SuppliesScreen from '../screens/SuppliesScreen';
import VolunteersScreen from '../screens/VolunteersScreen';
import CampsScreen from '../screens/CampsScreen';
import ChecklistsScreen from '../screens/ChecklistsScreen';
import MainContainer from '../screens/MainContainer';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MainContainer" component={MainContainer} />
                <Stack.Screen name="SuppliesScreen" component={SuppliesScreen} />
                <Stack.Screen name="VolunteersScreen" component={VolunteersScreen} />
                <Stack.Screen name="CampsScreen" component={CampsScreen} />
                <Stack.Screen name="ChecklistsScreen" component={ChecklistsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;