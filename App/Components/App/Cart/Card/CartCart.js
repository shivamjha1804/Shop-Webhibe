import React from 'react'
import { View } from 'react-native'
import Card from '../../../App/ProductListComponent/Card/Card'
import { useSelector } from 'react-redux'
import SubCard from './SubCard'

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

const CartCard = () => {
    const { addCartData } = useSelector(state => state.Product);
    // console.log("addCartData: ", addCartData);
    return (
        <View>
            {
                addCartData.map((item, index) => {
                    return (
                        <SubCard
                            item={item}
                            key={index}
                        />
                    )
                })
            }
        </View>
    )
}

export default CartCard