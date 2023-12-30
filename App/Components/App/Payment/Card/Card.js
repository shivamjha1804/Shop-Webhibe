import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Row1}>
                <Text style={styles.Order}>
                    Order
                </Text>
                <Text style={styles.Order}>
                    {'\u20B9'} 7,000
                </Text>
            </View>
            <View style={styles.Row2}>
                <Text style={styles.Shopping}>
                    Shipping
                </Text>
                <Text style={styles.Shopping}>
                    {'\u20B9'} 30
                </Text>
            </View>
            <View style={styles.Row3}>
                <Text style={styles.Total}>
                    Total
                </Text>
                <Text style={styles.Total}>
                    {'\u20B9'} 7,030
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        paddingTop: 45,
        rowGap: 15
    },

    Row1:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    Order:{
        color:'#A8A8A9',
        fontSize: 18
    },

    Row2:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },

    Shopping:{
        color:'#A8A8A9',
        fontSize: 18
    },

    Row3:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    Total:{
        color:'#4C5059',
        fontSize: 18
    }
});

export default Card