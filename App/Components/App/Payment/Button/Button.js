import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ReactNativeModal from 'react-native-modal';


const Button = () => {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (

    <>
      <ReactNativeModal isVisible={isModalVisible} style={styles.Container}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.Row1}>
          <Image source={require("../../../../Assets/Image/App/Payment/Button/PaymentConfirmation.png")} />
          <Image style={styles.Tick} source={require("../../../../Assets/Image/App/Payment/Button/PaymentConfirmationTick.png")} />
        </View>
        <View>
          <Text style={styles.Text}>
            Payment done successfully.
          </Text>
        </View>
      </ReactNativeModal>
      <TouchableOpacity style={styles.button} onPress={() => {
        toggleModal()
      }}>
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: '#F83758',
    paddingVertical: 20,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: '800',
    fontSize: 18,
    color: 'white'
  },

  Container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    marginBottom: 300,
    borderRadius: 15,
  },

  Tick: {
    position: 'absolute',
    top: 70,
    left: 20
  },

  Row1: {
    paddingTop: 40
  },

  Text: {
    color: 'black',
    paddingVertical: 30,
    fontSize: 18,
    fontWeight: '600'
  }
})

export default Button