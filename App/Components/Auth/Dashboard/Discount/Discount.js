import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'
import SubDiscount from './SubDiscount'

const Discount = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.subContainer}>
                <Swiper height={250} activeDotColor='#FFA3B3' dotColor='#DEDBDB' style={styles.wrapper} >
                    <SubDiscount Image={require('../../../../Assets/Image/App/Dashboard/Discount/discount.png')} Text1={"50-40% OFF"} Text2={"Now in (product) \nAll colours"}/>
                    <SubDiscount Image={require('../../../../Assets/Image/App/Dashboard/Discount/discount.png')}/>
                    <SubDiscount Image={require('../../../../Assets/Image/App/Dashboard/Discount/discount.png')}/>
                </Swiper>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
    },
    subContainer:{
        marginTop: 20,
    },  

    wrapper: {},
})

export default Discount