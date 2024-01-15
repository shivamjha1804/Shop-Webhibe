import React from 'react'
import { Image, Text, View } from 'react-native'

const Label = ({Images, Title}) => {
    // console.log("Image::::", Images);
    // console.log("Title::::", Title);
    return (
        <View style={{ flexDirection: 'row', paddingTop: 50, paddingBottom:20, columnGap: 5, alignItems: 'center' }}>
            {
                Images === undefined
                ? <View></View>
                : <Image source={Images} />
            }
            <Text style={{ color: 'black', fontWeight: "600", fontSize: 15 }}>
                {Title}
            </Text>
        </View>
    )
}

export default Label