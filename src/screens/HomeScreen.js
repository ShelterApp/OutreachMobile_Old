import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';
import CampsScreen from './CampsScreen';
import ChecklistsScreen from './ChecklistsScreen';
import SuppliesScreen from './SuppliesScreen';
import VolunteersScreen from './VolunteersScreen';
import SuppliesIcon from '../assets/icons/Supplies'
import FormsIcon from '../assets/icons/Forms';
import HouseIcon from '../assets/icons/House';
import TentIcon from '../assets/icons/Tent';
import VolunteersIcon from '../assets/icons/Volunteers';


const Tab = createBottomTabNavigator();

const HomeScreen = () => {

    return (
  
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold'}}>
              Home Screen
          </Text>
    
        </View>
        
    );
  }

  export default HomeScreen;