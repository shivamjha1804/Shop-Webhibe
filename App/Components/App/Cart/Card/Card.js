import React from 'react'
import SubCard from './SubCard'
import { View } from 'react-native'

const Details = [
    {
        Image: require("../../../../Assets/Image/App/Cart/Card/person1.png"),
        Title: "Women’s Casual Wear",
        Variation: {
            Black: "Black",
            Red: "Red"
        },
        Rating: "4.8",
        Price: "$ 34.00",
        Discount: "33",
        CrossedPrice: "$ 64.00"
    }, 
    {
        Image: require("../../../../Assets/Image/App/Cart/Card/person1.png"),
        Title: "Women’s Casual Wear",
        Variation: {
            Black: "Black",
            Red: "Red"
        },
        Rating: "4.8",
        Price: "$ 34.00",
        Discount: "33",
        CrossedPrice: "$ 64.00"
    }, 
    {
        Image: require("../../../../Assets/Image/App/Cart/Card/person1.png"),
        Title: "Women’s Casual Wear",
        Variation: {
            Black: "Black",
            Red: "Red"
        },
        Rating: "4.8",
        Price: "$ 34.00",
        Discount: "33",
        CrossedPrice: "$ 64.00"
    }, 
    {
        Image: require("../../../../Assets/Image/App/Cart/Card/person1.png"),
        Title: "Women’s Casual Wear",
        Variation: {
            Black: "Black",
            Red: "Red"
        },
        Rating: "4.8",
        Price: "$ 34.00",
        Discount: "33",
        CrossedPrice: "$ 64.00"
    }, 

    
]

const Card = () => {
    return (
        <View>
            {
                Details.map((item, index) => {
                    return (
                        <SubCard item={item} key={index} />
                    )
                })
            }
        </View>
    )
}

export default Card