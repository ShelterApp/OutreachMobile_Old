import React from 'react';
import { Text, View } from 'react-native';

export default function ChecklistsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Checklists')}
              style={{ fontSize: 26, fontWeight: 'bold'}}>
            Checklists Screen
        </Text>
      </View>
    );
  }