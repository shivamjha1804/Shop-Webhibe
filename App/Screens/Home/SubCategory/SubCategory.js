import React, { useEffect } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../Components/CommonComponent/Header/Header'
import Search from '../../../Components/CommonComponent/Search/Search'
import ProductList from '../../../Components/App/SubCategoryComponent/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { subCategory } from '../../../Redux/Thunk/Product'
import NavigationService from '../../../Services/Navigation'

const Data = [
    {
        text: "fruit"
    },
    {
        text: "fruit"
    },
    {
        text: "fruit"
    },
    {
        text: "fruit"
    },
    {
        text: "fruit"
    },
    {
        text: "fruit"
    },
    {
        text: "fruit"
    },
]


const SubCategory = ({route}) => {
    const {categoryId} = route.params;
    // console.log(categoryId);
    const dispatch = useDispatch();
    const { subCategoryData } = useSelector(state => state.Product);

    // console.log("category : ", subCategoryData);
    useEffect(() => {
        dispatch(subCategory(categoryId));
    }, [dispatch]);

    return (
        <View
            style={{
                backgroundColor: '#fff',
                flex: 1,
                paddingHorizontal: 20,

            }}
        >
            <Header />
            <Search />
            <FlatList
                style={
                    styles.contentContainer
                }
                data={subCategoryData}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return (
                        <ProductList
                            item={item}
                            key={index}
                            onPress={() => {
                                NavigationService.navigate('ProductList', {
                                    categoryId : categoryId,
                                    subCategoryId : item._id
                                })
                            }}
                        />
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    }
})

export default SubCategory