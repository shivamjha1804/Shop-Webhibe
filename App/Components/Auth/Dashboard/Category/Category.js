import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import SubCategory from './SubCategory'

const Detail = [
    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent1.png'),
        Label: "Beauty"
    },

    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent2.png'),
        Label: "Fashion"
    },

    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent3.png'),
        Label: "Kids"
    },

    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent4.png'),
        Label: "Mens"
    },

    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent5.png'),
        Label: "womens"
    },

    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent1.png'),
        Label: "Beauty"
    },

    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent1.png'),
        Label: "Beauty"
    },

    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent1.png'),
        Label: "Beauty"
    },

    {
        Image: require('../../../../Assets/Image/App/Dashboard/Category/subComponent1.png'),
        Label: "Beauty"
    },
]

const Category = () => {
    return (
        <View style={{ backgroundColor: "white", }}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                {
                    Detail.map((item, index)=>{
                        return (
                            <SubCategory item={item} key={index}/>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    }
})

export default Category