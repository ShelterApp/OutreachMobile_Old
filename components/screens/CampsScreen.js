import React from 'react';
import { Text, View } from 'react-native';

export default function CampsScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Camps')}
              style={{ fontSize: 26, fontWeight: 'bold'}}>
            Camps Screen
        </Text>
      </View>
    );
  }