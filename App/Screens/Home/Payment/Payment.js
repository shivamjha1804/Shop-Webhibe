import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import Card from '../../../Components/App/Payment/Card/Card'
import Label from '../../../Components/App/Payment/Label/Label'
import PaymentCard from '../../../Components/App/Payment/PaymentCard/PaymentCard'
import Button from '../../../Components/App/Payment/Button/Button'


const Payment = () => {
    return (
        <View style={styles.Container}>
            <Header2 ImageLeft={require("../../../Assets/Image/App/Payment/Header2/BackIcon.png")} Title={"Checkout"} />
            <Card/>
            <View style={{ marginVertical: 30, borderWidth: 0.4, borderColor: '#C4C4C4' }}></View>
            <Label/>
            <PaymentCard/>
            <Button/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20
    }
})

export default Payment