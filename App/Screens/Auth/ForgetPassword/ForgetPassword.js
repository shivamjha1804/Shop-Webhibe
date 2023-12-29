import React from 'react'
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

const ForgetPassword = () => {
    return (
        <View>
            <Text style={styles.Title}>
                Forgot password?
            </Text>

            <View style={styles.Input}>
                <View>
                    <Image style={styles.Image} source={require('../../../Assets/Image/Auth/ForgetPassword/letter.png')} />
                </View>
                <TextInput placeholder=' Enter your email address or email' placeholderTextColor={'#676767'} />
            </View>

            <Text style={styles.Text}>
                <Text style={{ color: '#FF4B26' }}>* </Text>We will send you a message to set or reset your new password
            </Text>

            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 60,
        fontWeight: '900',
        marginLeft: 10,
        color: 'black',
        marginTop: 30,
        marginBottom: 50
    },

    Input: {
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderColor: 'black',
        borderWidth: 0.7,
        borderRadius: 10,
        backgroundColor: '#F3F3F3',
        color: 'black',
        marginVertical: 10,
        alignItems: 'center',
        marginBottom: 30
    },

    Image: {
        height: 20,
        width: 20,
    },

    Text: {
        marginHorizontal: 18,
        maxWidth: "80%",
        color: '#676767',
    },

    button: {
        backgroundColor: '#F83758',
        marginHorizontal: 15,
        padding: 15,
        paddingVertical: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },

    buttonText: {
        fontWeight: '800',
        fontSize: 18,
        color: 'white'
    },
})

export default ForgetPassword