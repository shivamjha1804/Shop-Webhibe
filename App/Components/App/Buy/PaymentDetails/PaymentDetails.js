import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const PaymentDetails = () => {
  return (
    <View style={styles.Container}>
        <View style={styles.Row1}>
            <Text style={styles.Title}>
            Order Payment Details
            </Text>
        </View>
        <View style={styles.Row2}>
            <Text style={styles.Row2Col1}>
            Order Amounts
            </Text>
            <Text style={styles.Row2Col2}>
            {'\u20B9'} 7,000.00
            </Text>
        </View>
        <View style={styles.Row3}>
            <View style={styles.Row3Col1}>
                <Text style={styles.Convenience}>
                Convenience
                </Text>
                <Text style={styles.KnowMore}>
                Know More
                </Text>
            </View>
            <View>
                <Text style={styles.Coupon}>
                Apply Coupon
                </Text>
            </View>
        </View>
        <View style={styles.Row4}>
            <Text style={styles.Row4col1}>
            Delivery Fee
            </Text>
            <Text style={styles.Row4col2}>
            Free
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        paddingVertical: 15,
        rowGap:10
    },

    Row1:{
        paddingBottom: 20
    },

    Title:{
        color:'black',
        fontSize:18,
        fontWeight:'600'
    },

    Row2:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    Row3:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    Row3Col1:{
        flexDirection:'row',
        justifyContent:'space-between',
        columnGap: 10
    },

    Row4:{
        flexDirection:'row',
        justifyContent:'space-between'
    },

    Row2Col1:{
        color:'black',
        fontSize: 16,

    },

    Row2Col2:{
        color:'black',
        fontSize: 16,
        fontWeight:'600'
    },

    Convenience:{
        color:'black',
        fontSize: 16,
    },

    KnowMore:{
        color:'#F83758',
        fontWeight: '500'
    },

    Coupon:{
        color:'#EA1712',
        fontSize: 16,
        fontWeight: '600'
    },

    Row4col1:{
        color:'black',
        fontSize: 16,
    },

    Row4col2:{
        color:'#F83758',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default PaymentDetails