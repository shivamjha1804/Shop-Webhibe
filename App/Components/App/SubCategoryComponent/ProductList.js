import React from 'react'
import { Image } from 'react-native'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductList = ({ item, ...props }) => {
  return (
    <TouchableOpacity
      style={
        styles.Conatiner
      }

      onPress={() => {
        if (props.onPress) {
          props.onPress()
        }
      }}
    >
      <Image
        source={require("../../../Assets/Image/App/SubCategory/ProductList/person1.png")}
      />

      <Text
        style={
          styles.Text
        }
      >
        {item.subCategory_name}
      </Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Conatiner: {
    borderColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingBottom: 15
  },

  Text: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '800',
    paddingVertical: 5
  }
})

export default ProductList