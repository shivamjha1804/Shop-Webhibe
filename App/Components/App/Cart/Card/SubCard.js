import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
// import { useDispatch } from 'react-redux'
// import { remove } from '../../../../Redux/Thunk/Product';
import ProductService from '../../../../Services/Product';

const SubCard = ({ item, ...props }) => {
    // const dispatch = useDispatch();
    const id = item._id;
    console.log("id : ", id);

    const removeItem = (data) => {
        ProductService.remove()
            .then(res => {
                console.log("res", res);
            })
            .catch(err => {
                console.log("err", err);
            })
    }
    return (
        <View
            style={{
                backgroundColor: 'white',
                padding: 5,
                marginBottom: 10,
                borderRadius: 15
            }}
        >
            <TouchableOpacity
                style={{
                    padding: 10,
                    flexDirection: 'row',
                    marginVertical: 10,
                    borderRadius: 15,
                    elevation: 3,
                    backgroundColor: '#fff',
                    columnGap: 10,
                }}

                onPress={() => {
                    if (props.onPress) {
                        props.onPress()
                    }
                }}
            >
                <View>
                    <Image
                        style={{
                            borderRadius: 10,
                            height: 100,
                            width: 100
                        }}
                        source={{ uri: item?.product_details?.[0]?.product_image?.[0] }}
                    />
                </View>
                <View
                    style={{
                        rowGap: 2,
                        paddingTop: 20
                    }}
                >
                    <Text
                        style={{
                            color: "#000",
                            paddingRight: 0,
                            fontSize: 15,
                            fontWeight: '600'
                        }}
                    >
                        {item?.product_details?.[0]?.product_name}
                    </Text>
                    <Text
                        style={{
                            color: '#F83758',
                            fontSize: 16,
                            fontWeight: '600',
                        }}
                    >
                        {'\u20B9'}{item.product_details?.[0]?.product_costprice}
                    </Text>
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 13,
                            fontWeight: '600',
                            textDecorationLine: 'line-through'
                        }}
                    >
                        {'\u20B9'}{item.product_details?.[0]?.product_sellingprice}
                    </Text>
                    <Text
                        style={{
                            color: '#000',
                            fontSize: 13,
                            fontWeight: '600',
                        }}
                    >
                        Quantity: {item.quantity}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: 'red',
                    alignSelf: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 10,
                    elevation: 3,
                }}

                onPress={() => {
                    removeItem(id)
                }}
            >
                <Text
                    style={{
                        color: "black",
                        fontSize: 15,
                        fontWeight: '800'
                    }}
                >
                    Remove
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubCard