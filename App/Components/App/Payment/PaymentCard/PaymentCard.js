import React from 'react'
import SubPaymentCard from './SubPaymentCard'
import { View } from 'react-native'

const Details = [
    {
        Image: require("../../../../Assets/Image/App/Payment/PaymentCard/visa.png"),
        CardNumber : '*********2109'
    },

    {
        Image: require("../../../../Assets/Image/App/Payment/PaymentCard/paypal.png"),
        CardNumber : '*********2109'
    },

    {
        Image: require("../../../../Assets/Image/App/Payment/PaymentCard/maestro.png"),
        CardNumber : '*********2109'
    },

    {
        Image: require("../../../../Assets/Image/App/Payment/PaymentCard/apple.png"),
        CardNumber : '*********2109'
    },
]

const PaymentCard = () => {
  return (
    <View>
        {
            Details.map((items, index) => {
                return (
                    <SubPaymentCard item={items} key={index}/>
                )
            })
        }
    </View>
  )
}

export default PaymentCard