import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const AddressBox = () => {
    return (
        <View style={{ flexDirection: 'row', columnGap: 10,}}>
            <View style={{ backgroundColor: 'white', borderWidth: 0.4, borderRadius: 10, width: "70%", borderColor: '#CACACA' }}>
                <View style={{ margin: 10 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Image source={require("../../../../Assets/Image/App/Cart/AddressBox/addressEditIcon.png")} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: 'black' }}>
                            Address :
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: 'black' }}>
                            216 St Paul's Rd, London N1 2LL, UK
                            Contact :  +44-784232
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={{ borderWidth: 0.4, padding: 30, borderRadius: 10, shadowColor: 'gray', shadowRadius: 10, borderColor: '#CACACA' }}>
                    <TouchableOpacity>
                        <Image source={require("../../../../Assets/Image/App/Cart/AddressBox/addressAddIcon.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AddressBox