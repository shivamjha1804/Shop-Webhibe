import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import Label from '../../../Components/App/Cart/Label/Label'
import AddressBox from '../../../Components/App/Cart/AddressBox/AddressBox'
import Card from '../../../Components/App/Cart/Card/Card'

const Cart = () => {
    return (
        <ScrollView style={{backgroundColor:'white', paddingHorizontal:20}}>
            <Header2 ImageLeft={require("../../../Assets/Image/App/Cart/Header2/BackIcon.png")} Title={"Checkout"} />
            <Label Image={require("../../../Assets/Image/App/Cart/Label/locationIcon.png")} Title={"Delivery Address"}/>
            <AddressBox/>
            <Label Title={"Shopping List"}/>
            <Card/>
        </ScrollView>
    )
}

export default Cart