import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Coupons = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Row1}>
                <View>
                    <Image source={require("../../../../Assets/Image/App/Buy/Coupons/couponIcon.png")} />
                </View>
                <View>
                    <Text style={styles.Coupons}>
                        Apply Coupons
                    </Text>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.ButtonText}>
                        Select
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical: 20
    },

    Row1:{
        flexDirection:'row',
        columnGap:10
    },

    Coupons:{
        fontSize: 16,
        color:'black',
        fontWeight:'600'
    },

    ButtonText:{
        fontSize: 15,
        color:'#F83758',
        fontWeight:'600',

    }
})

export default Coupons