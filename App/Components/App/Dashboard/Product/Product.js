import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import SubProduct from './SubProduct'


const Detail = [
    {
        Image: require("../../../../Assets/Image/App/Dashboard/Product/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
    {
        Image: require("../../../../Assets/Image/App/Dashboard/Product/person2.png"),
        Title: "HRX by Hrithik Roshan",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹2499",
        CrossedPrice: "₹4999",
        Percentage: "50%Off",
        Rating: "344567"
    },
    {
        Image: require("../../../../Assets/Image/App/Dashboard/Product/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
    {
        Image: require("../../../../Assets/Image/App/Dashboard/Product/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    }
]


const Product = () => {
    return (
        <View style={styles.Container}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                {Detail.map((item, index) => {
                    return(
                        <SubProduct item={item} key={index}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    },

    Container:{
        backgroundColor:'white'
    }
})

export default Product