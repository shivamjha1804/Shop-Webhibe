import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import SubCategory from './SubCategory'
import { category } from '../../../../Redux/Thunk/Product'
import { useDispatch, useSelector } from 'react-redux'


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
    const dispatch = useDispatch();
    const {categoryData, loading } = useSelector(state => state.Product);
    // const[product, setProduct] = useState([])

    useEffect(() => {
        dispatch(category());
    }, [dispatch]);

    return (
        <View style={{ backgroundColor: "white", }}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                {
                    // categoryData.map((item, index)=>{
                    //     return (
                    //         <SubCategory item={item} key={index}/>
                    //     )
                    // })
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