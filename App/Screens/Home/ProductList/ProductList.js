import React, { useEffect } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import Header from '../../../Components/CommonComponent/Header/Header'
import Search from '../../../Components/CommonComponent/Search/Search'
import Card from '../../../Components/App/ProductListComponent/Card/Card'
import { productList } from '../../../Redux/Thunk/Product'
import { useDispatch, useSelector } from 'react-redux'
import NavigationService from '../../../Services/Navigation'

const Data = [
    {
        Image: require("../../../Assets/Image/App/Dashboard/Product/person1.png"),
        ProductName: "Royal Watch Daytona Gold Silver",
        ProductPrice: "900",
        ProductSelling: "1200",
        Quantity: "100"
    },
    {
        Image: require("../../../Assets/Image/App/Dashboard/Product/person1.png"),
        ProductName: "Royal Watch Daytona Gold Silver",
        ProductPrice: "900",
        ProductSelling: "1200",
        Quantity: "100"
    },
    {
        Image: require("../../../Assets/Image/App/Dashboard/Product/person1.png"),
        ProductName: "Royal Watch Daytona Gold Silver",
        ProductPrice: "900",
        ProductSelling: "1200",
        Quantity: "100"
    },
    {
        Image: require("../../../Assets/Image/App/Dashboard/Product/person1.png"),
        ProductName: "Royal Watch Daytona Gold Silver",
        ProductPrice: "900",
        ProductSelling: "1200",
        Quantity: "100"
    },
]

const ProductList = ({route}) => {
    const {categoryId, subCategoryId} = route.params;
    // console.log(categoryId);
    const dispatch = useDispatch();
    const { productListData } = useSelector(state => state.Product);

    // console.log("category : ", productListData);
    useEffect(() => {
        dispatch(productList({
            categoryId,
            subCategoryId
        }));
    }, [dispatch]);
    return (
        <View
            style={{
                backgroundColor: '#fff',
                flex: 1,
                paddingHorizontal: 20
            }}
        >

            <Header />
            <Search />
            <FlatList
                data={productListData}
                renderItem={({item, index}) => {
                    return (
                        <Card
                            item={item}
                            key={index}
                            onPress={() => {
                                NavigationService.navigate('Product', {
                                    item:item
                                })
                            }}
                        />
                    )
                }}
            />
        </View>
    )
}

export default ProductList