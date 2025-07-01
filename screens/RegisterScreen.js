import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";

export default function RegisterScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // TODO: Integrate register API
        console.log('Registering with:', email, password);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subtitle}>Create your account on Sherry</Text>

            <TextInput  
                placeholder="Email"
                placeholderTextColor={'#999'}
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput  
                placeholder="Password"
                placeholderTextColor={'#999'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={'#999'}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
            />

            <TouchableOpacity activeOpacity={0.5} onPress={handleRegister} style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginRedirectText}>Already have an account? Log in</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "teal",
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 60,
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
    registerButton: {
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 50,
        width: '80%',
        alignItems: 'center',
        marginVertical: 22,
    },
    registerButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    loginRedirectText: {
        color: '#aaa',
        marginTop: 20
    },
})