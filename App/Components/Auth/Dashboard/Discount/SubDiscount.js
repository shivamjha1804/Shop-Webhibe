import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SubDiscount = (props) => {
    return (
        <ImageBackground style={styles.Container} imageStyle={{ borderRadius: 10 }} source={props.Image}>
            <View style={styles.SubContainer}>
                <View>
                    <Text style={styles.Text1}>
                        {props.Text1}
                    </Text>
                </View>
                <View>
                    <Text style={{color:'white'}}>
                        {props.Text2}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={{color:'white'}}>
                            Shop Now
                        </Text>
                        <Image source={require('../../../../Assets/Image/App/Dashboard/Discount/arrowIcon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: 189,
        width: 366,
        justifyContent: 'center',
    },

    SubContainer:{
        marginLeft: 15
    },

    Text1: {
        fontSize: 23,
        fontWeight: '700',
        marginBottom: 5,
        color: 'white'
    },

    Button:{
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 5,
        borderColor:'white',
        padding: 5,
        alignItems:'center',
        marginTop: 15,
        justifyContent: 'space-evenly',
        width: "30%"
    }
})

export default SubDiscount