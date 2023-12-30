import React from 'react'
import { Image, Text, View } from 'react-native'

const Label = (prop) => {
    return (
        <View style={{ flexDirection: 'row', paddingTop: 50, paddingBottom:20, columnGap: 5, alignItems: 'center' }}>
            <Image source={prop.Image} />
            <Text style={{ color: 'black', fontWeight: "600", fontSize: 15 }}>
                {prop.Title}
            </Text>
        </View>
    )
}

export default Label