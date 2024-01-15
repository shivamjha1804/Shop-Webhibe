import React from 'react'
import { Image, Text, ScrollView, StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import NavigationService from '../../../Services/Navigation'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/reducer/User';


const Header = () => {
    const dispatch = useDispatch();
    const { profilePictureImage } = useSelector(state => state.Profile)
    return (
        <View style={{ backgroundColor: 'white' }}>
            <StatusBar backgroundColor={'white'} />
            <View style={styles.InnerContainer}>
                <TouchableOpacity style={styles.Row1} onPress={() => {
                    dispatch(logout())
                }}>
                    <Image style={styles.Hamburger} source={require('../../../Assets/Image/CommonComponent/Header/menu.png')} />
                </TouchableOpacity>
                <View style={styles.Row2}>
                    <Image source={require('../../../Assets/Image/CommonComponent/Header/logo.png')} />
                    <Text style={styles.LogoText}>
                        Stylish
                    </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    NavigationService.navigate("Profile")
                }}>
                    <View style={styles.Row3}>
                        <Image source={
                            profilePictureImage == []
                                ? require("../../../Assets/Image/App/Profile/ProfilePicture/ProfilePicture.png")
                                : { uri: profilePictureImage }}

                            style={{
                                backgroundColor: "red",
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: 'blue'
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    InnerContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },

    Hamburger: {
        height: 30,
        width: 30,
    },

    Row2: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    LogoText: {
        color: '#4392F9',
        marginLeft: 5,
        fontSize: 20,
        fontWeight: '500'
    },

    Row3: {
        borderRadius: 50,
    }
})

export default Header