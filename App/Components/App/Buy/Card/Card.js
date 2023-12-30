import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Card = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Row1}>
                <Image source={require("../../../../Assets/Image/App/Buy/Card/shoppingBagPicture.png")}/>
            </View>
            <View style={styles.Row2}>
                <View>
                    <Text style={styles.Title}>
                        Women’s Casual Wear
                    </Text>
                </View>
                <View>
                    <Text style={styles.Description}>
                    Checked Single-Breasted Blazer
                    </Text>
                </View>
                <View style={{flexDirection:'row' ,columnGap: 15, paddingHorizontal:10}}>
                    <View style={styles.Box}>
                        <View>
                            <Text style={styles.size} >
                            Size 42
                            </Text>
                        </View>
                        <View>
                            <Image source={require("../../../../Assets/Image/App/Buy/Card/downArrowIcon.png")}/>
                        </View>
                    </View>
                    <View style={styles.Box}>
                        <View >
                            <Text style={{color:'black'}}>
                            Qty 1
                            </Text>
                        </View>
                        <View>
                            <Image source={require("../../../../Assets/Image/App/Buy/Card/downArrowIcon.png")}/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', columnGap: 7}}>
                    <View>
                        <Text style={{color:'black'}}>
                        Delivery by 
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.DeliveryDate}>
                        10 May 2XXX
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        paddingVertical: 40,
        flexDirection:'row',
        columnGap: 15
    },

    Row2:{
        paddingVertical: 10,
        rowGap:5
    },

    Title:{
        color: 'black',
        fontSize: 20,
        fontWeight:'600'
    },

    Description:{
        color: 'black',
        fontSize: 15,
        fontWeight:'400',
        width: 170,
    },

    size:{
        color:'black',
        fontSize:15,
    },

    Box:{
        flexDirection:'row',
        columnGap:5,
    },

    DeliveryDate:{
        fontSize: 17,
        fontWeight:'600',
        color:'black'
    }
})

export default Card