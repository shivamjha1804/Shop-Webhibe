import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SubCategory = ({item}) => {
  return (
    <View style={styles.Conatiner}>
        <Image source={item.Image}/>
        <Text style={styles.Text}>
            {item.Label}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Conatiner:{
        marginHorizontal: 10,
        alignItems:'center'
    },

    Text:{
        color: '#21003D'
    }
})

export default SubCategory