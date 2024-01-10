import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Icon, RadioButton } from 'react-native-basic-elements';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress, getAddress } from '../../../../Redux/Thunk/Address';

const AddressCard = ({ item, index, addressData, setAddressData }) => {
    const { getAddressData } = useSelector(state = state => state.Address)
    console.log("getAddressData :----", getAddressData);
    const dispatch = useDispatch();
    console.log("hfskkkkkkkkk",item._id);

   
    const addressDelete = (id) => {
        dispatch(deleteAddress(id))

        dispatch(getAddress())
        // useEffect(() => {
        // }, []);
    
        // console.log("hgsllllllllllllll");
    }

    // console.log('selectedAddress>>>',selectedAddress)

    const SelectRadioBtn = () => {

        setAddressData(addressData.map((it => {
            return it._id == item._id ? { ...it, selected: true } : ({ ...it, selected: false })
        })))

    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => SelectRadioBtn()}
                style={{
                    backgroundColor: '#fff',
                    elevation: 5,
                    borderRadius: 10,
                    padding: 15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 15,
                    alignItems: 'center'
                }}
            >
                <View>
                    <Text
                        style={{
                            color: '#000'
                        }}
                    >
                        {item.addressType}

                    </Text>
                    <Text
                        style={{
                            color: '#000'
                        }}
                    >
                        {item.name}

                    </Text>
                    <Text
                        style={{
                            color: '#000'
                        }}
                    >
                        {item.mobileNo}

                    </Text>
                    <Text
                        style={{
                            color: '#000'
                        }}
                    >
                        {item.address}

                    </Text>
                    <Text
                        style={{
                            color: '#000'
                        }}
                    >
                        {item.landmark}

                    </Text>
                    <Text
                        style={{
                            color: '#000'
                        }}
                    >
                        {item.pincode}

                    </Text>
                </View>

                <RadioButton
                    selected={item.selected}
                    onChange={() => {
                        SelectRadioBtn()
                    }}
                    size={20}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor:'red',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius: 15,
                    flexDirection:'row',
                    paddingVertical: 15,
                    columnGap: 10,
                    marginHorizontal: 70,
                    marginBottom: 35
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize:15,
                        fontWeight:'600'
                    }}

                    onPress={() => {
                        addressDelete(item._id)
                    }}
                >
                    Delete Address
                </Text>
                <Icon
                    name='delete'
                    type='MaterialCommunityIcon'
                />
            </TouchableOpacity>
        </View>
    )
}

export default AddressCard