import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() { // navigation is not available unless the screen is passed the navigation prop by React Navigation.
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // TODO: connect to backend login api
        console.log('Logging in with:', email, password);
        navigation.navigate('Home');
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sherry</Text>
            <Text style={styles.subtitle}>Track your expenses effortlessly!</Text>

            <TextInput  
                placeholder="Email"
                placeholderTextColor={'#999'}
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput  //review
                placeholder="Password"
                placeholderTextColor={'#999'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry             //hides the input text
                style={styles.input}
            />

            <TouchableOpacity activeOpacity={0.5} style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style = {styles.orText}>or</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.socialContainer}>
                <TouchableOpacity activeOpacity={0.5} style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.socialButton}>
                    <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signupText}>New here? Sign up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // fills the screen
        backgroundColor: "teal",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title:{
        fontSize: 70,
        color: 'white',
        marginBottom: 10,
        fontFamily: 'ManufacturingConsent',
    },
    subtitle: {
        color: '#aaa',  
        marginBottom: 20,
    },
    input: {
        width: '80%',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 50,
        color: 'black',
        marginVertical: 7,
    },
    loginButton: {
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 50,
        width: '80%',
        alignItems: 'center',
        marginVertical: 20,
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    orContainer: {
        width: '89%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#aaa',
        margin: 5,
    },
    orText: {
        fontSize: 18,
        color: '#aaa',
        marginVertical: 20,
        paddingHorizontal: 5,
    },
    socialContainer:{
        flexDirection: 'row',
        gap: 10,
    },
    socialButton:{
        backgroundColor: 'grey',
        color: 'white',
        width: '40%',
        padding: 15,
        borderRadius: 50,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialButtonText:{
        color: 'white',
    },
    signupText:{
        color: '#aaa',
        marginTop: 20    
    }
})