import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NavigationService from '../../../../Services/Navigation'

const Payment = () => {
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.Amount}>
                    {'\u20B9'} 7,000.00
                </Text>
                <Text style={styles.Details}>
                    View Details
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => {
                   NavigationService.navigate('Payment')
                }}>
                    <Text style={styles.buttonText}>
                        Proceed to Payment
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },

    Amount:{
        color:'black',
        fontSize: 20,
        fontWeight:'600'
    },

    Details:{
        fontSize: 14,
        color: '#F83758',
        fontWeight:'600'
    },

    button: {
        backgroundColor: '#F83758',
        paddingVertical: 15,
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: '800',
        fontSize: 18,
        color: 'white'
    },
})

export default Payment