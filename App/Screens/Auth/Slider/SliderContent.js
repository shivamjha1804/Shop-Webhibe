import React from 'react'
import { StatusBar, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NavigationService from '../../../Services/Navigation';


const SliderContent = (props) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'} />
      <View style={styles.Row1}>
        <Text style={styles.Row1Text}>
          {props.num}/3
        </Text>
        <Text style={styles.Row1Text} onPress={() => {
        //   Navigation.navigate("login")
            NavigationService.navigate("SignIn")
        }}>
          skip
        </Text>
      </View>

      <View style={styles.Row2}>
        <Image style={styles.Image} source={props.Image} />
      </View>

      <View style={styles.Row3}>
        <Text style={styles.Row3Head}>
          {props.Heading}
        </Text>

        <Text style={styles.Row3Text}>
          {props.Text}
        </Text>
      </View>

      <View style={styles.Row4}>
        <TouchableOpacity onPress={props.onPrev}>
          <Text style={{ color: '#C4C4C4', fontSize: 20, fontWeight: '600' }}>
            {props.Button1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onNext}>
          <Text style={{ color: '#F83758', fontSize: 20, fontWeight: '600' }}>
            {props.Button2}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
    Row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      marginTop: 35,
    },
  
    Row1Text: {
      fontSize: 20,
      fontWeight: '500',
      color: 'black'
    },
  
    Row2: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
      height: "40%"
    },
  
    Row3: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    Row3Head: {
      fontSize: 28,
      fontWeight: '800',
      color: 'black'
    },
  
    Row3Text: {
      marginTop: 20,
      maxWidth: '87.4%',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      color: 'black'
    },
  
    Row4: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
      marginTop: "45%",
    }
  })

export default SliderContent