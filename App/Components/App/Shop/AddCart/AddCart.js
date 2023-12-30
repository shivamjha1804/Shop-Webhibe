import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const AddCart = () => {
    return (
        <TouchableOpacity>
            <View style={{ backgroundColor: '#0B3689', paddingBottom: 10, height: 47, paddingRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <View style={{ position: 'absolute', bottom: 9, right: 142, width: 30, height: 60, }}>
                    <View style={{ position: 'relative', top: 35, zIndex: 1, left: 15 }}>
                        <Image source={require("../../../../Assets/Image/App/Shop/AddCart/cartIcon.png")} />
                    </View>
                    <Image style={{ width: 50, height: 50 }} source={require("../../../../Assets/Image/App/Shop/AddCart/BlueDot.png")} />
                </View>
                <Text style={{ paddingLeft: 50, paddingRight: 10, fontSize: 20, color: 'white', fontWeight: '600', top: 5 }}>
                    Go to Cart
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default AddCart