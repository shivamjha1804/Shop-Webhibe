import React from 'react'
import { Text, View } from 'react-native'
import Card from '../../../Components/App/Buy/Card/Card'
import Coupons from '../../../Components/App/Buy/Coupons/Coupons'
import PaymentDetails from '../../../Components/App/Buy/PaymentDetails/PaymentDetails'
import Total from '../../../Components/App/Buy/Total/Total'
import Payment from '../../../Components/App/Buy/Payment/Payment'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'

const Buy = () => {
  return (
    <>
      <View style={{ backgroundColor: 'white', paddingBottom: 25, paddingHorizontal: 20 }}>
        <Header2 Title={"Shopping Bag"} ImageLeft={require("../../../Assets/Image/App/Buy/Header2/BackIcon.png")} ImageRight={require("../../../Assets/Image/App/Buy/Header2/cartIcon.png")} />
        <Card />
        <Coupons />
        <View style={{ marginVertical: 30, borderWidth: 0.4, borderColor: '#C4C4C4' }}></View>
        <PaymentDetails />
        <View style={{ marginVertical: 30, borderWidth: 0.4, borderColor: '#C4C4C4' }}></View>
        <Total />
      </View>
      <View style={{backgroundColor:'white',flex:1}}>
        <View style={{borderTopWidth:1, borderLeftWidth:1, borderRightWidth: 1, borderTopLeftRadius: 25, borderTopRightRadius: 25, borderColor:"#C4C4C4", paddingHorizontal: 20 }}>
          <Payment/>
        </View>
      </View>
    </>
  )
}

export default Buy