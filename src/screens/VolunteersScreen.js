import React from 'react';
import { Text, View } from 'react-native';

export default function VolunteersScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Volunteers')}
              style={{ fontSize: 26, fontWeight: 'bold'}}>
            Volunteers Screen
        </Text>
      </View>
    );
  }