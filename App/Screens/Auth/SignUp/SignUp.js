import React, { useState } from 'react'
import { StatusBar, TouchableOpacity, StyleSheet, ScrollView, View, Text, TextInput, Image, Alert } from 'react-native'
import NavigationService from '../../../Services/Navigation'
import { useDispatch } from 'react-redux'
import { Icon } from 'react-native-basic-elements'
import { signUp } from '../../../Redux/Thunk/Auth'

const SignUp = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [contact, setContact] = useState(0);
    const [pin, setPin] = useState(0);

    // Redux Login Function
    const signUpClick = () => {

        if (password !== confirmPassword) {
            alert("Invalid Password")
            return;
        }

        let signUpData = {
            name:name,
            email: email,
            password: password,
            contact: contact,
            postalcode: pin,
            userType: "User"
        }

        dispatch(signUp(signUpData))

    };


    return (
        <ScrollView>
            <View>
                <StatusBar backgroundColor={'white'} translucent barStyle={'dark-content'} />
                <Text style={styles.Title}>
                    Create an account
                </Text>

                <View style={styles.SignUp}>
                    <View style={styles.Input}>
                        <View>
                            <Image style={styles.Image} source={require('../../../Assets/Image/Auth/SignUp/user.png')} />
                        </View>
                        <TextInput
                            placeholder='Enter your name'
                            placeholderTextColor={'#676767'}
                            value={name}
                            style={{
                                color:'black'
                            }}
                            onChangeText={(Text) => {
                                setName(Text);
                            }}
                        />
                    </View>

                    <View style={styles.Input}>
                        <View>
                           <Icon
                                name='email'
                                type='ZocialIcon'
                                size={25}
                           />
                        </View>
                        <TextInput
                            placeholder='username and email'
                            placeholderTextColor={'#676767'}
                            value={email}
                            style={{
                                color:'black'
                            }}
                            onChangeText={(Text) => {
                                setEmail(Text);
                            }}
                        />
                    </View>

                    <View style={{ ...styles.Input, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={styles.Image} source={require('../../../Assets/Image/Auth/SignUp/padlock.png')} />
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor={'#676767'}
                                value={password}
                                style={{
                                    color:'black'
                                }}
                                onChangeText={(Text) => {
                                    setPassword(Text);
                                }}
                            />
                        </View>
                        <View style={{ marginLeft: 25, marginRight: 1, }}>
                            <Image style={styles.Image} source={require('../../../Assets/Image/Auth/SignUp/witness.png')} />
                        </View>
                    </View>

                    <View style={{ ...styles.Input, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={styles.Image} source={require('../../../Assets/Image/Auth/SignUp/padlock.png')} />
                            <TextInput
                                placeholder='Confirm Password'
                                placeholderTextColor={'#676767'}
                                value={confirmPassword}
                                style={{
                                    color:'black'
                                }}
                                onChangeText={(Text) => {
                                    setConfirmPassword(Text);
                                }}
                            />
                        </View>
                        <View style={{ marginLeft: 25, marginRight: 1, }}>
                            <Image style={styles.Image} source={require('../../../Assets/Image/Auth/SignUp/witness.png')} />
                        </View>
                    </View>

                    <View style={{ ...styles.Input, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name='call'
                                type='Ionicons'
                                size={25}
                            />
                            <TextInput
                                placeholder='Contact'
                                placeholderTextColor={'#676767'}
                                value={contact}
                                style={{
                                    color:'black'
                                }}
                                onChangeText={(Text) => {
                                    setContact(Text);
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ ...styles.Input, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                name='location-pin'
                                type='Entypo'
                                size={25}
                            />
                            <TextInput
                                placeholder='Pin Code'
                                placeholderTextColor={'#676767'}
                                value={pin}
                                style={{
                                    color:'black'
                                }}
                                onChangeText={(Text) => {
                                    setPin(Text);
                                }}
                            />
                        </View>
                    </View>

                    <Text style={styles.Content}>
                        By clicking the <Text style={{ color: '#FF4B26' }}> Register </Text> button, you agree to the public offer
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            signUpClick();
                        }}
                    >
                        <Text style={styles.buttonText}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttomStyle}>
                    <Text style={{ color: '#575757' }}>
                        -OR Continue With-
                    </Text>
                    <View style={styles.Logo}>
                        <View style={styles.Circle}>
                            <Image style={styles.Image} source={require('../../../Assets/Image/Auth/SignUp/google.png')} />
                        </View>

                        <View style={styles.Circle}>
                            <Image style={styles.Image} source={require('../../../Assets/Image/Auth/SignUp/apple.png')} />
                        </View>

                        <View style={styles.Circle}>
                            <Image style={styles.Image} source={require('../../../Assets/Image/Auth/SignUp/facebook.png')} />
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            columnGap: 5
                        }}
                    >


                        <Text style={{ color: '#575757' }}>
                            I Already have An Account

                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                NavigationService.navigate("SignIn")
                            }}
                        >
                            <Text style={styles.signUp} >
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 60,
        fontWeight: '900',
        marginLeft: 10,
        color: 'black',
        marginTop: 20
    },

    Input: {
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderColor: 'black',
        borderWidth: 0.7,
        borderRadius: 10,
        backgroundColor: '#F3F3F3',
        marginVertical: 10,
        alignItems: 'center'
    },

    Image: {
        height: 20,
        width: 20,
    },

    SignUp: {
        marginVertical: 35,
    },

    Content: {
        marginLeft: 30,
        marginRight: 85,
        marginBottom: 50,
        color: '#676767'
    },

    button: {
        backgroundColor: '#F83758',
        marginHorizontal: 15,
        padding: 15,
        paddingVertical: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: '800',
        fontSize: 18,
        color: 'white'
    },

    buttomStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },

    Logo: {
        flexDirection: 'row',
        marginVertical: 20,
    },

    Circle: {
        marginHorizontal: 5,
        padding: 15,
        borderRadius: 50,
        backgroundColor: '#FCF3F6',
        borderColor: '#F83758',
        borderWidth: 1
    },

    Image: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },

    signUp: {
        color: '#F83758',

    }
})

export default SignUp