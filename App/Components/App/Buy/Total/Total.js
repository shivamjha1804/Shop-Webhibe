import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Total = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Row1}>
                <Text style={styles.Order}>
                    Order Total
                </Text>
                <Text style={styles.Order}>
                    {'\u20B9'} 7,000.00
                </Text>
            </View>
            <View style={styles.Row2}>
                <Text style={styles.EMI}>
                EMI  Available 
                </Text>
                <Text style={styles.Details}>
                Details
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        rowGap: 10
    },

    Row1:{
        flexDirection:'row',
        justifyContent:'space-between',
        

    },

    Order:{
        color:'black',
        fontSize: 18,
        fontWeight:'600'
    },

    Row2:{
        flexDirection: 'row',
        columnGap: 25,
        alignItems: 'center'
    },

    EMI:{
        fontSize: 16,
        color: 'black'
    },

    Details:{
        fontSize: 14,
        color: '#F83758',
        fontWeight:'600'
    }
})

export default Total