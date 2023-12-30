import React from 'react'
import { StyleSheet, View } from 'react-native'
import SubSummerSale from './SubSummerSale'


const SummerSale = () => {
  return (
    <View style={styles.Container}>
        <SubSummerSale Image={require("../../../../Assets/Image/App/Dashboard/SummerSale/SummerSale.png")} Title={"New Arrivals"} SubTitle={"Summer’ 25 Collections"} />
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems:'center',
        
    }
})

export default SummerSale