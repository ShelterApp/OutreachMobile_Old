import React, {useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('Sign in');
        navigation.navigate('MainContainer');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPressed = () => {
        navigation.navigate('SignUp')
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
            <SocialSignInButtons />
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