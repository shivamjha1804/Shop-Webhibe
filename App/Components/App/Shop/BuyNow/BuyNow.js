import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const BuyNow = () => {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            Navigation.navigate("Buy");
        }}>
            <View style={{ backgroundColor: '#31B769', paddingBottom: 10,height: 47, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                <View style={{ position:'absolute',bottom: 10, right: 135, width: 30, height: 60, }}>
                    <View style={{ position: 'relative', top: 35, zIndex: 1, left: 16 }}>
                        <Image source={require("../../../../Assets/Image/App/Shop/BuyNow/clickIcon.png")} />
                    </View>
                    <Image style={{ width: 50, height: 50 }} source={require("../../../../Assets/Image/App/Shop/BuyNow/GreenDot.png")} />
                </View>
                <Text style={{ paddingLeft: 50,paddingRight:20, fontSize: 20, color: 'white', fontWeight: '600', top: 5 }}>
                    Buy Now
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default BuyNow