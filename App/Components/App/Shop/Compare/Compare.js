import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Compare = (props) => {
  return (
    <TouchableOpacity style={{ shadowColor: 'white', borderWidth: 1, borderRadius: 5, borderColor: '#D9D9D9' }}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, columnGap: 10, alignItems: 'center' }}>
        <Image source={props.Image} />
        <Text style={{ color: 'black', fontWeight: '500', fontSize: 15 }}>
          {props.Title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Compare