import React from 'react'
import SubTags from './SubTags'
import { View } from 'react-native'

const Details = [
    {
        Image: require("../../../../Assets/Image/App/Shop/Tags/locationIcon.png"),
        Text: "Nearest Store"
    },
    
    {
        Image: require("../../../../Assets/Image/App/Shop/Tags/lockIcon.png"),
        Text: "VIP"
    },
    
    {
        Image: require("../../../../Assets/Image/App/Shop/Tags/returnIcon.png"),
        Text: "Return policy"
    }
]


const Tags = () => {
    return (
        <View style={{flexDirection:'row', columnGap:8,}}>
            {
                Details.map((item, index) => {
                    return(
                        <SubTags item={item} key={index} />
                    )
                })
            }
        </View>
    )
}

export default Tags