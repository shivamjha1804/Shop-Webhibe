import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = (prop) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {prop.Title}
        </Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#F83758',
        paddingVertical: 20,
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
      },
  
      buttonText: {
        fontWeight: '800',
        fontSize: 18,
        color: 'white'
      },
})

export default Button