import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { fetchCart, quantity, remove } from '../../../../Redux/Thunk/Product';
import ProductService from '../../../../Services/Product';
import { Icon } from 'react-native-basic-elements';

const SubCard = ({ item, ...props }) => {
    const dispatch = useDispatch();
    const id = item?.product_details?.[0]._id;
    const [count, setCount] = useState(1);
    // console.log("id : ", item);

    useEffect(() => {
        dispatch(fetchCart())
    }, []);

    const removeItem = (data) => {
        dispatch(remove(data))
    }

    const addCounter = () => {
        if (count === 5) {
            return;
        }

        setCount(count + 1);
        dispatch(quantity({id, count}))
    }

    const lessCounter = () => {
        if (count <= 1) {
            return;
        }
        setCount(count - 1);
        dispatch(quantity({id, count}))
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
                    <View
                        style={{
                            flexDirection: 'row',
                            columnGap: 5,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: '#000',
                                fontWeight: '500'
                            }}
                        >
                            Quantity:
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                columnGap: 3
                            }}
                        >
                            <Icon
                                name='minus-circle'
                                type='FontAwesome'
                                size={19}
                                onPress={() => {
                                    lessCounter()
                                }}
                            />
                            <Text
                                style={{
                                    color: '#000',
                                    backgroundColor: 'silver',
                                    fontSize: 15,
                                    fontWeight: '600',
                                    paddingHorizontal: 10,
                                    borderRadius: 5
                                }}
                            >
                                {count}
                            </Text>
                            
                            <Icon
                                name='add-circle'
                                type='Ionicons'
                                size={20}
                                onPress={() => {
                                    addCounter()
                                }}
                            />
                        </View>
                    </View>
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