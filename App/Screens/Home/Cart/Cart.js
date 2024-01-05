import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import Label from '../../../Components/App/Cart/Label/Label'
import AddressBox from '../../../Components/App/Cart/AddressBox/AddressBox'
import CartCard from '../../../Components/App/Cart/Card/CartCart'
import Button from '../../../Components/App/Cart/Button/Button'

const Cart = () => {
    return (
        <View
            style={{
                backgroundColor:'#fff',
                flex:1
            }}
        >
            <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 20 }}>
                <Header2 ImageLeft={require("../../../Assets/Image/App/Cart/Header2/BackIcon.png")} Title={"Checkout"} />
                <Label Image={require("../../../Assets/Image/App/Cart/Label/locationIcon.png")} Title={"Delivery Address"} />
                <AddressBox />
                <Label Title={"Shopping List"} />
                <CartCard />
            </ScrollView>
            <Button />
        </View>
    )
}

export default Cart