import React from 'react';
import { Text, View } from 'react-native';

export default function SuppliesScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Supplies')}
              style={{ fontSize: 26, fontWeight: 'bold'}}>
            Supplies Screen
        </Text>
      </View>
    );
  }