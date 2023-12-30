import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Container } from 'react-native-basic-elements'

const SubPaymentCard = ({item}) => {
  return (
    <View style={styles.Container}>
        <Image source={item.Image}/>
        <Text style={styles.CardNumber}>
        {item.CardNumber}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 15
    },

    CardNumber:{
        color:'#6E7179',
        fontSize: 16,
        fontWeight:'500'
    }
})

export default SubPaymentCard