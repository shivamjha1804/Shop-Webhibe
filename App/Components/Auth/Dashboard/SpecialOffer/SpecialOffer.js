import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SpecialOffer = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Row1}>
                <Image style={{height: 70, width: 80}} source={require("../../../../Assets/Image/App/Dashboard/SpecialOffer/offer.png")} />
            </View>
            <View style={styles.Row2}>
                <View style={{flexDirection:'row', gap: 10, alignItems:'center', paddingBottom: 10}}>
                    <View>
                        <Text style={styles.SpecialOffer}>
                            Special Offers
                        </Text>
                    </View>
                    <View>
                        <Text style={{backgroundColor:'white', padding:5, borderRadius: 16, shadowColor:'black', elevation:1}}>
                            😱
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.Content}>
                        We make sure you get the offer you need at best prices
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingVertical: 20,
    },

    Row1:{
        alignItems:'center',
        justifyContent:'center',

    },

    Row2:{
        width: 190,
        marginLeft: 40
    },

    SpecialOffer:{
        fontSize: 20,
        color:'black',
        fontWeight:'500'
    },

    Content:{
        color:'black'
    }
});

export default SpecialOffer