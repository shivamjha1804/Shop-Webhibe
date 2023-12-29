import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppButton, Container} from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
// import { useDispatch } from 'react-redux'
// import { logout } from '../../Redux/reducer/User'

const Home = () => {
    // const dispatch = useDispatch(); 
    return (
        <ImageBackground style={styles.container} source={require('../../Assets/Image/App/Index/BackGround.png')}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    NavigationService.navigate("ButtomNavigator")
                }}>
                    <Text style={styles.buttonText}>
                        Get Started
                    </Text>
                </TouchableOpacity>

            </View>
            <View>
                <Text style={{marginTop: 10, color:'#F2F2F2'}}>
                    Find it here, buy it now!
                </Text>
            </View>
            <View>
                <Text style={styles.TextFirst}>
                    You want {'\n'} Authentic, here {'\n'} you go!

                </Text>
            </View>

            {/* <TouchableOpacity
                onPress={() => dispatch(logout())}
            >

            </TouchableOpacity> */}
        </ImageBackground>
    )
    
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },

    TextFirst: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        fontWeight:'600'
    },

    button: {
        backgroundColor: '#F83758',
        marginHorizontal: 15,
        padding: 95,
        paddingVertical: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 45
    },

    buttonText: {
        fontWeight: '800',
        fontSize: 18,
        color: 'white'
    },
})