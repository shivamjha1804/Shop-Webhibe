import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import Label from '../../../Components/App/Cart/Label/Label'
import AddressBox from '../../../Components/App/Cart/AddressBox/AddressBox'
import CartCard from '../../../Components/App/Cart/Card/CartCart'
import Button from '../../../Components/App/Cart/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { defaultAddress, getAddress } from '../../../Redux/Thunk/Address'
import { AsyncStorage } from 'react-native';

const Cart = () => {
    const { defaultAddress } = useSelector(state => state.Address);

    // console.log("Default Address:- ", defaultAddress);



    // console.log("fdkjjjjjjjj", selectedAddress);

    return (
        <View
            style={{
                backgroundColor: '#fff',
                flex: 1
            }}
        >
            <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 20 }}>
                <Header2 ImageLeft={require("../../../Assets/Image/App/Cart/Header2/BackIcon.png")} Title={"Checkout"} />
                <Label Image={require("../../../Assets/Image/App/Cart/Label/locationIcon.png")} Title={"Delivery Address"} />
                
                <AddressBox add={defaultAddress} />
                
                <Label Title={"Shopping List"} />

                <CartCard />
            </ScrollView>
            <Button />
        </View>
    )
}

export default Cart