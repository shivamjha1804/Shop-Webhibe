import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import Label from '../../../Components/App/Cart/Label/Label'
import AddressBox from '../../../Components/App/Cart/AddressBox/AddressBox'
import CartCard from '../../../Components/App/Cart/Card/CartCart'
import Button from '../../../Components/App/Cart/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getAddress } from '../../../Redux/Thunk/Address'

const Cart = ({route}) => {
    const {getAddressData} = useSelector(state => state.Address);
    const dispatch = useDispatch();
    const selectedAddress = route;

    useEffect(() => {
        dispatch(getAddress())
    }, []);

    // const defaultAddress = getAddressData.find((elements) => {
    //     return elements.addressType === 'Home'
    // })

    // // console.log("selectedAddress:----->>>>>>---", selectedAddress);
    // // console.log("defaultAddress:-------", defaultAddress);

    let item;

    // if (selectedAddress.params === undefined) {
    //     item = defaultAddress
    // }

    // else{
    //     item = selectedAddress
    // }

    // console.log("jkhkhfdk:-", item);

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
                <AddressBox item={item} />
                <Label Title={"Shopping List"} />
                
                <CartCard />
            </ScrollView>
            <Button />
        </View>
    )
}

export default Cart