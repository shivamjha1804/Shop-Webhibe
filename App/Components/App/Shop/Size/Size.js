import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SubSize from './SubSize'

const Details = [
  {
    size: "6"
  },

  {
    size: "7"
  },

  {
    size: "8"
  },

  {
    size: "9"
  },

  {
    size: "10"
  }
]

const Size = () => {
  const [size, setSize] = useState("");
  const getSize = (size) => {
    setSize(size);
  }
  return (
    <View>
      <View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.sizeContainer}>
            Size: {size}UK 
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {
          Details.map((item, index) => {
            return (
              <SubSize item={item} key={index} getSize={getSize} />
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sizeContainer: {
    color: 'black',
    marginVertical: 15,
    fontSize: 15,
    fontWeight: '600'
  }
})

export default Size