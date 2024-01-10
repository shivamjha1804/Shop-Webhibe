import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import NavigationService from '../../../../Services/Navigation'
import { Icon } from 'react-native-basic-elements'

const AddressBox = (props) => {
    // console.log("props---->", props.item.params.selectedAddress.name);
    console.log("Props::::", props);
    return (
        <View>
            <View style={{ flexDirection: 'row', columnGap: 10, }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'white',
                        borderWidth: 0.4,
                        justifyContent: 'center',
                        borderRadius: 10,
                        width: "70%",
                        borderColor: '#CACACA',
                        alignItems: 'center',
                        columnGap: 15,
                        flexDirection: 'row',
                    }}

                    onPress={() => {
                        NavigationService.navigate("Addresses");
                    }}
                >
                    <Icon
                        name='address-book'
                        type='FontAwesome'
                    />
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 20,
                            fontWeight: '800'
                        }}
                    >
                        Address
                    </Text>

                </TouchableOpacity>
                <View>
                    <View style={{ borderWidth: 0.4, padding: 30, borderRadius: 10, shadowColor: 'gray', shadowRadius: 10, borderColor: '#CACACA' }}>
                        <TouchableOpacity
                            onPress={() => {
                                NavigationService.navigate("AddressForm")
                            }}
                        >
                            <Image source={require("../../../../Assets/Image/App/Cart/AddressBox/addressAddIcon.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <View
                style={{
                    backgroundColor: 'white',
                    borderWidth: 0.4,
                    justifyContent: 'center',
                    borderRadius: 10,
                    borderColor: '#CACACA',
                    padding:10,
                    marginTop: 15
                }}
            >
                <Text
                    style={{
                        color:'#000',
                        fontSize:15
                    }}
                >
                  {props.item.addressType}
                </Text>
                <Text
                    style={{
                        color:'#000',
                        fontSize:15
                    }}
                >
                  {props.item.name}
                </Text>
                <Text
                    style={{
                        color:'#000',
                        fontSize:15
                    }}
                >
                  {props.item.mobileNo}
                </Text>
                <Text
                    style={{
                        color:'#000',
                        fontSize:15
                    }}
                >
                  {props.item.address}
                </Text>
                <Text
                    style={{
                        color:'#000',
                        fontSize:15
                    }}
                >
                  {props.item.landmark}
                </Text>
                <Text
                    style={{
                        color:'#000',
                        fontSize:15
                    }}
                >
                  {props.item.pincode}
                </Text>
            </View> */}
        </View>
    )
}

export default AddressBox