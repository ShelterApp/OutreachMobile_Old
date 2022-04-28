import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from '../components/CustomInput';

const SignInScreen = () => {
    return (

        <View style={styles.root}>
            <CustomInput />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        maxHeight: 200, 
    },
});

export default SignInScreen;