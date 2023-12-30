import React from 'react'
import { Text, View } from 'react-native'

const Timer = () => {
  return (
    <View style={{backgroundColor:'#FFCCD5', paddingVertical: 20, borderRadius: 10, paddingLeft: 30}}>
      <Text style={{color:'black', fontSize: 18, fontWeight:'500'}}>
        Delivery in
      </Text>
      <Text style={{color:'black', fontSize: 22, fontWeight:'700'}}>
        1 within Hour
      </Text>
    </View>
  )
}

export default Timer