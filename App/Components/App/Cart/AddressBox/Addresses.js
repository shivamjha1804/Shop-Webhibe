import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header2 from '../../../CommonComponent/Header2/Header2'
import AddressCard from './AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { defaultAddress, getAddress } from '../../../../Redux/Thunk/Address'
import NavigationService from '../../../../Services/Navigation'

const Addresses = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddress())
    }, [dispatch]);

    const { getAddressData } = useSelector(state => state.Address);
    const [fullAddress, setfullAddress] = useState(getAddressData)
    const [ChildValue, SetChildValue] = useState()

    useEffect(() => {
        setfullAddress(getAddressData)
    }, [getAddressData])

    const selectedAddress = fullAddress.find((elements) => {
        return elements.isDefault === true
    })

    const getChildData = (val) => {
        SetChildValue(val)
    };

    const addressDefault = (id) => {
        dispatch(defaultAddress(id))
    }

    return (
        <View
            style={{
                backgroundColor: '#fff',
                flex: 1,
                paddingHorizontal: 20
            }}
        >
            <Header2 ImageLeft={require("../../../../Assets/Image/App/Cart/Header2/BackIcon.png")} Title={"Checkout"} />

            <Text
                style={{
                    color: '#000',
                    fontSize: 28,
                    fontWeight: '700',
                    marginVertical: 25
                }}
            >
                Select Address:
            </Text>

            <ScrollView>
                {
                    fullAddress.map((item, index) => {
                        return (
                            <AddressCard
                                item={item}
                                key={index}
                                addressData={fullAddress}
                                setAddressData={setfullAddress}
                                selectedAddress={(val) => Choosed(val)}
                                sendToParent={getChildData}
                            />
                        )
                    })
                }
            </ScrollView>

            <View
                style={{
                    backgroundColor: '#fff',
                    paddingVertical: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 25,
                        paddingVertical: 15,
                        borderRadius: 15
                    }}

                    onPress={() => {
                        NavigationService.navigate('Cart', { selectedAddress })
                        addressDefault(ChildValue)
                    }}
                >
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 20,
                            fontWeight: '800'
                        }}
                    >
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Addresses