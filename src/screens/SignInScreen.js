import React, {useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn('Sign in');
    };

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password?');
    };

    const onSignInFacebook = () => {
        console.warn('Sign in with Facebook');
    };
    const onSignInGoogle = () => {
        console.warn('Sign in with Google');
    };
    const onSignInApple = () => {
        console.warn('Sign in with Apple');
    };
    const onSignUpPressed = () => {
        console.warn('Sign up!');
    };
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <CustomInput 
             placeholder="Username"
             value={username}
             setValue={setUsername}/>
            <CustomInput 
             placeholder="Password"
             value={password}
             setValue={setPassword}
             secureTextEntry={true}/>
            <CustomButton
             text="Sign In"
             onPress={onSignInPressed}/>
            <CustomButton 
             text="Forgot Password?"
             onPress={onForgotPasswordPressed} 
             type="TERTIARY"/>
            <CustomButton
             text="Sign In with Facebook"
             onPress={onSignInFacebook}
             bgColor="#E7EAF4"
             fgColor="#4765A9"/>
            <CustomButton
             text="Sign In with Google"
             onPress={onSignInGoogle}
             bgColor="#FAE9EA"
             fgColor="#DD4D44"/>
            <CustomButton
             text="Sign In with Apple"
             onPress={onSignInApple}
             bgColor="#e3e3e3"
             fgColor="#363636"/>
            <CustomButton 
             text="Don't have an account? Create one!"
             onPress={onSignUpPressed} 
             type="TERTIARY"/>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
});

export default SignInScreen;