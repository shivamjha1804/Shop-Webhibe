import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ReactNativeModal from 'react-native-modal';
import { buy } from '../../../../Redux/Thunk/Product';
import ProductService from '../../../../Services/Product';


const Button = () => {
    const { addCartData } = useSelector(state => state.Product);
    const dispatch = useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);

    const payment = (data) => {
        console.log("Data: ", JSON.stringify(data))
        // dispatch(buy(data))
        ProductService.buy()
        .then(res => {
            console.log("res",res);
        })
        .catch(err => {
            console.log("err",err);
        })
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View>
            <ReactNativeModal isVisible={isModalVisible} style={styles.ModalContainer}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View style={styles.ModalRow1}>
                    <Image source={require("../../../../Assets/Image/App/Payment/Button/PaymentConfirmation.png")} />
                    <Image style={styles.ModalTick} source={require("../../../../Assets/Image/App/Payment/Button/PaymentConfirmationTick.png")} />
                </View>
                <View>
                    <Text style={styles.ModalText}>
                        Payment done successfully.
                    </Text>
                </View>
            </ReactNativeModal>

            <TouchableOpacity
                style={
                    styles.Container
                }

                onPress={() => {
                    toggleModal()
                    payment(addCartData)
                }}
            >
                <Text
                    style={
                        styles.Text
                    }
                >
                    Checkout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'green',
        alignSelf: 'center',
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 15,
        elevation: 15,
        marginBottom: 15
    },

    Text: {
        fontSize: 20,
        color: "#000",
        fontWeight: '700'
    },

    ModalContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 250,
        marginBottom: 300,
        borderRadius: 15,
    },

    ModalTick: {
        position: 'absolute',
        top: 70,
        left: 20
    },

    ModalRow1: {
        paddingTop: 40
    },

    ModalText: {
        color: 'black',
        paddingVertical: 30,
        fontSize: 18,
        fontWeight: '600'
    }
})

export default Button