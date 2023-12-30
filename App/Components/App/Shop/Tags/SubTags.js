import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SubTags = ({item}) => {
  return (
    <View style={styles.Container}>
        <Image source={item.Image}/>
        <Text style={{color:'#828282'}}>
            {item.Text}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        borderColor:"#828282",
        borderWidth:1,
        borderRadius:5,
        flexDirection:'row',
        columnGap:5,
        padding:5
    }
})

export default SubTags