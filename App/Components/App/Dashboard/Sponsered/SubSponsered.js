import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SubSponsered = (props) => {
  return (
    <View clas>
        <View>
            <Text style={{color:'black', fontSize:25, fontWeight:'500', marginBottom: 20}}>
            Sponserd
            </Text>
        </View>
        <View>
            <Image style={{width:365, borderRadius: 10}} source={props.Image}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10}}>
            <Text style={{color:'black', fontWeight:'600', fontSize: 20}}>
            {props.Discount}
            </Text>
            <Image source={require("../../../../Assets/Image/App/Dashboard/Sponcer/leftTurn.png")}/>
        </View>
    </View>
  )
}

const styles =StyleSheet.create({

})

export default SubSponsered