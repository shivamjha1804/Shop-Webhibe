import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NavigationService from '../../../../Services/Navigation'

const SubCategory = ({item, props}) => {
  return (
    <TouchableOpacity 
        style={styles.Conatiner}
        onPress={() => {
            NavigationService.navigate('SubCategory', {
                categoryId:item._id
            })
        }}
    >
        <Image source={require('../../../../Assets/Image/App/Dashboard/Category/subComponent1.png')}/>
        <Text style={styles.Text}>
            {item.category_name}
        </Text>
    </TouchableOpacity>
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