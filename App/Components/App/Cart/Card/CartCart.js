import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Card from '../../../App/ProductListComponent/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import SubCard from './SubCard'
import { fetchCart } from '../../../../Redux/Thunk/Product'

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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCart())
      }, []);
    
    const { addCartData } = useSelector(state => state.Product);
    console.log("addCartData: >>>>>>>>>>>>>>>>>>>>", addCartData);
    return (
        <View>
            {addCartData && addCartData.length > 0 ?
                addCartData.map((item, index) => {
                    return (
                        <SubCard
                            item={item}
                            key={index}
                        />
                    )
                })
                :
                <View>
                    <Text >No Data Found</Text>
                </View>
            }
        </View>
    )
}

export default CartCard