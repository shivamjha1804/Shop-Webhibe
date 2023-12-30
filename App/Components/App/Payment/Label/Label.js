import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Label = () => {
    return (
        <View>
            <Text style={styles.Title}>
            Payment
            </Text>
        </View>
    )
}

const styles =StyleSheet.create({
    Title:{
        color: 'black',
        fontSize: 22,
        fontWeight:'500'
    }
})
export default Label